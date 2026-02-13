

# Fix Font Consistency Across the Site

## The Problem

The **"Who We Help"** section uses different font weights and families compared to every other section, making it visually inconsistent.

## What's Wrong (WhoWeHelp.tsx)

| Line | Current | Should Be |
|------|---------|-----------|
| Main heading (line 60) | `font-bold` | `font-serif font-medium` |
| Body text (line 63) | No weight specified | Add `font-light` |
| "Does this sound like you?" (line 70) | `font-serif text-lg` | Already correct |
| Profile card titles (line 120) | `font-semibold` | `font-serif font-medium` |
| Profile card body (line 123) | No `font-light` | Add `font-light` |
| "Sound familiar?" (line 133) | `font-medium` | `font-serif font-medium` |

## Changes

**Single file:** `src/components/WhoWeHelp.tsx`

1. Main heading: change `font-bold` to `font-serif font-medium`
2. Subtitle paragraph: add `font-light`
3. Profile card titles: change `font-semibold` to `font-serif font-medium`
4. Profile card descriptions: add `font-light`
5. Bottom "Sound familiar?" text: add `font-serif`

No structural or layout changes -- just aligning font classes to match the site's design system.

