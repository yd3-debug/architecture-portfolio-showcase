

# Integrate Shader Animation as Hero Background

## What Changes

Replace the static hero background images (desktop and mobile) with the Three.js shader animation. The animated shader will serve as the full background of the hero section, with the existing dark overlay on top to keep text readable.

## Technical Details

### 1. Install dependency
- Add `three` npm package (the project already has React 18, so no version conflicts)

### 2. Create the shader component
- Add `src/components/ui/shader-animation.tsx` — the provided Three.js shader component as-is (remove `"use client"` directive since this is Vite, not Next.js)

### 3. Update Hero.tsx
- Import `ShaderAnimation`
- Replace both desktop and mobile background image `<div>` blocks with a single `ShaderAnimation` component positioned absolutely behind the content
- Keep the `bg-charcoal/60` overlay on top of the shader for text contrast
- Remove the `heroDesktop` and `heroMobile` image imports (no longer needed)
- The mobile fixed-background CSS (`hero-mobile-fixed`) will apply to the shader container instead

| File | Change |
|------|--------|
| `src/components/ui/shader-animation.tsx` | New file — shader component |
| `src/components/Hero.tsx` | Replace image backgrounds with `ShaderAnimation` |
| `package.json` | Add `three` dependency |

The shader renders colorful animated rings/circles on a dark background — visually striking and unique compared to a static photo.

