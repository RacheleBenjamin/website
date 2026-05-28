# Case Study Design System & Build Workflow
### Rachele Benjamin — Repeatable Framework

Every time you build a new case study, this document tells you exactly what to use, how to name things, and how to go from a PDF deck to a published HTML presentation.

---

## 0. Before You Start — Prompt Yourself

When starting a new case study, answer these two questions first and substitute your answers everywhere you see `--primary` and `--secondary` below:

```
1. What is the company's PRIMARY brand color?
   (used for: text accents, borders, active states, chip backgrounds, eyebrows)

2. What is the company's SECONDARY / DEEP brand color?
   (used for: filled dark cards, pitch cards, big-insight backgrounds, TOC borders)
```

Example — TD Bank:
- `--primary` → `#54B848` (TD Bright Green)
- `--secondary` → `#003F2D` (TD Deep Green)

---

## 1. File Setup

### Location
All case study HTML files live in `/public/`:
```
public/
  case-study-[slug].html      ← self-contained single file
  slides/
    [slug]/
      page_01.png             ← exported PDF page images (see Section 8)
```

### Single-file rule
Each case study is **one self-contained HTML file** — all CSS is in a `<style>` block, all JS at the bottom before `</body>`. No external dependencies except Google Fonts and the slide images.

---

## 2. Color Tokens

Paste this `:root` block at the top of every new case study. Replace `--primary` and `--secondary` with your brand colors.

```css
:root {
  /* ── Page base ── */
  --cream:    #EDF2FA;      /* page background */
  --ink:      #1A1A1A;      /* body text */
  --ink-70:   rgba(26,26,26,.70);
  --ink-60:   rgba(26,26,26,.60);
  --ink-50:   rgba(26,26,26,.50);
  --ink-40:   rgba(26,26,26,.40);
  --ink-30:   rgba(26,26,26,.30);
  --ink-20:   rgba(26,26,26,.20);
  --ink-15:   rgba(26,26,26,.15);
  --ink-10:   rgba(26,26,26,.10);
  --ink-05:   rgba(26,26,26,.05);

  /* ── Brand colors — REPLACE THESE ── */
  --primary:        #54B848;          /* company primary: text accents, borders */
  --primary-bg:     #dcf0d6;          /* light tint of primary for card fills */
  --secondary:      #003F2D;          /* company deep: filled bg, pitch cards */

  /* ── Font ── */
  --font-sans: 'Inter', 'Helvetica Neue', Roboto, Arial, sans-serif;
}
```

**Usage rule:** Anywhere the Open Banking file uses `var(--work)`, use `var(--primary)`. Anywhere it uses `var(--bright)`, use `var(--secondary)`.

---

## 3. Typography

### Font
**Inter** (Google Fonts) — weights 300, 400, 500, 600, 700.

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

Force it everywhere:
```css
*, *::before, *::after { font-family: var(--font-sans) !important; }
```

### Type Scale

| Class / Element | Size | Weight | Use |
|---|---|---|---|
| `.cover h1` | `clamp(56px, 8.4vw, 104px)` | 700 | Cover title |
| `h2.section-title` | `clamp(36px, 4.5vw, 56px)` | 700 | Section openers, divider titles |
| `.study-hero .study-name` | `clamp(48px, 7vw, 88px)` | 700 | Phase chapter headings |
| `h2.finding-headline` | `clamp(28px, 3.6vw, 44px)` | 700 | Individual finding titles |
| `h3.sub-title` | `clamp(22px, 2.4vw, 30px)` | 700 | Sub-section headings within slides |
| `.ei-body` | `clamp(19px, 1.9vw, 24px)` | 500 | Emergent insight body |
| `.cover-pitch-text` | `clamp(20px, 2.1vw, 26px)` | 500 | Pitch card primary text |
| `.cover-pitch-text--sub` | `clamp(16px, 1.6vw, 19px)` | 400 | Pitch card secondary / definition text |
| `.big-insight .big-text` | `clamp(28px, 3.4vw, 44px)` | 700 | Big insight statement |
| `p.body` | `16px` | 400 | Standard body copy |
| `p.lead` | `19px` | 300 | Introductory lead paragraph |
| Eyebrows / labels | `10–12px`, `.22–.28em` tracking, uppercase | 600–700 | All tags and category labels |

