

# Replace Site Content with Enterprise-Focused Copy

## Overview

Update the existing page sections with the polished, enterprise-grade copy from the uploaded document. The document maps directly to current components, so no structural changes are needed -- just content updates.

---

## Section-by-Section Changes

### 1. Hero (`src/components/Hero.tsx`)

Update headline and supporting text to match the document's opening:

| Current | New |
|---------|-----|
| "From Word-of-Mouth to Enterprise Clients in 90 Days" | Keep as-is (already matches) |
| "We've helped 12+ service businesses land 6-figure contracts..." | "We've helped 12+ service businesses land 6-figure contracts -- without relying on referrals alone" (already matches) |

**No changes needed** -- the Hero already reflects this copy.

---

### 2. Pain Points (`src/components/PainPoints.tsx`)

Replace the 6 generic pain points with the 3 strategic enterprise barriers from the document:

- **The Referral Dependency Trap** -- Exceptional service fosters organic growth, but this model lacks predictability and caps expansion
- **Digital Footprint Disparity** -- Expertise not reflected online, ceding ground to competitors with superior digital visibility
- **Scaling Momentum Stalled** -- Effective offering but mechanisms to penetrate larger markets remain elusive

Update section header from "Sound Familiar?" to "The Hidden Gem Dilemma" with updated subtitle.

---

### 3. Services (`src/components/ServicesHero.tsx`)

Replace 4 services with the 3 from the document (removing Operations Management):

| Service | Description | Impact |
|---------|-------------|--------|
| **Business Architecture** | Building scalable growth ecosystems -- systems, digital presence, market positioning | "Client secured first enterprise contract within 6 weeks" |
| **Web Design & Development** | Enterprise-grade digital infrastructure optimized for conversion and trust | "65% surge in bookings for a London beauty studio" |
| **Growth Strategy** | Precision targeting -- who, where, what, how for enterprise client acquisition | "3x increase in qualified leads for a B2B consultancy" |

Update section header to "Strategic Imperatives: Engineered for Enterprise Acquisition".

---

### 4. Testimonials (`src/components/Testimonials.tsx`)

Update quotes for Sahar and Petru with the more polished versions from the document:

- **Sahar (Studio Solena):** "YektaD didn't merely revamp our online presence; they engineered a comprehensive, seamless client acquisition ecosystem. The 65% increase in appointments within three months is a direct testament to their strategic foresight and flawless execution."
- **Petru (Mainteniq):** "From foundational brand identity to advanced website functionality, YektaD delivered an integrated solution that instantaneously amplified our market perception. We are now unequivocally recognized as the established, credible maintenance partner we always aspired to be."

Carlo (Pizza Fly) stays unchanged since it's not in the document.

---

### 5. Contact (`src/components/Contact.tsx`)

Update copy to match the document's CTA section:

- Update scarcity badge: "Currently accepting 2 new strategic partners for Q1 2026"
- Update next steps to match document's 3-step process:
  1. "Confidential Strategic Brief (5 min)" 
  2. "30-min Executive Discovery Session"
  3. "Customized Growth Blueprint (within 48 hours)"
- Update playbook description bullets to match document
- Update "cost of waiting" text to: "Each month without a defined enterprise strategy represents a tangible loss... Estimated value of a single missed enterprise contract: 10k-50k"

---

### 6. AI Discovery (`public/llms.txt`)

Update relevant sections to reflect the new enterprise-focused copy (service descriptions, testimonial quotes).

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/PainPoints.tsx` | Replace 6 pain points with 3 enterprise barriers, update header |
| `src/components/ServicesHero.tsx` | Replace 4 services with 3 from document, update header |
| `src/components/Testimonials.tsx` | Update Sahar and Petru quotes |
| `src/components/Contact.tsx` | Update CTA copy, next steps, playbook bullets |
| `public/llms.txt` | Sync updated content |

**No changes needed:** Hero, CaseStudy, WhoWeHelp, FAQ, Footer

