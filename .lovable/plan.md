
# Add Scarcity / FOMO Badge with Strikethrough

## The Concept

A small, eye-catching badge showing availability dropping from 4 to 1 spot, using a strikethrough on the old number. This creates urgency and fear of missing out.

Visual example:
```text
[flame icon] ~~4~~ → 1 Spot Remaining for Q1 2026
```

## Where It Goes

Two placements for maximum impact:

### 1. Hero Section (first thing visitors see)
Place a compact scarcity pill just below the CTAs. Styled with a semi-transparent dark background to sit naturally over the hero image — subtle but impossible to miss.

### 2. Contact Section (where they convert)
Update the existing scarcity badge (currently says "accepting 2 new strategic partners") to match the new "4 crossed out, 1 remaining" format. This reinforces the urgency right at the decision point.

## File Changes

| File | Change |
|------|--------|
| `src/components/Hero.tsx` | Add scarcity badge below the CTA buttons |
| `src/components/Contact.tsx` | Update existing scarcity badge with strikethrough format |

## Design Details

**Hero badge:**
- Positioned between the CTAs and the scroll indicator
- Semi-transparent background (`bg-white/10 backdrop-blur-sm`) with a subtle border
- Small flame or alert circle icon for visual urgency
- Text: `~~4~~ 1 Spot Remaining for Q1 2026`
- The "4" gets a `line-through` style and muted opacity
- The "1" is highlighted with slightly bolder weight or accent color

**Contact badge (updating existing):**
- Same strikethrough concept: `~~4~~ 1 partnership spot remaining for Q1 2026`
- Keep the existing rounded-full pill style
- Update from "Currently accepting 2 new strategic partners" to the new format

## Technical Approach

- Use a `<span className="line-through opacity-50">4</span>` for the crossed-out number
- Use a `<span className="font-semibold text-accent">1</span>` (or white in the hero) for the remaining number
- Add an arrow or right-arrow symbol between them for the "decreasing" visual
- Import `AlertCircle` or `Flame` icon from lucide-react for the badge icon

No new components needed — just updates to two existing files.
