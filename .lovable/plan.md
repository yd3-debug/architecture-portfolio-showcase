

# Replace Testimonials Hero Image

## Overview

Generate a new AI image for the Testimonials section that represents build, growth, and trust—without any text or writing in the image.

---

## Current Issue

The existing image contains AI-generated gibberish text on the paper ("PROED FRORATY") which looks unprofessional and doesn't convey the intended message clearly.

---

## New Image Concept

A warm, editorial-style flat-lay photograph featuring:

- **Growth**: A thriving green potted plant with lush leaves (represents organic business growth)
- **Build/Foundation**: Stacked wooden building blocks or a solid foundation element (represents building something lasting)
- **Trust**: A bronze handshake sculpture (represents trusted partnerships)
- **Progress**: Gold coins in ascending stacks (represents increasing prosperity)
- **Direction**: A brass compass (represents strategic guidance)

**Critical Requirements**:
- **No text, labels, or writing** anywhere in the image
- No paper documents with charts or graphs that might contain text
- Warm, natural lighting from the side
- Rich wooden desk surface for luxurious, professional feel
- Clean, uncluttered composition
- Landscape orientation (wide format for the hero banner)

---

## Technical Implementation

| Step | Action |
|------|--------|
| 1 | Generate new image using AI image generation (Gemini) |
| 2 | Save to `src/assets/testimonials-hero.jpg` (replace existing) |
| 3 | Update alt text in `Testimonials.tsx` to match new content |

---

## File Changes

| File | Change |
|------|--------|
| `src/assets/testimonials-hero.jpg` | Replace with new generated image |
| `src/components/Testimonials.tsx` | Update alt text to describe new image accurately |

---

## Prompt for Image Generation

"Editorial product photography, warm luxury flat-lay on rich mahogany wooden desk surface. Composition includes: a thriving green potted jade plant in a ceramic pot representing organic growth, a bronze handshake sculpture representing trust and partnership, ascending stacks of gold coins representing prosperity, a brass nautical compass representing direction, and smooth wooden building blocks stacked in a tower representing foundation and building. Soft natural side lighting from window, warm golden hour tones, professional business aesthetic. Absolutely no text, no labels, no writing, no documents, no charts, no paper anywhere in the image. Clean minimalist styling. High-end editorial look. 16:9 landscape aspect ratio."

