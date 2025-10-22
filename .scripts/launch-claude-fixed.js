// Opens Claude Code v2, then reloads the webview after mount.
// Requires the `code` CLI to be available in PATH.
const { exec } = require('child_process');

function run(cmd) {
  return new Promise((res, rej) => exec(cmd, (e, out, err) => e ? rej(e || err) : res(out)));
}

(async () => {
  try {
    console.log('Launching Claude Code v2…');
    await run('code --command anthro.claude-code.openChat'); // open a new Claude Code chat
    setTimeout(async () => {
      console.log('Reloading webview to hydrate /commands…');
      await run('code --command workbench.action.webview.reloadWebviewAction');
      console.log('Done. Type "/" now.');
    }, 1000);
  } catch (e) {
    console.error('Launch failed:', e.message || e);
    console.error('Tip: install the VS Code CLI via Command Palette → “Shell Command: Install \'code\' command in PATH”');
  }
})();