### Inline emphasis rules
- **Color accent on a word inside a heading:** wrap in `<span class="italic">` (uses `var(--primary)`) or `<em>` inside `finding-headline`
- **Bold on white bg:** `<strong>` inherits ink color
- **Bold inside dark cards:** add `color: #fff` to `strong`

---

## 4. Layout Containers

### Page background
`background: var(--cream)` on `body`.

### Slide wrapper
Every content section is a `.slide`:
```html
<section class="slide" id="[unique-id]">
  <div class="slide-num">01</div>        <!-- top-right corner label -->
  <div class="slide-inner">             <!-- max-width: 1100px; margin: auto -->
    <div class="slide-tag">Phase N · Topic · Subtopic</div>
    <!-- content -->
  </div>
</section>
```
Default padding: `96px 32px`. Override with inline `style="padding-top: 60px;"` when a previous section already provides breathing room.

### Study hero (phase chapter opener)
```html
<section class="study-hero" id="phase-N-hero">
  <div class="slide-inner">
    <div class="study-eyebrow">Phase N</div>
    <h2 class="study-name">Your phase title with an <span class="accent">accent word</span></h2>
    <div class="hero-text-block" style="margin: 36px 0 0; max-width: 100%;">
      <div class="context-band">
        <div class="label">Context</div>
        <div class="text">One sentence setting the scene.</div>
      </div>
      <div class="rq-subhead">
        <div class="rq-label">Phase N · Research question</div>
        <p class="rq-text">The research question in full.</p>
      </div>
    </div>
  </div>
</section>
```
Height: `min-height: 72vh`. Centers content. Context + RQ render at `clamp(22px, 2.4vw, 30px)` with a green rule to the left of the label.

---

## 5. Components

### 5a. Cover Slide

```html
<section class="slide cover" id="slide-1">
  <div>
    <h1>Your Study Title with an <span class="accent">Accent</span></h1>
    <p class="subtitle">Company · Year · Research Type</p>
    <p class="author">A case study by <strong>Your Name</strong></p>

    <!-- The Pitch Card -->
    <aside class="cover-pitch" aria-label="The research brief">
      <div class="cover-pitch-eyebrow">The ask</div>
      <p class="cover-pitch-text">
        The <em>mission</em> of this project in one or two sentences.
      </p>
      <p class="cover-pitch-text cover-pitch-text--sub">
        A supporting sentence about the outcome or approach.
      </p>
      <!-- Optional: Definition / glossary note below a divider -->
      <p class="cover-pitch-text cover-pitch-text--sub"
         style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,.18);
                color: rgba(255,255,255,.55); font-size: clamp(14px, 1.35vw, 16px);">
        <strong>Key term</strong> is a brief definition of the central concept, one sentence.
      </p>
    </aside>

    <!-- Table of Contents -->
    <div class="toc">
      <h4>Inside this case study</h4>
      <ol>
        <li><a href="#phase-1-hero">Phase 1 — ...</a></li>
        <!-- one entry per section -->
      </ol>
    </div>
  </div>
</section>
```

**Pitch card anatomy:**
- Dark `var(--secondary)` fill, `var(--primary)` left border (6px)
- `.cover-pitch-eyebrow` — uppercase micro label in `var(--primary)`
- `.cover-pitch-text` — primary statement, white, 500 weight
- `.cover-pitch-text--sub` — supporting copy, `rgba(255,255,255,.88)`
- Definition footnote — further dimmed to `rgba(255,255,255,.55)`, smaller font, top border separator

---

### 5b. Big Insight Card (`.big-insight`)
Use for: the single headline finding, an opportunity statement, a chapter's anchor claim.

```html
<div class="big-insight">
  <div class="big-eyebrow">Insight | Opportunity | Watch-out</div>
  <p class="big-text">The headline statement. Use <em>italic</em> for emphasis.</p>
  <p class="big-sub">One or two sentences of supporting context.</p>
</div>
```

