

## Replace Testimonials Hero Image with Business Growth & Trust Theme

### Current State
The testimonials hero image (`src/assets/testimonials-hero.jpg`) currently shows a business workspace with leather portfolio, gold pen, and espresso.

### New Image Concept
Generate a new AI image focused on **business growth and trust** - themes that align perfectly with the testimonials section where clients share their success stories.

---

## Implementation

### Step 1: Generate New Hero Image

**AI Generation Prompt**:
> "Elegant overhead view of business growth symbols on a warm wooden desk. A thriving green plant in a ceramic pot, an upward-trending line graph on premium paper, a handshake silhouette sculpture in bronze, stacked coins showing growth progression, and a vintage compass representing direction and trust. Soft natural morning light, warm golden tones. Editorial photography style, no text visible, no hands, no faces. Landscape orientation, high quality, professional lifestyle photography representing business growth, prosperity, and trusted partnerships."

### Step 2: Update Alt Text

Update the alt text in `Testimonials.tsx` (line 24) to accurately describe the new image:

| Current Alt Text | New Alt Text |
|-----------------|--------------|
| "Premium business workspace with leather portfolio, gold pen, and espresso representing client success and sophistication" | "Business growth symbols with thriving plant, upward graph, and bronze handshake sculpture representing prosperity and trusted partnerships" |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/assets/testimonials-hero.jpg` | Replace with new AI-generated image |
| `src/components/Testimonials.tsx` | Update alt text (line 24) |

---

## Design Notes

- **Growth symbolism**: Plant, upward graph, stacked coins
- **Trust symbolism**: Handshake sculpture, compass (direction/reliability)
- **Maintains brand aesthetic**: Warm tones, editorial style, no faces/hands/text
- **Complements testimonials**: Visual metaphor for client success and trusted relationships

