# RISHEH — DESIGN SYSTEM v2
## Mobile-First Digital Experience System

**Status:** Master Design System  
**Version:** 2.0  
**Implementation Addendum:** 1.0
**Project:** Risheh Official Website — V1 Rebuild  
**Language:** Persian-first / RTL  
**Core constraint:** Mobile First


---

## 01 — Product Principle

The Risheh website is the flagship digital product of a digital company.

It is not:
- a landing page
- a WordPress-style corporate site
- a generic agency template
- a portfolio template
- a SaaS landing page
- an Awwwards/Framer/Webflow clone
- an AI-generated visual experiment

The website itself must demonstrate:

1. Visual design
2. UI design
3. UX design
4. Interaction design
5. Frontend engineering
6. Responsive engineering
7. Accessibility
8. Performance
9. Technology judgment

> Build a website that proves Risheh's capability rather than claiming it.

---

## 02 — NON-NEGOTIABLE: MOBILE FIRST

**390px is the primary design baseline.**

Every phase starts from mobile:

```text
390px
↓
480px
↓
768px
↓
1024px
↓
1280px
↓
1440px
↓
1920px
```

Never design desktop first and collapse it into mobile.

This rule applies to:
- visual exploration
- wireframes
- UX
- components
- interactions
- architecture
- implementation
- QA

Every major component must define:
- mobile default
- tablet enhancement
- desktop enhancement
- touch behavior
- keyboard behavior
- reduced-motion behavior
- loading/error/empty behavior

---

## 03 — Design North Star

# Experimental Digital Studio

Combine:

**Editorial**
- typography
- hierarchy
- whitespace
- asymmetry
- rhythm

**Digital**
- interaction
- state changes
- transitions
- responsive behavior

**Studio**
- real work
- people
- process
- thinking

**Iranian**
- Persian-first communication
- native RTL spatial logic
- contemporary local sensitivity

Iranian identity must come from the design language, not decorative cultural clichés.

---

## 04 — Core Design Principles

### Experience before sections
The page may contain Hero, Services, Work, About, Team and Contact, but the user should experience one coherent narrative.

### Content determines composition
Do not force every piece of content into a card or repeated grid.

### Complexity must have purpose
Complexity is justified only when it improves storytelling, discovery, UX, brand recognition or meaningful interaction.

### Technology should be felt, not advertised
Users should feel fluidity and precision, not notice which library was used.

### Every animation needs a reason
Every motion must:
- Orient
- Explain
- Transition
- Respond
- Delight

If it does none of these, remove it.

---

## 05 — Visual Materials

The system has seven primary materials:

1. Typography
2. Space
3. Grid
4. Image
5. Shape
6. Color
7. Motion

The design system defines rules and relationships. It does not force every page into one template.

---

## 06 — Color

Base Risheh palette:

```css
:root {
  --color-ink: #111412;
  --color-paper: #F4F2EC;
  --color-brand: #245B46;
  --color-brand-dark: #173D30;
  --color-mint: #A8D7C0;
  --color-muted: #6B706C;
  --color-line: #D8D6CE;
  --color-white: #FFFFFF;
}
```

Semantic roles:

```css
--surface-primary: var(--color-paper);
--surface-inverse: var(--color-ink);
--surface-brand: var(--color-brand);

--text-primary: var(--color-ink);
--text-secondary: var(--color-muted);
--text-inverse: var(--color-paper);

--action-primary: var(--color-brand);
--action-primary-hover: var(--color-brand-dark);

--border-subtle: var(--color-line);
```

Rules:
- Green is an accent, not the default visual treatment.
- No decorative gradient blobs.
- No arbitrary neon/gradient effects.
- Paper → Ink → Brand transitions are allowed only when narratively meaningful.

---

## 07 — Typography

**Display:** Ravi  
**Body/UI:** Vazirmatn

Roles:

```text
Display
Hero
Statement
Section Heading
Project Heading
Body
Navigation
Label
Metadata
Utility
```

Fluid scale:

```css
--type-xs: 0.75rem;
--type-sm: 0.875rem;
--type-md: 1rem;
--type-lg: 1.25rem;
--type-xl: 1.5rem;
--type-2xl: clamp(2rem, 5vw, 3.5rem);
--type-3xl: clamp(2.75rem, 8vw, 6rem);
--type-display: clamp(3.5rem, 14vw, 11rem);
```

Typography is a brand and interaction surface.

Persian line breaks must be intentional.

---

## 08 — RTL

RTL is a design foundation, not an implementation checkbox.

Required:
- logical CSS properties
- RTL-aware motion origins
- RTL-aware icon direction
- correct Persian punctuation
- semantic DOM order
- logical keyboard order
- Persian-first content

Prefer:

```css
margin-inline
padding-inline
inset-inline
border-inline
```

Do not mirror an English layout and call it Persian.

---

## 09 — Grid & Layout

### Mobile
Default to fluid single-column composition. Do not force a visible grid.

### Tablet/Desktop
Progressively introduce:
- multi-column layouts
- asymmetry
- overlapping layers
- editorial rails
- full-bleed media
- oversized type

Desktop reference:

```css
--container-max: 1440px;
--container-padding: clamp(20px, 4vw, 72px);
--grid-gap: clamp(12px, 1.4vw, 24px);
```

A 12-column grid is allowed on larger viewports.

The grid is a relationship system, not a visible framework.

---