**With a verbatim quote instead of big-sub:**
```html
<blockquote class="big-sub"
  style="border-left: 3px solid rgba(255,255,255,.3); margin: 16px 0 0; padding-left: 20px; font-style: italic;">
  "Participant quote verbatim."
  <br>
  <cite style="font-style: normal; font-size: .85em; opacity: .7; margin-top: 8px; display: block;">
    — P#, age, location, segment
  </cite>
</blockquote>
<p class="big-sub" style="margin-top: 16px;">Strategic takeaway sentence.</p>
```

Style: `var(--secondary)` fill, white text, `clamp(28px, 3.4vw, 44px)` headline.

---

### 5c. Emergent Insight (`.emergent-insight`) — scroll-reveal
Use for: Watch-outs, Cross-geography insights, unexpected patterns — anything that "surfaces" as you explain the data.

```html
<aside class="emergent-insight" aria-label="Descriptive label">
  <div class="ei-label">Watch-out | Cross-geography insight | Pattern</div>
  <p class="ei-body">
    The insight in 1–2 sentences. Use <strong>bold</strong> for the key term.
    People's stated discomfort isn't a permanent barrier.
  </p>
</aside>
```

Animates in on scroll via `IntersectionObserver` (see Section 7 — JS). Starts invisible (`opacity: 0; transform: translateY(14px)`), transitions to visible when 20% of the element enters the viewport.

Style: `var(--primary-bg)` fill, `var(--secondary)` left border (4px).

---

### 5d. Finding Cards (`.findings`) — collapsible grid

A 3-column grid of white cards. Each card collapses/expands on click. Segment chips are hidden until the card is open.

```html
<div class="findings findings--collapsible">
  <div class="finding" role="button" tabindex="0" aria-expanded="false">
    <span class="icon">⚠️</span>
    <div class="head">Finding Name</div>
    <div class="detail">
      <p><strong>Bold lead.</strong> Supporting sentence.</p>
    </div>
    <!-- Optional segment chips (shown only when card is open) -->
    <div class="seg-chips">
      <span class="seg-chips-label">Key segments</span>
      <button type="button" class="seg-chip" tabindex="0">
        <span class="seg-chip-emoji">🌏</span> Segment Name
        <span class="seg-chip-tip">Why this segment is affected.</span>
      </button>
    </div>
  </div>
  <!-- repeat for each finding -->
</div>
```

**Card head rules:**
- ALL CAPS, `var(--primary)` color, letter-spacing `.12em`
- Appends `+` (closed) or `−` (open) via CSS `::after`
- `.detail` fades in on open (`max-height: 0 → 600px`)
- `.seg-chips` hides/shows on `.is-open` (no CSS transition — pure display)

---

### 5e. Segment Cards (`.segment-grid`) — collapsible

Used for research segments / personas. Click to expand definition + open banking concepts.

```html
<div class="segment-grid">
  <div class="segment-card" tabindex="0" role="button" aria-expanded="false">
    <div class="seg-label">
      <span>🌏 Segment Name</span>
      <span class="seg-toggle" aria-hidden="true">+</span>
    </div>
    <div class="seg-reveal">
      <div class="seg-name">Description of this segment in 1–2 sentences.</div>
      <ul class="seg-concepts">
        <li>Open Banking concept 1</li>
        <li>Open Banking concept 2</li>
      </ul>
    </div>
  </div>
</div>
```

Toggle rotates `+` to `×` via CSS. Reveal area: `max-height: 0 → 600px`.

---

### 5f. Segment Chips with Hover Tooltips (`.seg-chip`)

Use in tables or expanded cards to show which audience segment a concept serves.

```html
<button type="button" class="seg-chip" tabindex="0">
  <span class="seg-chip-emoji">💎</span> Segment Name
  <span class="seg-chip-tip" style="width: 240px;">
    One sentence explaining why this segment cares.
  </span>
</button>
```

Style: `var(--primary-bg)` pill, `var(--primary)` text. Tooltip: `var(--secondary)` dark bubble, appears above chip on `:hover` / `:focus-visible`. Customize `width` inline if text is long or short.

---

### 5g. Data Tables (`.data`)

Three-column structure: LOB / task | Unmet needs | Open Banking concept.

