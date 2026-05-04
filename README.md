<img src="https://raw.githubusercontent.com/monapdx/AbortOurCourt/refs/heads/main/images/branding/header-1920.webp" alt="Abort the Supreme Court banner">

# Abort the Supreme Court

A growing, open resource hub for **reproductive justice**, **abortion access**, and autonomy—built as a **static HTML site** with a curated toolkit library and a **blog** of essays on abortion, narrative, and choice.

[➕ Submit a Resource](https://github.com/monapdx/AbortOurCourt/issues/new?template=add-resource.yml)

> **Active development**  
> Content and layout continue to evolve. Pull requests and issue reports are welcome.

---

## Overview

**[Abort the Supreme Court](https://abortsupremecourt.com)** curates and surfaces **reputable, actionable material** related to reproductive justice: long-form writing, organizing toolkits, and pointers toward support and advocacy.

**Goals:**

- Make trustworthy resources **easier to find and use**
- Publish **first-person and analytical essays** that complicate narrow abortion narratives
- Host a **toolkit library** (embedded PDF previews) from established organizations, with clear credit to authors

This is not about reinventing the wheel. It is about **making the wheel easier to find, understand, and use**.

---

## Site structure (current)

| Page | Path | Role |
|------|------|------|
| Home / speaking | [`index.html`](index.html) | Primary landing page: speaking, storytelling, collaboration, contact |
| Blog index | [`posts.html`](posts.html) | Card grid of published essays with links into `/posts` |
| Toolkits | [`toolkits.html`](toolkits.html) | Reproductive justice & abortion rights toolkit library (PDF embeds + “Open” links) |
| Privacy | [`privacy-policy.html`](privacy-policy.html) | Privacy policy |

**Additional HTML** (templates, internal pages, verification): `blank.html`, `comparison-table.html`, `pages/about.html`, `pages/resources.html`, `pages/toolkits.html`, `pages/full-width.html`, `pages/main-template.html`, `pages/check-your-state.html`, `pages/dependencies.html`, and `google4340c28baa72b51f.html` (search console).

**Shared design:** Main public pages use a consistent **neo-brutalist** look (high-contrast borders, offset shadows, yellow/pink/blue accents, sticky nav, full-width hero banner from `images/branding/` or hosted WebP on GitHub raw). Individual posts in `/posts` reuse the same shell (nav, hero, intro card, article card, footer).

---

## Blog (`/posts`)

Essays are plain HTML files with metadata (Open Graph, JSON-LD `BlogPosting`). Each post includes **Previous** and **Next** links at the bottom that walk the series in order (with wrap from last → first).

**Series order:**

1. [`posts/seven-abortions-zero-tragedies.html`](posts/seven-abortions-zero-tragedies.html) — *I Had Seven Abortions—and None of Them Were a Tragedy*
2. [`posts/stories-we-allow-vs-silence.html`](posts/stories-we-allow-vs-silence.html) — *The Stories We Allow vs. The Stories We Silence About Abortion*
3. [`posts/abortion-as-preventative-care.html`](posts/abortion-as-preventative-care.html) — *Abortion as Preventative Care, Not Emergency Care*
4. [`posts/what-it-means-to-be-truly-unwanted.html`](posts/what-it-means-to-be-truly-unwanted.html) — *What It Means to Be Truly Unwanted—and Why That Matters*
5. [`posts/the-economics-of-choice.html`](posts/the-economics-of-choice.html) — *The Economics of Choice: What It Really Costs to Have a Child You Don’t Want*
6. [`posts/abortion-made-my-life-possible.html`](posts/abortion-made-my-life-possible.html) — *Abortion Didn’t Ruin My Life. It Made the Life I Have Possible.*

Navigation labels **Blog** in the header point at `posts.html` where these are listed.

---

## Toolkits

[`toolkits.html`](toolkits.html) is a **directory page**: each item is a card with an embedded Drive preview (lazy-loaded) and an **Open** link to the source PDF. The page states that the site does **not** own these documents and encourages supporting the authoring organizations.

---

## Guiding principles

- **Accuracy over volume** — Fewer, better resources  
- **Accessibility** — Readable layout, clear hierarchy  
- **Respect for autonomy** — No moral framing, no persuasion  
- **Practical usefulness** — Real help, not noise  
- **Transparency** — Clear sourcing and credit  

---

## Long-term vision

Possible directions:

- A **searchable** resource directory with stronger taxonomy  
- Region-specific filtering (state / country)  
- More essays and static pages as content grows  
- Contributor-driven expansion of toolkit and resource listings  

Core intent stays the same: **a trustworthy entry point** into reproductive justice material.

---

## Contributing

**Especially welcome from people who:**

- Navigate these systems in practice  
- Know reputable organizations or tools  
- Care about access and clarity  

**Ways to contribute:**

- [Add new resources](https://github.com/monapdx/AbortOurCourt/issues/new?template=add-resource.yml)  
- Improve categorization or copy on existing pages  
- Flag outdated or incorrect links (especially toolkit PDFs)  
- Suggest new essays or resource sections  

(Detailed contribution guidelines can be added over time.)

---

## Important notes

- This project does **not** provide medical or legal advice.  
- Always verify time-sensitive information with official sources.  
- Toolkit PDFs are hosted by third parties; availability and URLs can change.  

---

## License

[MIT](LICENSE)

---

## Final note

Access to information should not be a barrier to autonomy. If this site helps someone find what they need with less confusion or isolation, it is doing its job.
