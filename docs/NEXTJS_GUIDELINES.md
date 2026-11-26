# Next.js coding guidelines

The rules every change to this repo follows. Read this before writing code; update it in the same
change when a rule turns out wrong.

**Sources.** The performance rules follow `vercel-labs/agent-skills` → `react-best-practices` (8
categories ordered by impact). `vercel-labs/next-skills` → `next-best-practices` was found only as
directory listings (its file could not be fetched), so the Next.js rules come from general Next.js 16
knowledge plus this project's design skill (`design-taste-frontend`).
Anything marked **(verify)** depends on the installed version: check `node_modules/next/dist/docs`
or nextjs.org/docs before relying on it.

---

## 1. Stack and why

| Choice | Decision | Reason |
|---|---|---|
| Framework | Next.js 16, App Router, `src/` directory | Current stable; the Pages Router is not used |
| Language | TypeScript, `strict: true` | Types are the first review |
| Rendering | **Static export** (`output: 'export'`) | The design skill checks the built page in `out/`; the site has no server state |
| Styling | Plain CSS: the design kit's `system.css` tokens + one `site.css` for page rules | One spacing, type, radius and button system (design rule: never add a second one). No Tailwind |
| Motion | The design kit's motion layer (`data-enter`, `data-moment`, hover layer) + CSS transitions | Every animation is declared in markup, no animation library on the page |
| Package manager | npm (`package-lock.json` committed) | One lockfile only |

Never add a dependency without a line in the PR saying what it replaces or why the platform cannot do it.

## 2. Folder structure

```
src/
  app/                 routes only: layout.tsx, page.tsx, not-found.tsx, error.tsx, sitemap.ts
  components/
    sections/          one file per page section (Hero.tsx, Work.tsx, ...), server components
    ui/                small shared pieces (Button.tsx, Icon.tsx, Section.tsx)
    client/            the few 'use client' leaves (MobileMenu.tsx, ...)
  content/             all copy and facts as typed data (profile.ts, experience.ts, projects.ts)
  lib/                 pure helpers, no JSX (cn.ts, format.ts)
  styles/              site.css (page rules only), never component-level duplicates of kit tokens
public/
  assets/              the design kit, copied as plain files, never edited
  images/              project screenshots, share.jpg
docs/                  this file, the build plan
```

- **Content is data, not JSX.** Every sentence, date and link lives in `src/content/*.ts`; sections
  only render it. Facts come from the resume (the source of truth), never from memory.
- One component per file, file name = component name (`PascalCase.tsx`), helpers `camelCase.ts`,
  folders `kebab-case`.
- No barrel files (`index.ts` re-exports): import from the file. (Bundle-size rule `bundle-barrel-imports`.)
- Path alias `@/*` → `src/*`. No `../../..` chains.

## 3. Server and client components

1. **Everything is a Server Component by default.** Add `'use client'` only for state, effects,
   event handlers or browser APIs, and only on the smallest leaf that needs it.
2. Never put `'use client'` on a page, layout or section. Wrap the interactive bit, pass server
   content in as `children`.
3. Props crossing the server → client boundary are plain serializable data, and only what the client
   uses (`server-serialization`). No functions, class instances or whole content objects.
