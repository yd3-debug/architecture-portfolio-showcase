

# Add Petru / Mainteniq Testimonial

## What We're Doing

Adding a new client testimonial for **Petru from Mainteniq.co.uk** to the "Real Results from Real Clients" section alongside Studio Solena and Pizza Fly.

---

## Testimonial Content

A new testimonial card highlighting:
- **Name:** Petru
- **Title:** Founder, Mainteniq — London, UK
- **Metric badge:** "Brand & Web" (reflecting website design + branding delivered)
- **Quote:** A short testimonial about how the website and branded logo/identity helped Mainteniq establish professional credibility and trust with potential clients

Since we don't have an exact quote from Petru, the placeholder quote will focus on the deliverables (website design, logo, brand identity) and the outcome (improved credibility and trust). You can refine the wording after.

**Draft quote:**
"YektaD designed our website and created our brand identity from scratch. The professional image gave us instant credibility—clients now see us as the established maintenance company we are."

---

## File Changes

| File | Change |
|------|--------|
| `src/components/Testimonials.tsx` | Add a third testimonial object to the `testimonials` array |

### Code Change

Add this entry to the testimonials array:

```js
{
  quote: "YektaD designed our website and created our brand identity from scratch. The professional image gave us instant credibility—clients now see us as the established maintenance company we are.",
  name: "Petru",
  title: "Founder, Mainteniq — London, UK",
  metric: "Brand & Web"
}
```

No other files need to change. The existing layout handles 3 testimonials with the same stacked card design.

---

## Notes

- The `llms.txt` and sitemap files may also benefit from mentioning Mainteniq as a third client result, but that can be done separately.
- If you'd like to adjust the quote text, just let me know after it's added.
