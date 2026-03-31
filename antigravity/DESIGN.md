# Design System Document: High-End Editorial Nature & Travel

## 1. Overview & Creative North Star

### Creative North Star: "The Verdant Curator"
This design system is not a utility; it is an immersive editorial experience. It is designed to evoke the feeling of a premium, large-format travel journal. We move away from the "boxy" constraints of traditional web design, instead embracing **Organic Dimensionality**. By utilizing deep tonal layering, intentional asymmetry, and glassmorphism, we create a digital environment that feels as lush and layered as a rainforest canopy.

### Breaking the Template
To achieve a high-end feel, designers must avoid rigid, repetitive grids. Use the spacing scale to create "breathing room" (white space) that feels intentional. Elements should overlap—images should bleed behind glass headers, and typography should bridge the gap between different surface containers. This "interlocking" layout strategy removes the "modular template" look and replaces it with a bespoke, curated flow.

---

## 2. Colors

The palette is rooted in a deep, nocturnal forest aesthetic. It utilizes high-contrast accents to guide the eye through the shadows.

* **Primary (`#4de082`)**: Our "Leaf Green." Use this for high-priority actions and signature brand moments. It represents life and vibrancy against the dark background.
* **Surface Hierarchy**: We use a dark base (`#0e1511`) and build depth through the `surface-container` tiers.
* **Surface Lowest (`#09100c`)**: Deepest recesses, used for background immersion.
* **Surface Highest (`#2f3632`)**: Raised elements, closest to the user.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or defining cards. Boundaries must be defined solely through background color shifts or tonal transitions. If you need to separate content, move from `surface` to `surface-container-low`.

### The "Glass & Gradient" Rule
To add "soul" to the UI, use Glassmorphism for floating elements (like Navigation Bars or floating Action Buttons). Use `surface-variant` with a `backdrop-filter: blur(20px)` and an opacity of 60-80%. For primary CTAs, apply a subtle linear gradient from `primary` to `on_primary_container` to provide a tactile, rounded feel.

---

## 3. Typography

The typographic soul of this system lies in the tension between the timeless **Noto Serif** and the modern, geometric **Manrope**.

* **Display & Headlines (Noto Serif)**: These are our "Editorial Voices." Large-scale, characterful, and sophisticated. Use `display-lg` (3.5rem) for hero moments. The serif evokes history, luxury, and storytelling.
* **Body & Labels (Manrope)**: The "Functional Voice." Clean and highly legible. Manrope provides a contemporary balance to the serif, ensuring that even at `body-sm`, the information is crisp.

**Hierarchy as Identity:** Always use high contrast in scale. A `display-lg` heading should often be followed by a `body-md` or `label-md` to create a dramatic, upscale editorial rhythm.

---

## 4. Elevation & Depth

We reject the standard "material" drop shadow in favor of **Tonal Layering** and **Ambient Light**.

* **The Layering Principle**: Achieve depth by stacking tiers. Place a `surface-container-highest` card on a `surface` background to create a soft, natural lift. This mimics how light filters through a forest—diffused and soft.
* **Ambient Shadows**: When a floating effect is required (e.g., a modal or floating menu), use a "Long Shadow."
* **Blur**: 40px - 60px.
* **Opacity**: 4% - 8%.
* **Color**: Use a tinted version of `on_surface` (deep forest green/grey) rather than pure black to keep the shadows feeling "atmospheric."
* **The "Ghost Border" Fallback**: If a container needs more definition against a complex image, use the `outline-variant` token at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
* **Primary**: Fully rounded (`9999px`). Background: `primary`. Text: `on_primary`. Apply a subtle "inner glow" using a lighter green top-border at 20% opacity.
* **Secondary (Ghost)**: Fully rounded. Border: `outline-variant` at 30%. Text: `on_surface`.
* **Tertiary**: Text-only using `label-md` in `primary` color, used for low-emphasis actions.

### Cards & Lists
* **No Dividers**: Forbid divider lines. Use `spacing-6` or `spacing-8` to create separation.
* **Organic Corners**: All cards must use `rounded-xl` (1.5rem) to maintain the "Organic" feel of the system.
* **Image Integration**: Images should always use a subtle vignette or a `surface-dim` overlay to ensure `on_surface` text remains legible.

### Navigation Bar
* **Style**: Glassmorphic. `surface-container` background with 70% opacity and 24px backdrop blur.
* **Layout**: Asymmetric. Brand logo on the far left, links centered, and the "Plan Your Trip" CTA (`primary`) on the far right.

### Chips
* **Filter Chips**: Use `surface-container-high` for the container and `on_surface_variant` for text. When selected, transition to `primary_container` with `on_primary` text.

---

## 6. Do's and Don'ts

### Do
* **Do** use extreme vertical spacing. Luxury is defined by the space you *don't* fill.
* **Do** overlap elements. Let an image corner tuck under a text block or a button hover over two different background tones.
* **Do** use `primary-fixed-dim` for subtle accent icons to maintain a sophisticated, non-garish look.

### Don't
* **Don't** use pure black `#000000` or pure white `#ffffff`. Always use the tokens `surface` and `on_surface` to keep the palette grounded in nature.
* **Don't** use 1px solid borders for layout. It shatters the "Organic" illusion and makes the UI feel like a generic dashboard.
* **Don't** crowd the display type. `Noto Serif` needs air to breathe; never use it with tight line-heights. Set `line-height` to at least 1.2 or 1.3 for headlines.