## 10 — Spacing

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
--space-11: 160px;
--space-12: 200px;
```

Major relationships should use `clamp()`.

Do not introduce arbitrary spacing values throughout components.

---

## 11 — Shape

Default:

```css
border-radius: 0;
box-shadow: none;
```

Rounded surfaces are allowed only when they communicate a product/device, media object, control or meaningful contained state.

Avoid card-everything design.

---

## 12 — Layout Primitives

```text
Container
Grid
Flow
Stack
Cluster
Media
Overlay
Rail
Stage
Viewport
```

Primitives solve layout. They do not dictate art direction.

---

## 13 — Component Philosophy

A component is:

```text
Visual rule
+
Behavior
+
State model
+
Accessibility model
+
Responsive behavior
```

Example: `ProjectPreview` is not just an image. It may contain hover/focus/touch behavior, metadata transitions, route transition and reduced-motion fallback.

---

## 14 — Component Taxonomy

### Foundation
```text
Container
Text
Heading
Media
Divider
VisuallyHidden
```

### Controls
```text
Button
TextLink
IconButton
MenuButton
```

### Navigation
```text
Navbar
MobileMenu
SectionNavigation
Breadcrumbs
```

### Experience
```text
HeroExperience
ServiceExplorer
ProjectStage
ProjectPreview
ProjectTransition
ProcessExplorer
PeopleField
ContactExperience
```

Experience components are where Risheh's custom frontend identity is expressed.

---

## 15 — Controls

Minimum touch target: **44 × 44px**

Required states:

```text
Default
Hover
Focus-visible
Pressed
Disabled
Loading
Reduced-motion
```

Hover can enhance an interaction but can never be its only access method.

---

## 16 — Hero

Hero is an interactive thesis, not a conventional marketing hero.

Reject:
```text
headline | stock image
```

Possible ingredients:
- oversized Persian typography
- real project artifact
- dynamic composition
- discipline relationship
- controlled image movement
- spatial typography

Requirements:
- one dominant message
- maximum two actions
- one memorable interaction
- no fake statistics
- no carousel
- no decorative 3D without meaning

The Hero must be designed mobile first.

---

## 17 — Services

Services are an interactive explanation of capability.

Do not use five generic cards.

Possible model:

```text
STRATEGY
BRAND
DESIGN
DEVELOPMENT
GROWTH
```

Selecting a discipline may change:
- description
- supporting visual
- typography
- active state
- contextual information

Mobile may use tap/progressive disclosure. Desktop may enhance with pointer interaction, but keyboard access is mandatory.

---

## 18 — Work / Portfolio

Portfolio is the strongest proof layer.

Projects are not thumbnails.

The experience should communicate:

```text
Problem
+
Thinking
+
Design
+
Implementation
+
Outcome
```

Do not default to:
- equal card grids
- generic tiles
- carousel

A carousel is allowed only when it solves a genuine discovery problem.

---

## 19 — Project Transition

A project may demonstrate engineering through a meaningful transition:

```text
Project preview
↓
Selection
↓
Visual expands
↓
Metadata travels
↓
Project detail
```

Shared-element transitions are allowed.

The route must remain usable without animation.

---

## 20 — About / Process

Communicate:
- worldview
- methodology
- capability
- human side

Avoid fake metrics and corporate statistics.

Possible process:

```text
Investigate
↓
Define
↓
Design
↓
Build
↓
Improve
```

---

## 21 — Team

Team should feel human, not corporate.

Prefer:
- portrait field
- role reveal
- editorial names
- collective → individual exploration
- responsive people rail

Mobile must not depend on hover.

---

## 22 — Contact

Contact is the closing narrative moment.

Possible progression:

```text
یک مسئله دارید؟
↓
بیایید بازش کنیم.
↓
شروع گفتگو
```

A progressive form may be used when appropriate.

---

## 23 — Navigation

Navigation must prioritize:
- orientation
- current location
- deep links
- mobile usability
- keyboard accessibility

Possible models:
- minimal persistent
- contextual
- hybrid

Do not hide essential navigation behind animation.

---

## 24 — Motion

Motion levels:

### Level 0
No motion.

### Level 1
Micro interaction: 100–300ms.

### Level 2
Component transition: 300–700ms.

### Level 3
Narrative transition: 600–1200ms, rare.

Native scrolling is the baseline.

Avoid:
- scroll-jacking
- infinite parallax
- long pinned sequences
- blocking animations

---

## 25 — Reduced Motion

When `prefers-reduced-motion: reduce` is active:
- remove decorative motion
- shorten transitions
- disable scroll-linked choreography
- preserve content order
- preserve meaning
- preserve usability

---

## 26 — Library Strategy

The project must demonstrate technology judgment.

Decision hierarchy:

```text
Native CSS
↓
Browser API
↓
Existing project capability
↓
React
↓
Specialized library
```

The first question is not "Which library?" but "Do we need a library?"

### GSAP
Use only for complex choreography/timelines.

Do not use it for simple hover, fade, translate or reveal that CSS can handle.

### Swiper
Not part of the default architecture. Use only when carousel behavior is genuinely valuable.

### Three.js / WebGL
Optional. Before using it, document:
1. Conceptual purpose
2. Why CSS/DOM is insufficient
3. Mobile fallback
4. Performance cost
5. Reduced-motion behavior
6. Low-end device behavior

If the answers are weak, do not use WebGL.

Every new dependency requires a decision record.

---

## 27 — Responsive System

Responsive design is progressive enhancement from mobile.

A component may change:
- composition
- density
- interaction model
- ordering
- animation model

between breakpoints.

Do not assume desktop can simply stack vertically.

---

## 28 — Imagery

Priority:

1. Real project work
2. Product screenshots
3. Real team photography
4. Brand artifacts
5. Art-directed photography
6. AI imagery only when conceptually justified

Technical requirements:
- AVIF/WebP where appropriate
- responsive `srcset`
- `sizes`
- lazy loading below the fold
- explicit dimensions/aspect ratio
- optimized hero media

---

## 29 — Content Model

Separate content from presentation.

Example:

```ts
type Project = {
  slug: string;
  title: string;
  category: string[];
  summary: string;
  heroImage: string;
  thumbnailImage?: string;
  year?: string;
  services?: string[];
  featured?: boolean;
};
```

Support:
- long Persian titles
- short titles
- missing optional metadata
- multiple categories
- different image ratios

Never invent company metrics, testimonials or outcomes.

---

## 30 — Performance

Targets:

- Lighthouse Performance ≥ 90
- LCP < 2.5s
- CLS < 0.1

Rules:
- optimize hero media
- lazy-load below-the-fold images
- use responsive images
- avoid unnecessary dependencies
- code-split expensive experiences
- prefer transform/opacity for animation
- test on real mobile hardware

Performance is part of the frontend showcase.

---

## 31 — Accessibility

Target: **WCAG 2.2 AA**

Required:
- semantic HTML
- logical heading hierarchy
- keyboard navigation
- visible focus
- accessible names
- correct ARIA usage
- sufficient contrast
- 44px+ touch targets
- reduced-motion support
- meaningful alt text
- logical DOM order
- accessible mobile navigation
- no hover-only information

---

## 32 — SEO / Semantics

Required:
- meaningful title
- meta description
- canonical URL
- Open Graph metadata
- semantic headings
- crawlable project content
- meaningful links
- structured data where useful

Visual composition must not require sacrificing semantic structure.

---

## 33 — Architecture Boundary

Conceptual hierarchy:

```text
Tokens
↓
Foundation
↓
Layout primitives
↓
UI controls
↓
Experience components
↓
Page compositions
↓
Content / data
```

Rules:
- no business logic in primitive UI
- no page hacks in global tokens
- no animation timelines scattered through unrelated JSX
- no duplicated tokens
- no dead CSS
- no unexplained magic numbers

Architecture is finalized only after visual and interaction direction are approved.

---

## 34 — Signature Interactions

Aim for approximately **3–5**, not more.

Candidates:
1. Spatial typography
2. Work as interface
3. Shared project transition
4. Service explorer
5. Contextual navigation

Do not implement all automatically. Select only interactions that improve the product.

---

## 35 — Anti-Patterns

```text
❌ WordPress-like hero
❌ Generic agency template
❌ Hero + stock image
❌ Card-grid-everything
❌ Three-column marketing cards
❌ SaaS dashboard
❌ Decorative statistics
❌ Fake metrics
❌ Progress bars without real data
❌ Carousel by default
❌ 3D because it looks cool
❌ GSAP because it is installed
❌ Smooth scroll because it is trendy
❌ Cursor gimmicks
❌ Scroll-jacking
❌ Glassmorphism
❌ Gradient overload
❌ Random AI art
❌ Generic team cards
❌ Desktop-first design
❌ Mobile as collapsed desktop
❌ Animation that blocks content
```

---

## 36 — AI Visual Prototyping

AI is for art-direction exploration, not implementation specification.

It should visualize:
- composition
- hierarchy
- typography direction
- image direction
- interaction concepts
- responsive behavior
- storytelling

Do not trust AI for:
- final Persian copy
- exact typography
- exact spacing
- accessibility
- production component structure
- implementation feasibility

### Mandatory generation order

```text
390px Mobile
↓
768px Tablet
↓
1440px Desktop
```

Required states:
1. Homepage initial
2. Hero interaction
3. Services interaction
4. Project interaction
5. Project-to-detail transition
6. Contact interaction

A single desktop screenshot is insufficient.

---

## 37 — Visual Approval Gate

Do not begin architecture until the direction passes:

### Brand
Does it unmistakably feel like Risheh?

### Differentiation
Could a WordPress theme reproduce the experience without substantial custom engineering?

If yes → reject.

### UX
Can users understand what is interactive?

### Frontend
Are there meaningful behaviors worth engineering?

### Mobile
Was the experience designed from 390px upward?

### Visual
Does it remain strong without decorative effects?

### Performance
Is each heavy feature justified?

### Accessibility
Does every interaction have an accessible path?

---

## 38 — Interaction Specification Gate

For each signature interaction define:

```text
Trigger
Initial state
Active state
Exit state
Mobile behavior
Desktop behavior
Touch behavior
Keyboard behavior
Reduced-motion behavior
Fallback
Performance considerations
```

---

## 39 — UX Flow Gate

Define:

```text
Entry
↓
Orientation
↓
Discovery
↓
Interaction
↓
Work exploration
↓
Project detail
↓
Contact
```

No animation may hide the user's location.

---

## 40 — QA

Viewport checks:

```text
390
480
768
1024
1280
1440
1920
```

Modes:
- touch
- mouse
- keyboard
- reduced motion
- slow network
- large text

Content tests:
- long Persian heading
- short heading
- long paragraph
- missing optional image
- missing optional metadata
- multiple project categories

---

## 41 — Implementation Order

```text
01 Existing brand/content audit
02 Design System
03 Mobile-first visual exploration
04 Visual critique
05 Visual direction lock
06 Interaction specification
07 UX flow
08 Architecture
09 Foundation
10 Layout primitives
11 UI controls
12 Navigation
13 Hero Experience
14 Services Experience
15 Work Experience
16 Project transitions
17 About / Process
18 Team
19 Contact
20 Responsive refinement
21 Accessibility
22 Performance
23 Cross-browser QA
24 Visual polish
```

---

## 42 — Definition of Done

A component is not done because its desktop screenshot looks good.

It is done when:
- mobile-first composition is correct
- responsive behavior is intentional
- interaction is understandable
- keyboard works
- touch works
- reduced motion works
- semantic structure is correct
- loading is acceptable
- dependencies are justified
- no dead CSS exists
- no unexplained magic numbers exist
- content variations are handled

---

# FINAL STANDARD

The website must simultaneously demonstrate:

**Design capability**  
**UI/UX capability**  
**Frontend engineering**  
**Technology judgment**

The desired client reaction is not:

> «چه سایت قشنگی.»

It should be:

> «این شرکت واقعاً طراحی، تجربه کاربری و تکنولوژی را می‌فهمد.»

## Final principle

> **The website is the first case study.**
>
> **Mobile is the baseline.**
>
> **The interaction is part of the brand.**
>
> **Technology is a means, not the identity.**
>
> **Every pixel and every interaction must earn its existence.**


# DESIGN SYSTEM IMPLEMENTATION ADDENDUM
## Precision Specification — Frontend Execution

> This addendum only completes the existing Design System. Existing design language, colors, fonts, layout direction and feature decisions remain unchanged.

---

# 43 — RESPONSIVE TOKENS

## Breakpoint contract

Breakpoints are **minimum-width progressive enhancement points**.

| Token | Range | Primary use |
|---|---:|---|
| `--bp-mobile` | 390–479px | Primary mobile composition |
| `--bp-mobile-wide` | 480–767px | Larger mobile / small landscape enhancement |
| `--bp-tablet` | 768–1023px | Tablet composition and multi-column introduction |
| `--bp-desktop-sm` | 1024–1279px | Small desktop / large tablet |
| `--bp-desktop` | 1280–1439px | Standard desktop |
| `--bp-desktop-ref` | 1440–1919px | Primary desktop reference viewport |
| `--bp-wide` | ≥1920px | Large-screen enhancement |

Implementation:

```css
:root {
  --bp-mobile: 390px;
  --bp-mobile-wide: 480px;
  --bp-tablet: 768px;
  --bp-desktop-sm: 1024px;
  --bp-desktop: 1280px;
  --bp-desktop-ref: 1440px;
  --bp-wide: 1920px;
}
```

Use `min-width` media queries.

Do not use breakpoints as component-specific magic numbers.

## Viewport reference vs content width

These are different concepts.

### Viewport reference
A QA/design reference viewport is the browser width being tested:

```text
390 / 480 / 768 / 1024 / 1280 / 1440 / 1920
```

### Max content width
The content container is independent of viewport width:

```css
--content-max: 1440px;
```

At widths above `1440px`, the content remains constrained while selected media/background layers may extend beyond the content container when the existing composition requires it.

---

# 44 — TYPOGRAPHY EXECUTION

## Font family

```css
--font-display: "Ravi", sans-serif;
--font-body: "Vazirmatn", sans-serif;
```

Do not replace, substitute or introduce another primary font.

## Weight contract

Use only weights that are actually shipped by the project.

Recommended semantic mapping:

| Role | Family | Weight |
|---|---|---:|
| Display | Ravi | 700 |
| Hero | Ravi | 700 |
| Statement | Ravi | 700 |
| Section Heading | Ravi | 700 |
| Project Heading | Ravi | 700 |
| Body | Vazirmatn | 400 |
| Body Strong | Vazirmatn | 500–600 |
| UI | Vazirmatn | 500 |
| Label | Vazirmatn | 500 |
| Caption | Vazirmatn | 400 |

If a requested weight is not available in the bundled font files, use the nearest available weight rather than browser-synthesized bold.

## Size / line-height / letter-spacing

| Role | Size | Line-height | Letter-spacing |
|---|---|---|---|
| Display | `--type-display` | 0.95–1.08 | `0` |
| Hero | `--type-3xl` → `--type-display` | 1.0–1.12 | `0` |
| Statement | `--type-2xl` → `--type-3xl` | 1.05–1.18 | `0` |
| Section Heading | `--type-xl` → `--type-2xl` | 1.15–1.25 | `0` |
| Project Heading | `--type-lg` → `--type-2xl` | 1.1–1.2 | `0` |
| Body | `--type-md` | 1.75–2.0 | `0` |
| UI | `--type-sm` → `--type-md` | 1.4–1.6 | `0` |
| Label | `--type-xs` → `--type-sm` | 1.4–1.5 | `0` |
| Caption | `--type-xs` | 1.5–1.7 | `0` |

For Persian text, readability takes priority over optical compactness.

Avoid negative letter-spacing on Persian text.

Latin uppercase labels may use small positive tracking only where required by the existing visual treatment.

## Persian text rules

### Line breaks
- Do not insert `<br>` merely to reproduce an AI screenshot.
- A forced line break is allowed only when it is part of the approved art direction.
- Long headings must remain valid when content changes.

### Numerals
- Persian copy uses Persian numerals when the content is naturally Persian.
- Technical identifiers, URLs, emails, phone values, dates used as machine/data strings may retain Latin numerals.
- Do not mix numeral systems inside one semantic value without reason.

### Mixed RTL/LTR
Wrap directional values explicitly when needed:

```html
<bdi>...</bdi>
```

Use `dir="ltr"` for values whose reading direction is intrinsically LTR, such as:
- URL
- email
- phone value when displayed as a technical contact string

### Punctuation
Persian prose uses Persian punctuation where applicable:

```text
،  ؛  ؟
```

Do not manually reverse punctuation with spacing hacks.

### URL
URLs remain LTR and must not be visually reordered by RTL layout.

### Email
Email addresses remain LTR.

### Phone
Phone numbers must have a stable LTR representation and an accessible label in Persian.

### Date
Use one consistent project convention per content field. Do not visually mix Persian and Latin date formats in the same component without a content requirement.

---

# 57 — ICON SYSTEM

## Source

Use the existing project icon source where an appropriate icon already exists.

Current standard:
- SVG icons
- existing React icon library for interface icons where suitable
- custom SVG only when the required icon does not exist in the approved source

Do not add another icon library.

## SVG standard

```text
viewBox: 0 0 24 24
```

Default:

```text
fill: none
stroke: currentColor
stroke-linecap: round
stroke-linejoin: round
```

Use filled SVG only when the icon source/design explicitly requires it.

## Stroke

Default stroke:

```text
1.5–2px
```

Stroke must remain visually balanced with the control size.

## Size tokens

```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
```

Use the smallest size that remains legible at the target viewport.

## Direction

### Directional icons
Examples:
- arrow
- chevron
- back/forward
- navigation movement

These are RTL-aware.

### Non-directional icons
Examples:
- menu
- close
- search
- external-link indicator when its visual meaning is not directional

Do not mirror them.

## RTL mirror rule

A directional icon is mirrored only when its semantic direction changes in RTL.

Do not apply `scaleX(-1)` globally to an icon set.

---

# 45 — BUTTON + FORM

## Button

### Variants

Only the required variants:

```text
Primary
Secondary
```

Primary is the main action.

Secondary is the lower-emphasis action.

Do not create additional button variants.

### Sizes

```text
Default
Compact
```

### Geometry

Default height:

```text
44px minimum
```

Preferred desktop height:

```text
44–48px
```

Horizontal padding:

```text
16–24px
```

Gap:

```text
8–12px
```

Typography follows the UI role.

Icon size follows the control size.

## Button states

| State | Trigger | Visual | Interaction | Motion | Accessibility |
|---|---|---|---|---|---|
| Default | idle | base surface/text | available | none | accessible name |
| Hover | pointer enters | approved hover treatment | remains actionable | Level 1 | never hover-only |
| Focus | keyboard focus | focus ring | keyboard target | minimal | visible focus |
| Pressed | pointer/keyboard press | pressed treatment | action begins | short | preserves target |
| Disabled | unavailable | reduced emphasis | no action | none | `disabled`/appropriate ARIA |
| Loading | async action | loading indication | prevents duplicate submit | subtle | `aria-busy` |
| Exit | route/state leaves | normal transition out | action completed | approved transition | focus managed |

## Form controls

Only these controls are required:

```text
Input
Textarea
Select
Checkbox
Radio
```

Use only where the current product flow requires them.

### Input / Textarea / Select

States:

```text
Default
Focus
Filled
Error
Success
Disabled
Loading
```

### Checkbox / Radio

States:

```text
Default
Checked
Focus
Disabled
Error
```

## Validation

Validation must be:
- deterministic
- understandable
- adjacent to the affected field
- announced appropriately to assistive technology

Do not rely on color alone.

## Error

Required:
- field-level message
- invalid state
- preserved user input where safe
- focus moved only when appropriate

## Success

Success must confirm completion without destroying context.

## Loading

Submit controls must prevent duplicate submission.

## Directional values

### Email
```html
<input type="email" dir="ltr" autocomplete="email">
```

### Phone
```html
<input type="tel" dir="ltr" autocomplete="tel">
```

### URL
```html
<input type="url" dir="ltr" inputmode="url">
```

Persian labels and helper text remain RTL.

---

# 46 — MOTION EXECUTION

## Duration tokens

```css
--motion-instant: 100ms;
--motion-fast: 180ms;
--motion-standard: 300ms;
--motion-emphasis: 500ms;
--motion-narrative: 800ms;
--motion-slow: 1200ms;
```

Use the shortest duration that preserves comprehension.

## Easing tokens

```css
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-enter: cubic-bezier(0.16, 1, 0.3, 1);
--ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
--ease-linear: linear;
```

## Application

| Category | Duration | Easing |
|---|---:|---|
| Micro interaction | 100–300ms | standard |
| Component state | 180–500ms | standard / enter / exit |
| Narrative transition | 500–1200ms | enter / exit |
| Continuous visual value | linear | linear |

## Preferred properties

Prefer:

```text
transform
opacity
clip-path
```

Use layout-affecting properties only when the interaction requires them.

Avoid animating:

```text
width
height
top
left
margin
padding
```

when transform/opacity can produce the same result.

## Interruptibility

User-driven interactions must be interruptible.

A transition must not force the user to wait for the animation before:
- changing direction
- closing a menu
- selecting another item
- navigating
- continuing to scroll

## Reduced motion

Under `prefers-reduced-motion: reduce`:
- remove decorative motion
- replace long choreography with immediate state changes where possible
- retain necessary state feedback
- never remove semantic content

No new animation pattern is introduced by this section; it only standardizes the existing motion system.

---

# 47 — ACCESSIBILITY

## Contrast

Target WCAG 2.2 AA.

Minimum requirements:

```text
Normal text: 4.5:1
Large text: 3:1
UI components / graphical objects: 3:1
```

## Approved primary pairs

The following pairings are permitted as the base system:

```text
Ink on Paper
Brand on Paper
Paper on Ink
Paper on Brand
Ink on White
```

Before implementation, every text size/weight combination must be contrast-tested rather than assumed safe from the color names alone.

Do not use `Muted` text for essential information if it fails the required contrast ratio.

## Focus ring

Default:

```css
outline: 2px solid currentColor;
outline-offset: 3px;
```

If the surrounding background makes the ring ambiguous, use a two-layer visual treatment that preserves a visible contrast boundary.

Never:

```css
outline: none;
```

without an accessible replacement.

## Keyboard

Required:
- logical DOM order
- visible focus
- no keyboard traps
- all interactive elements reachable
- Escape closes dismissible overlays/menus
- focus is restored after closing an overlay when appropriate

## Focus order

Focus follows the semantic reading/task order, not visual decoration.

Do not reorder focus with positive `tabindex`.

Use:

```html
tabindex="0"
```

only when a custom interactive element genuinely requires it.

## Touch target

Minimum:

```text
44 × 44px
```

This applies even when the visible icon is smaller.

## Screen-reader sanity

Verify:
- headings announce correctly
- controls have accessible names
- expanded/collapsed state is announced
- form errors are associated with fields
- decorative images are hidden appropriately
- meaningful images have useful alt text

---

# 48 — Z-INDEX / LAYERS

Use a limited token hierarchy.

```css
:root {
  --z-base: 0;
  --z-content: 10;
  --z-header: 100;
  --z-floating: 200;
  --z-overlay: 300;
  --z-modal-menu: 400;
  --z-top-interaction: 500;
}
```

## Hierarchy

| Layer | Token | Purpose |
|---|---:|---|
| Base | 0 | document/background |
| Content | 10 | local positioned content |
| Header | 100 | persistent navigation |
| Floating | 200 | contextual floating UI |
| Overlay | 300 | page/interaction overlay |
| Modal menu | 400 | mobile menu / modal navigation |
| Top-level interaction | 500 | only the highest-priority active interaction |

Do not introduce arbitrary z-index values.

Do not create a higher layer merely to fix an accidental stacking-context problem.

---

# 49 — IMAGE SYSTEM

Only the existing image types are defined here.

| Type | Ratio | Fit | Position | Responsive behavior |
|---|---|---|---|---|
| Hero | art-directed; preserve approved composition | `cover` when image fills frame | focal point defined per asset | mobile uses mobile-first crop |
| Project Hero | project-specific approved ratio | `cover` | focal point from source | responsive `srcset` |
| Project Thumbnail | project-specific approved ratio | `cover` | focal point from source | smaller responsive source |
| Team Portrait | portrait ratio | `cover` | `50% 50%` unless asset requires focal adjustment | preserve portrait crop |
| Editorial | content-defined ratio | `cover` or `contain` according to source intent | focal point | responsive source |
| Background | section-defined | `cover` | explicit focal point | optimized; never required for meaning |

No new image type is introduced.

## Focal point

Every art-directed crop must record a focal point:

```css
object-position: 50% 50%;
```

Change only when the subject requires it.

Do not use arbitrary per-breakpoint cropping without a visual reason.

## Responsive images

Use:

```html
<picture>
  <source type="image/avif" ...>
  <source type="image/webp" ...>
  <img ...>