4. Do not import a server-only module into a client file.
5. The design kit's scripts rewrite server-rendered DOM, so they are added after hydration by
   `components/client/KitScripts.tsx`. Never put them in the server markup (hydration error #418).

## 4. Next.js 16 specifics

- **Async request APIs.** `params`, `searchParams`, `cookies()`, `headers()` are Promises: `await`
  them (`const { slug } = await params`). Type them as `Promise<...>`.
- **Turbopack** is the default bundler for `dev` and `build`; do not add webpack-only config.
- `next lint` is removed in 16 **(verify)**: run `eslint .` directly (flat config `eslint.config.mjs`).
- `middleware` was renamed `proxy` **(verify)**; with a static export neither runs: do not add one.
- Static export limits: no route handlers that read the request, no `rewrites`/`redirects` at runtime,
  no `next/image` optimizer (set `images: { unoptimized: true }`), no ISR, no cookies/headers.
  Dynamic routes need `generateStaticParams`.
- Fonts: `next/font/google` with `display: 'swap'`, assigned to a CSS variable the kit's tokens read.
  Subset `latin`. At most two families, four files.
- Metadata: the `metadata` export or `generateMetadata` in `layout.tsx`/`page.tsx`, with `title`,
  `description`, `openGraph`, `twitter`, `icons`, `metadataBase`. No hand-written `<head>`.
- Images: `next/image` with explicit `width`/`height` (or `fill` + `sizes`), real `alt`
  (`alt=""` when decorative), `priority` only on the hero's image. Static imports where possible.
- Links: `next/link` for internal routes. In-page anchors (`#work`) are plain `<a href="#work">`.
  External links: `rel="noopener noreferrer"` and `target="_blank"` only when it opens another site.
- Errors: `error.tsx` (client) and `not-found.tsx` exist and are on-brand.

## 5. Performance (ordered by impact)

1. **No waterfalls.** Independent async work runs in `Promise.all`; `await` sits in the branch that
   needs it; slow parts stream behind `<Suspense>`.
2. **Small bundles.** Direct imports (never barrels), `next/dynamic` for heavy client-only parts
   below the fold, no moment.js/lodash-style whole-library imports, load third parties after hydration.
3. Server work: `React.cache()` to dedupe within a request, parallel fetching.
4. Re-renders: compute derived state during render (no effect + state pair), functional `setState`,
   never define a component inside a component, hoist static JSX out of components.
5. Rendering: `content-visibility: auto` on long below-the-fold lists; ternaries over `&&` when the
   left side can be `0` or `''`.
6. Budgets: first-load JS under 100 kB gzip for the home route, LCP image preloaded, no layout shift
   (reserve space for every image and font).

## 6. TypeScript

- `strict`, `noUncheckedIndexedAccess`, no `any` (use `unknown` and narrow), no `as` casts except at
  a data boundary with a comment, no non-null `!`.
- Props: an `interface XProps` above the component; `readonly` arrays for data; no `React.FC`.
- Prefer union literals over enums. Export types from the file that owns them.
- Content shapes are declared once in `src/content/types.ts` and every content file is typed by them.

## 7. Styling and markup

- **Use the kit's tokens and classes** (`.wrap`, `.grid`, `.btn`, `.card`, `--s-*`, `--t-*`, `--g-*`).
  No new hex colours, spacing values, font sizes, radii or shadows in page CSS: add a token or reuse one.
- Page CSS goes in `src/styles/site.css` and only where the kit says page CSS is allowed (inside a
  visual, `--p-h`, `.wall`, `.rail`, `.device`). No inline `style` except CSS custom properties
  (`style={{ '--h': 2 }}`).
- Semantic HTML: one `<h1>`; headings step down one level; `<main>`, `<header>`, `<nav>`, `<footer>`;
  buttons are `<button>`, navigation is `<a>`. Every `main > section` has one `.wrap` and its `h2` first.
- Class names: kit classes as given, page classes `kebab-case` with a section prefix (`.work__item`).
- A section id may be used in page CSS to override a kit rule. Next emits `site.css` before the kit's
  stylesheets, so an override needs higher specificity (`html .x`).
- No `!important`, no deep nesting (two levels at most).

## 8. Animation

The page moves in four ways only (design skill rules 5 and 8). Anything else needs a written reason.

1. **Hero entrance:** `data-enter` on the hero, once on load, never hides words.
2. **Hover layer:** buttons step and press, linked cards lift 2px, photos zoom 1.02 to 1.03 inside
   their frame, underlines draw. Owned by the kit's motion layer: never override a `.btn`'s
   `transform` or `transition` in page CSS. No tilt, no carousels, no timed tabs.
3. **One or two dealt moments**, each in its own section (`data-moment`), the only thing allowed to
   react to scroll.
4. **Card loops** (2.5 to 4 s) on UI fragments, anything past 5 s gets a pause button.

Looping motion this project adds (the company marquee, the tool logos) must stop under reduced
motion and under `html[data-paused]` (the Pause animations button). The drawn illustrations
(`components/ui/Illustration.tsx`) do not loop: they play once, under 5 s including delays, when
`PlayOnView` sees them, and rest on the finished picture.

Rules that apply to any motion you write:

- Animate `transform` and `opacity` only; never `width`, `height`, `top`, `left`, `box-shadow` layout.
- Nothing fades in on scroll; no parallax on text; no scroll-jacking or smooth-scroll libraries.
- `prefers-reduced-motion: reduce` rests everything and **never leaves content hidden**.
- Durations 150 to 300 ms for feedback, up to 700 ms for the hero entrance; ease-out for entering.
- Focus rings never animate.

## 9. Accessibility

- Every control has a name (`aria-label` on icon-only buttons); the menu button carries `aria-expanded`.
- A skip link is the first focusable element; focus ring is visible and never under the fixed header.
- Text contrast 4.5:1 (7:1 for body copy per the design skill); tap targets 44px.
- `lang="en"` on `<html>`. Decorative images `alt=""`; drawn mocks `role="img"` + `aria-label`.
- No `tabindex` above 0. Forms: visible `<label for>`, errors under the field with `aria-describedby`.

## 10. Copy and content

- Plain language, category first, no slogans (design skill `copy.md`). Run `copy-lint` before every PR.
- Facts only from the resume and the user. Nothing invented: no clients, metrics, awards, quotes.
- Contact details are the user's own and only the ones the user chose to publish (see
  `src/content/profile.ts`); no phone number on the page.

## 11. Quality gates (every change)

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
npm run build       # next build -> out/
npm run check       # the design skill's gate against out/
```

A change is done when all four are green. A failing gate is fixed, never waived to pass, unless the
waiver (with its reason) is recorded in `.taste-skill/waivers.json`.

## 12. Git and review

- Small commits, imperative subject ("Add work section"), one concern each.
- Never commit `.next/`, `out/`, `node_modules/`, `.env*`, `.taste-skill/chrome-*`.
  `.env.example` is committed: list every environment variable there, with no real values.
- PR description: what changed, how it was verified (the four commands), screenshots for visual changes.
- No dead code, commented-out code or `console.log` left in.