```html
<div class="data-table-wrap">
  <table class="data">
    <thead>
      <tr>
        <th>Task</th>
        <th>Unmet needs</th>
        <th>Open Banking concept</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="lob">Task Name</td>
        <td>Description of the pain or need.</td>
        <td>
          The concept description.<br>
          <button type="button" class="seg-chip" tabindex="0" style="margin-top:10px;">
            LOB Name
            <span class="seg-chip-tip" style="width:260px;">Why this LOB owns it.</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

**Column styling:**
- `.lob` — `var(--primary)` bold text, slight warm tint background, `white-space: nowrap`
- `.segments` — `font-weight: 500`, `var(--ink)`. If using `<ul><li>` inside `.segments`, add the override rule: `table.data tbody td.segments li { color: var(--ink); }` (prevents `li` color from inheriting the lighter `--ink-70` rule)
- Header row — `--ink-05` fill, uppercase 11px labels

---

### 5h. Participant Cards (`.participant-grid`)

```html
<div class="participant-grid">
  <div class="participant-card">
    <span class="p-emoji">🌏</span>
    <div class="p-count">5</div>
    <div class="p-name">Segment Name</div>
    <div class="p-detail">Sub-detail or country of origin</div>
  </div>
</div>
```

White card, `var(--primary)` top border (3px). Count in `36px 700` weight.

---

### 5i. PDF Clip + Scene Caption

When dropping a raw slide into the page:

```html
<img class="pdf-clip"
     style="max-width: 880px; margin: 32px auto 0;"
     src="slides/[slug]/page_XX.png"
     alt="Slide XX: [alt text describing the chart or quote]" />
<p class="scene-caption">One sentence interpreting what the image shows.</p>
```

Style: white bg, `--ink-10` border, subtle shadow, `border-radius: 4px`.

---

### 5j. Image + Hover Callout (`.image-callout-group`)

When you want a slide image that reveals an annotation overlay on hover:

```html
<div class="image-callout-group" tabindex="0" style="max-width: 860px; margin: 24px auto 0;">
  <img src="slides/[slug]/page_XX.png" alt="Alt text" />
  <div class="image-callout image-callout--top is-right-anchor" role="note">
    <span class="image-callout-eyebrow">🧭 Label</span>
    <p class="image-callout-text"><strong>Bold lead.</strong> Supporting text.</p>
  </div>
</div>
```

Positions: `image-callout--top`, `image-callout--middle`, `image-callout--bottom`. Add `is-right-anchor` to hang the callout off the right edge of the image (useful on wide viewports). Hover dims the image to `.92` brightness and fades the callout in.

---

### 5k. Adoption Continuum

A horizontal spectrum showing how normalized a behavior is:

```html
<div class="continuum">
  <div class="continuum-stop">
    <div class="dot"></div>
    <div class="eyebrow">Established</div>
    <div class="title">Behavior name</div>
    <div class="body-text">Brief description.</div>
    <span class="count">N/N participants</span>
  </div>
  <div class="continuum-stop is-mid"><!-- mid state --></div>
  <div class="continuum-stop is-rare"><!-- rare state --></div>
</div>
<div class="continuum-axis">
  <span>← Established</span><span>Emerging →</span>
</div>
```

Gradient bar auto-renders via `::before` pseudo-element from `var(--primary)` to `--ink-15`.

---

### 5l. Verbatim Quote Block

```html
<div class="verbatim">
  <p>"The participant's exact words."</p>
  <cite>P#, age, location, segment</cite>
</div>
```

`var(--primary)` left border, `var(--cream)` fill.

---

### 5m. Conclusion Card

Always directly before the Thank You slide:

```html
<section class="slide" id="slide-continued" style="border-bottom: none;">
  <div class="slide-inner">
    <div class="conclusion">
      <h2 class="conclusion-title">Impact</h2>
      <p class="conclusion-body">What changed as a result of this research.</p>
      <a class="conclusion-cta" href="mailto:...">Email me for the full story &rarr;</a>
    </div>
  </div>
</section>
```

`var(--secondary)` fill. CTA is a white pill that inverts on hover.

---

### 5n. Thank You Slide (`.thanks`)

Fullscreen dark closer, always after the conclusion:

```html
<section class="slide thanks" id="slide-thanks" style="border-bottom: none;">
  <div class="slide-num" style="color: rgba(245,241,234,.3);">&#x2726;</div>
  <div class="slide-inner">
    <h1>Thank you, &amp; ask me about my <span class="accent"> vibe-coded </span> case study!</h1>
  </div>