</picture>
```

where the pipeline provides those formats.

Use `srcset` + `sizes` for responsive raster assets.

## Priority

### High priority
- Hero image above the fold
- critical project hero when directly visible

### Normal priority
- above-the-fold secondary media

### Lazy
- below-the-fold project thumbnails
- team portraits
- editorial images
- backgrounds not needed for first paint

Do not lazy-load the primary LCP image.

## Dimensions

Every image must reserve layout space using:
- explicit `width`/`height`, or
- a stable `aspect-ratio`

This prevents layout shift.

---

# 50 — COMPONENT STATE MATRIX

## Button

| State | Trigger | Visual | Interaction | Motion | Accessibility |
|---|---|---|---|---|---|
| Default | idle | base | clickable | none | name exposed |
| Hover | pointer | hover treatment | clickable | fast | not required for touch |
| Focus | keyboard | focus ring | clickable | instant/fast | visible |
| Active | press | pressed treatment | action | instant/fast | preserves focus |
| Loading | async start | loading treatment | prevents duplicate action | subtle | `aria-busy` |
| Disabled | unavailable | disabled treatment | no action | none | native disabled when possible |
| Exit | completion/navigation | transition out | route/state changes | standard | focus managed |

## Link

| State | Trigger | Visual | Interaction | Motion | Accessibility |
|---|---|---|---|---|---|
| Default | idle | link treatment | navigation | none | semantic link |
| Hover | pointer | enhanced treatment | navigation | fast | not hover-dependent |
| Focus | keyboard | focus ring | navigation | fast | visible |
| Active | press/current | active/current treatment | navigation | fast | `aria-current` where appropriate |
| Exit | navigation | transition | route change | standard | destination remains accessible |

## Project

| State | Trigger | Visual | Interaction | Motion | Accessibility |
|---|---|---|---|---|---|
| Default | idle | approved project composition | selectable | none | semantic link/button |
| Hover | pointer | image/type enhancement | selectable | standard | hover not required |
| Focus | keyboard | focus treatment | selectable | fast | visible |
| Active | selection | selected project state | opens project | emphasis | announced destination |
| Loading | route/media loading | reserved media + state | prevents broken transition | subtle | status available |
| Empty | no optional project data | valid fallback | remains usable | none | no missing semantics |
| Exit | leaving project | transition | route change | narrative if approved | no blocking |

## Service

| State | Trigger | Visual | Interaction | Motion | Accessibility |
|---|---|---|---|---|---|
| Default | inactive | base label/content | selectable | none | semantic control |
| Hover | pointer | active preview | preview | fast | enhancement only |
| Focus | keyboard | focus ring + active indication | preview | fast | announced state |
| Active/Open | selection | selected service | content revealed | standard | `aria-expanded` where relevant |
| Exit | another service/section | previous state leaves | selection changes | standard | focus remains logical |

## Menu

| State | Trigger | Visual | Interaction | Motion | Accessibility |
|---|---|---|---|---|---|
| Default | closed | menu trigger | opens menu | none | `aria-expanded=false` |
| Focus | keyboard | focus ring | opens | fast | visible |
| Open | click/tap/keyboard | overlay/menu | navigation available | standard | `aria-expanded=true`, focus managed |
| Active | current route/section | active link | navigation | fast | current state exposed |
| Exit | close/Escape/navigation | closes | returns to page | fast | focus restoration |

## Carousel

Only when a carousel exists in the approved implementation.

| State | Trigger | Visual | Interaction | Motion | Accessibility |
|---|---|---|---|---|---|
| Default | idle | current slide | swipe/control | none | slide status |
| Hover | pointer | control visibility if applicable | controls | fast | controls accessible |
| Focus | keyboard | focus ring | previous/next | fast | keyboard controls |
| Active | navigation | new slide | selection changes | standard | current slide announced |
| Loading | media pending | reserved media | navigation remains stable | subtle | status |
| Empty | no items | no carousel UI | no interaction | none | no empty carousel |
| Exit | section leaves | state stops | no forced motion | immediate | no blocked navigation |

## Form controls

Relevant states only:

```text
Default
Focus
Error
Success
Loading
Disabled
```

`Hover`, `Active` and `Exit` are applied only where the control type actually has those states.

---

# 51 — TESTING + VISUAL QA

## Responsive

Mandatory visual checks:

```text
390
480
768
1024
1280
1440
```

1920 remains a large-screen validation reference when the viewport/content model requires it.

Check:
- overflow
- wrapping
- composition
- touch target
- image crop
- navigation
- spacing
- typography

## Accessibility

Check:
- keyboard-only navigation
- visible focus
- contrast
- reduced motion
- screen-reader sanity

## Visual

Check:
- typography
- line-height
- spacing
- alignment
- image crop
- focal point
- RTL
- animation
- overflow
- unexpected layout shift

## Functional

Check:
- navigation
- mobile menu
- CTA
- project interaction
- forms
- links
- loading/error/empty states where applicable

## Essential tools

Use only the tools relevant to the check:

```text
Chrome DevTools
Lighthouse
axe DevTools
React DevTools
Playwright
```

Use browser/device emulation for first-pass responsive QA and real mobile hardware for final interaction/performance validation.

---

# 52 — FRONTEND IMPLEMENTATION SPECIFICATION

## Tech Stack

Existing project foundation:

```text
React 19
React Router 7
Create React App / react-scripts
CSS Modules
GSAP
Swiper
React Icons
```

Rules:
- keep the existing stack unless an architecture review explicitly approves a change
- do not add a dependency to solve a problem already solvable by CSS/Browser API
- GSAP and Swiper remain optional at feature level even though they exist in the stack
- do not add another icon library

## Folder Architecture

Recommended implementation boundary:

```text
src/
├── app/
│   ├── App.jsx
│   └── routes.jsx
│
├── assets/
│   ├── fonts/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── foundation/
│   ├── layout/
│   ├── controls/
│   ├── navigation/
│   └── experience/
│
├── pages/
│   ├── Home/
│   └── Project/
│
├── data/
│   ├── projects.js
│   ├── services.js
│   └── team.js
│
├── hooks/
│
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   └── fonts.css
│
└── utils/
```

Do not create folders without a real implementation need.

## Token Architecture

Single source of truth:

```text
styles/tokens.css
```

Tokens are grouped into:

```text
color
typography
spacing
breakpoint
layout
icon
motion
z-index
```

Components consume semantic tokens.

Components must not redefine global design values.

## Breakpoint Implementation

Use mobile-first CSS:

```css
.component {
  /* 390px baseline */
}

