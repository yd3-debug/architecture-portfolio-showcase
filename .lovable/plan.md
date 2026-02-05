
# Fix Mobile White Gap Issue

## Problem Identified

The white gap appears because of a layout conflict between:
1. The Hero `<section>` which participates in document flow with `min-h-[85vh]`
2. The fixed background image at exactly `85vh`
3. The scroll-over content with `margin-top: 85vh`

When the Hero's content (text, buttons, scroll indicator) extends the section beyond 85vh, the scroll-over content starts too low, creating a gap.

---

## Solution

### Approach: Make Hero Section Non-Participating in Flow (Mobile Only)

On mobile, the Hero section should not affect layout—it should be purely for positioning the fixed background and content overlay. The scroll-over content should start immediately after the visible hero area.

---

## Code Changes

### 1. Update Hero Component (`src/components/Hero.tsx`)

Add a mobile-specific class to make the Hero section take exactly `85vh` and handle overflow properly:

```tsx
<section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden lg:relative">
```

Change to:

```tsx
<section className="relative h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
```

On mobile: Fixed height of `85vh` (matches the fixed background and margin-top)
On desktop: `min-h-screen` for full viewport height

---

### 2. Update CSS (`src/index.css`)

Ensure the Hero section itself is properly positioned on mobile:

```css
@media (max-width: 1023px) {
  .hero-mobile-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 85vh;
    z-index: 0;
  }
  
  .scroll-over-content {
    position: relative;
    z-index: 10;
    margin-top: 85vh;
    background: hsl(var(--background));
    border-radius: 24px 24px 0 0;
    box-shadow: 0 -8px 30px hsl(0 0% 0% / 0.15);
  }
}
```

No changes needed here—the CSS is correct.

---

### 3. Alternative Fix: Adjust Index.tsx Layout

Wrap Hero in a container that handles the mobile fixed-height behavior:

```tsx
{/* Hero wrapper - fixed height on mobile for scroll-over effect */}
<div className="h-[85vh] lg:h-auto">
  <Hero />
</div>

{/* Content that scrolls over hero on mobile */}
<div className="scroll-over-content">
  ...
</div>
```

This ensures the Hero container is exactly `85vh` on mobile, matching the `margin-top` of the scroll-over content.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/Hero.tsx` | Change `min-h-[85vh]` to `h-[85vh]` for mobile, keep `lg:min-h-screen` for desktop |

---

## Visual Explanation

```text
BEFORE (Bug):
┌──────────────────────────┐
│ Hero Section (min-h-85vh)│  ← Can extend beyond 85vh
│ - Content                │
│ - Buttons                │
│ - Scroll indicator       │  ← Pushes section beyond 85vh
└──────────────────────────┘
        ↓ GAP ↓             ← White space here!
┌──────────────────────────┐
│ scroll-over-content      │  ← margin-top: 85vh
│ (TrustStrip...)          │
└──────────────────────────┘

AFTER (Fixed):
┌──────────────────────────┐
│ Hero Section (h-85vh)    │  ← Fixed at exactly 85vh
│ - Content                │
│ - overflow: hidden       │
└──────────────────────────┘ ← No gap
┌──────────────────────────┐
│ scroll-over-content      │  ← margin-top: 85vh aligns perfectly
│ (TrustStrip...)          │
└──────────────────────────┘
```

---

## Implementation Summary

1. Change Hero section from `min-h-[85vh]` to `h-[85vh] lg:min-h-screen`
2. This ensures exact height match between Hero, fixed background, and scroll-over margin
3. Desktop behavior unchanged (uses `lg:min-h-screen`)
