// Multi-pulse refresh for Claude v2 /commands (JSON + Markdown)
const fs = require('fs');
const path = require('path');

const workspace = process.cwd();
const claudeDir = path.join(workspace, '.claude');
const commandsJson = path.join(claudeDir, 'commands.json');
const commandsMdDir = path.join(claudeDir, 'commands');

// Touch helper (prefer mtime, fall back to tiny content tweak)
function touchFile(p) {
  const time = new Date();
  try { fs.utimesSync(p, time, time); }
  catch {
    const buf = fs.readFileSync(p, 'utf8');
    if (p.endsWith('.json')) {
      let obj; try { obj = JSON.parse(buf) } catch { obj = {} }
      obj.__refresh = time.toISOString();
      fs.writeFileSync(p, JSON.stringify(obj, null, 2));
    } else {
      fs.writeFileSync(p, buf + '\u200B'); // zero-width space
    }
  }
}

function listTargets() {
  const files = [];
  if (fs.existsSync(commandsJson)) files.push(commandsJson);
  if (fs.existsSync(commandsMdDir)) {
    for (const f of fs.readdirSync(commandsMdDir)) {
      if (f.toLowerCase().endsWith('.md')) files.push(path.join(commandsMdDir, f));
    }
  }
  return files;
}

async function pulse(times = 5, intervalMs = 600) {
  const targets = listTargets();
  if (!targets.length) {
    console.log('⚠️ No .claude command defs found.');
    return;
  }
  console.log(`🔁 Refreshing ${targets.length} file(s) with ${times} pulses…`);
  for (let i = 1; i <= times; i++) {
    for (const p of targets) touchFile(p);
    console.log(`✅ Pulse ${i}/${times}`);
    if (i < times) await new Promise(r => setTimeout(r, intervalMs));
  }
  console.log('🎯 Claude /commands registry refresh complete.');
}

pulse().catch(err => {
  console.error('❌ Refresh error:', err);
  process.exit(1);
});