@media (min-width: 480px) {}
@media (min-width: 768px) {}
@media (min-width: 1024px) {}
@media (min-width: 1280px) {}
@media (min-width: 1440px) {}
@media (min-width: 1920px) {}
```

Do not write desktop-first styles and override them for mobile.

Use fluid values with `clamp()` where the existing system calls for continuous scaling.

## Typography Implementation

Fonts must be locally loaded from approved project assets.

Use:

```css
font-display: swap;
```

Typography tokens must be semantic.

Do not define one-off font sizes inside individual components unless the value is a genuine art-directed exception.

Persian content must remain readable at 390px before desktop enhancements are added.

## RTL Rules

Root document direction:

```html
<html lang="fa" dir="rtl">
```

Use logical CSS properties.

Keep intrinsically LTR values isolated:

```html
<bdi>...</bdi>
```

or:

```html
dir="ltr"
```

Do not use CSS transforms to fake RTL layout.

## Component API

Component APIs should expose intent, not implementation details.

Example:

```tsx
<Button
  variant="primary"
  size="default"
  loading={false}
  disabled={false}
>
  شروع گفتگو
</Button>
```

Avoid APIs such as:

```text
animationType
greenVariant
marginTop
customTransform
```

unless they are explicitly part of an approved component contract.

## State Model

Use explicit state.

Example:

```ts
type UIState =
  | "idle"
  | "active"
  | "open"
  | "loading"
  | "error"
  | "empty";
