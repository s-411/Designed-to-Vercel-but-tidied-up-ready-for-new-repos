export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center md:py-32">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            MM Design System Starter
          </span>
          <h1 className="text-balance text-4xl font-heading md:text-5xl">
            Ship every screen with a single source of truth.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            This starter is pre-wired to the MM Design System tokens, Tailwind theme extensions, and dark-mode provider.
            Swap copy, add sections, and stay inside the design guardrails from the first commit.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button type="button" className="btn-mm">
              View Token Source
            </button>
            <a
              href="https://github.com/s-411/design-to-vercel/blob/main/docs/AI_IMPLEMENTATION_GUIDE.md"
              className="inline-flex items-center gap-2 rounded-card border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Read the implementation guide
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-16 md:grid-cols-3">
        {[
          {
            title: "Token Driven",
            body: "Design tokens generate colors, typography, spacing, and Tailwind utilities so every surface stays in sync.",
          },
          {
            title: "Ready for Dark Mode",
            body: "Toggle themes using the shared ThemeProvider. Semantic tokens adapt automatically for optimal contrast.",
          },
          {
            title: "AI Friendly",
            body: "Lint rules block hard-coded colors and the docs include a starter prompt for new agents.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-card border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-heading text-xl">{item.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