</section>
```

**Required CSS** (add to every case study's `<style>` block):
```css
.thanks {
  min-height: 70vh;
  display: flex; align-items: center; justify-content: center;
  text-align: center;
  background: var(--ink); color: var(--cream);
}
.thanks h1 {
  font-family: 'Fraunces', serif; font-weight: 400;
  font-size: clamp(48px, 8vw, 120px); margin: 0;
}
.thanks h1 .accent { font-style: italic; font-weight: 300; color: rgba(245,241,234,.7); }
```

---

### 5o. About Me Appendix Slide

Appendix slide, always the final section:

```html
<!-- Appendix: About me -->
<section class="slide" id="slide-about-me">
  <div class="slide-num">A</div>
  <div class="slide-inner">
    <div class="slide-tag">About me</div>
    <h2 class="section-title">Mixed methods researcher who thrives on <span class="italic">variety</span></h2>
    <div class="two-col" style="margin-top: 40px;">
      <div class="card">
        <div class="uppercase-mini">Microsoft (MAI)</div>
        <h3 class="sub-title" style="margin-top: 12px;">UX Researcher</h3>
        <p class="body">Led 35 studies across Edge (Consumer, Enterprise), Shopping, Copilot, GroupMe, Character, Read aloud, Bing, and more.</p>
      </div>
      <div class="card">
        <div class="uppercase-mini">PhD in Social Psychology</div>
        <h3 class="sub-title" style="margin-top: 12px;">Academic research</h3>
        <p class="body">Defining <span class="amp">&amp;</span> explaining 'uncanny' feelings.</p>
        <p class="body">Attitudes towards democracy.</p>
      </div>
    </div>
  </div>
</section>
```

**Required CSS** (add if not present):
```css
.uppercase-mini { text-transform: uppercase; letter-spacing: .18em; font-size: 11px; font-weight: 500; color: var(--ink-50); }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
@media (max-width: 800px) { .two-col { grid-template-columns: 1fr; gap: 40px; } }
.card { background: #fff; border: 1px solid var(--ink-10); padding: 32px; border-radius: 2px; }
.amp { font-family: 'Baskerville','Hoefler Text','Garamond','Georgia', serif !important; font-style: italic; font-weight: 400; padding: 0 .05em; }
```

---

## 6. Eyebrows & Labels — Taxonomy

Every section should be tagged with a `slide-tag` to show where you are in the story. The convention is:

```
Phase N · Category · Sub-topic
```

| Category | When to use |
|---|---|
| `Method` | Research setup, participant recruitment, tools |
| `Finding` | A specific research insight |
| `Synthesis` | Cross-cutting pattern or framework |
| `Opportunity` | A design or business implication |
| `Line of Business Insights` | LOB-specific concept mapping |

Above a `finding-headline`, always pair with a `finding-eyebrow`:
```html
<span class="finding-eyebrow">Finding | Opportunity | Synthesis</span>
<h2 class="finding-headline">The headline in <em>plain language</em></h2>
```

---

## 7. JavaScript — Interactions

Paste this JS block at the bottom of every case study, just before `</body>`. It handles four behaviors:

### 7a. Segment card expand/collapse
```js
var cards = document.querySelectorAll('.segment-card');
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    var open = card.classList.toggle('is-open');
    card.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
  });
});
```

### 7b. Finding card expand/collapse
```js
document.querySelectorAll('.findings--collapsible .finding').forEach(function(el) {
  el.addEventListener('click', function() {
    var open = el.classList.toggle('is-open');
    el.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  el.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
  });
});
```

### 7c. Scroll-reveal for `.emergent-insight`
```js
if ('IntersectionObserver' in window) {
  var ioInsight = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        ioInsight.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.emergent-insight').forEach(function(el) {
    ioInsight.observe(el);
  });
} else {
  document.querySelectorAll('.emergent-insight').forEach(function(el) {
    el.classList.add('revealed');
  });
}
```

### 7d. Scroll-to-top button
```js
var scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', function() {
  scrollBtn.classList.toggle('is-visible', window.scrollY > 400);
});
scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