```

Do not infer critical state only from CSS classes.

Interactive state must be represented in React/DOM where accessibility requires it.

## Motion Implementation

Use:

```text
CSS transitions
↓
CSS keyframes
↓
Web APIs
↓
GSAP
```

Choose the lowest layer that solves the interaction.

GSAP timelines must:
- be scoped to the component
- clean up on unmount
- respect reduced motion
- avoid leaking listeners/ScrollTriggers
- not block navigation

## Interaction Specification

Every major interaction must have:

```text
Trigger
Initial
Active
Exit
Duration
Easing
Interruptibility
Mobile behavior
Reduced-motion fallback
```

Example:

```text
Trigger: tap / click / Enter
Initial: service inactive
Active: selected service + content visible
Exit: previous service deactivates
Duration: 300ms
Easing: --ease-standard
Interruptibility: yes
Mobile: tap
Reduced motion: immediate state swap
```

Do not create an interaction whose behavior is undefined at 390px.

## Image Pipeline

Source:

```text
Original asset
↓
Optimize
↓
AVIF/WebP where supported by pipeline
↓
Responsive sizes
↓
srcset/sizes
↓
Priority/lazy decision
```

Hero/LCP media is prioritized.

Below-the-fold media is lazy-loaded.

Every image reserves layout space.

## Loading / Error / Empty

Only implement these states where the feature can actually enter them.

Rules:
- loading must preserve layout
- error must preserve usability
- empty must not render broken UI
- async actions must prevent accidental duplication
- route/media loading must not create avoidable layout shifts

## Accessibility Implementation

Required implementation:
- semantic HTML first
- ARIA only when native semantics are insufficient
- visible `:focus-visible`
- keyboard interaction
- Escape for dismissible overlays
- focus management for menu/modal states
- `aria-expanded` for expandable controls
- `aria-current` for current navigation state where applicable
- `aria-invalid` and error association for invalid fields
- reduced-motion media query

## SEO

Implement:
- unique document title
- meta description
- canonical URL
- Open Graph metadata
- semantic headings
- crawlable project links/content

Project pages must have meaningful route-level metadata.

Do not generate SEO content that does not exist in the approved content source.

## Analytics

Analytics must measure product behavior, not decorative interaction.

Track only meaningful events such as:

```text
CTA click
Project open
Project completion/navigation
Service selection
Contact submission
```

Do not track every animation frame, hover or scroll event.

Analytics must not block page rendering.

## Performance Budget

Targets:

```text
Lighthouse Performance: ≥ 90
LCP: < 2.5s
CLS: < 0.1
```

Engineering budget:
- no unnecessary dependency
- no large image delivered when a smaller responsive source exists
- no render-blocking non-critical media
- no unbounded scroll animation
- expensive experiences should be isolated/code-split when necessary

## Browser Support

Support the current stable versions of:

```text
Chrome
Edge
Firefox
Safari
iOS Safari
Android Chrome
```

Graceful degradation is required for non-critical visual enhancement.

Core content, navigation and contact functionality must not depend on advanced animation APIs.

## Testing Strategy

### Unit/component
Test:
- component states
- accessibility attributes
- conditional rendering
- form validation

### Interaction
Use Playwright for:
- navigation
- menu
- keyboard
- CTA
- project interaction
- form flow

### Visual
Use fixed viewport screenshots for:

```text
390 / 480 / 768 / 1024 / 1280 / 1440
```

Compare:
- typography
- spacing
- alignment
- crop
- RTL
- overflow
- major interaction states

### Performance
Use Lighthouse + Chrome DevTools.

### Accessibility
Use keyboard testing + axe DevTools + screen-reader sanity checks.

## Deployment

Production deployment must:
- build successfully
- serve SPA routes correctly
- preserve direct project URLs
- serve optimized static assets
- use HTTPS
- expose correct metadata
- avoid console errors

## Definition of Done

A feature/component is complete only when the relevant criteria pass:

```text
Responsive
RTL
Accessibility
Performance
Visual QA
Keyboard
Reduced motion
Loading / Error / Empty — when applicable
SEO — when applicable
```

No component is considered done from a desktop screenshot alone.