Add this button just before the `<script>` block:
```html
<button id="scroll-top" type="button" aria-label="Scroll to top">↑</button>
```

---

## 8. Workflow — From PDF to Published HTML

### Step 1: Export PDF pages as images

Open the PowerPoint deck, export as PDF. Then run:

```bash
# Convert PDF pages to PNG (requires ImageMagick or pdf2image)
python _extract_pdf.py
```

Or use the Node script:
```bash
node _extract_pdf.cjs
```

Output: `_pdf_pages.json` (text per page) + `public/slides/[slug]/page_XX.png` (images).

### Step 2: Extract text for a specific page

When you need to know what text is on slide 47:
```bash
python _dump_pages.py 47
```

To look at several pages at once:
```bash
python _dump_pages.py 44 47 52 61
```

### Step 3: Read the full transcript

Your `User Interviews Open Banking complete.txt` contains every quote verbatim. Use it to:
- Pull exact participant quotes with `grep_search`
- Verify participant IDs and segments for attribution
- Find under-used insights that didn't make the deck

### Step 4: Plan the HTML structure

Sketch the section order before writing any code. A good flow is:

```
Cover (pitch card + TOC)
  Phase 1 Hero
    Method — [how you gathered internal input]
    Findings — [what the bank already knew / believed]
    Synthesis — [segments, strategic frame]
  Phase 2 Hero
    Method — [participants, recruitment]
    Findings — [customer insights, in order of narrative weight]
      Big Insight (headline claim)
      Finding sections (collapsible cards)
      Emergent Insights (scroll-reveal asides)
    Opportunity — [what TD/the company can do with this]
    LOB Concept Table
  Conclusion / Impact
```

### Step 5: Build section by section

For each section:
1. Copy the closest matching template from this doc
2. Replace placeholder text with your real content
3. Match `slide-tag` to the taxonomy table in Section 6
4. Drop slide images with `.pdf-clip` + `.scene-caption` as supporting evidence
5. Add `.emergent-insight` for unexpected or cross-cutting patterns
6. Add segment chips to any finding or table row that has segment-specific implications

### Step 6: Update the TOC

After all sections are built, update the `<ol>` inside `.toc` to list every `section[id]` in order. Format:

```html
<li><a href="#[id]">Phase N — [heading text]</a></li>
```

### Step 7: Dev and deploy

```bash
npm run dev        # preview at localhost:5174
npm run build      # production build
# push to main → auto-deploys to GitHub Pages
```

---

## 9. Section ID Naming Convention

```
slide-1                    ← cover
phase-[n]-hero             ← phase chapter opener
slide-[topic-slug]         ← content slide
phase-[n]-findings         ← findings divider/opener
slide-continued            ← conclusion
slide-thanks               ← thank you (closing)
slide-about-me             ← about me appendix (always last)
```

---

## 10. Quick Checklist for Every New Case Study

- [ ] Set `--primary` and `--secondary` to the company's brand colors
- [ ] Update `--primary-bg` to a light tint of `--primary` (~15% opacity)
- [ ] Update `<title>` and `.topbar .meta` text
- [ ] Swap all `var(--work)` → `var(--primary)` and `var(--bright)` → `var(--secondary)`
- [ ] Cover: pitch card written, subtitle accurate, TOC placeholder filled
- [ ] Every phase has a `study-hero` with a research question
- [ ] All section `id` attributes are unique and in the TOC
- [ ] All PDF clip `<img>` tags have descriptive `alt` text
- [ ] All `.emergent-insight` elements have an `aria-label`
- [ ] All `.finding` cards have `role="button"` and `aria-expanded="false"`
- [ ] JS block is present and complete at end of `<body>`
- [ ] `#scroll-top` button is present before the `<script>` tag
- [ ] Conclusion card has a working `mailto:` CTA
- [ ] Thank you slide (`#slide-thanks`) is present after conclusion
- [ ] About me slide (`#slide-about-me`) is present as final appendix
- [ ] `.thanks`, `.two-col`, `.card`, `.uppercase-mini` CSS is in the `<style>` block
