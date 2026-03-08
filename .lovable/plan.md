

# TrustStrip Quote Fix + Quick Wins

## 1. Fix the TrustStrip Testimonial Quote

The current quote — *"We landed our first £50k enterprise contract 3 weeks after launching our new positioning"* attributed to *"B2B Consultancy Founder"* — has two problems: the timeline is unrealistically fast, and the attribution is generic (no real person).

**Option A — Replace with a real client quote.** Use one of your actual testimonials (Sahar or Petru) with a shorter, punchier version. For example:

> "The 65% increase in appointments is a direct testament to their strategic foresight."
> — Sahar, Studio Solena

**Option B — Remove the quote entirely.** The stats above it (50+, 6-8 Weeks, 3-5x) already do the trust-building job. A fabricated quote undermines that. The TrustStrip stays clean and credible with just the three metrics.

I'd recommend **Option B** — removing the quote. The stats speak for themselves, and you have a dedicated Testimonials section further down with real quotes. Less is more here.

## 2. Other things I'd tighten up

These are observations for future consideration — not part of this change:

- **"50+ Businesses Transformed"** in the TrustStrip — is this accurate? The llms.txt says "12+ businesses." Inflated numbers erode trust if someone cross-references
- **The About/AboutHero sections** still reference old positioning (automations, SaaS, "50+ Automations Deployed") — they're not used on the Index page currently, but worth cleaning up if they appear elsewhere
- **"Estimated value of a single missed enterprise contract: £10k-50k"** in the Contact section — the range is very wide. Narrowing it (e.g., "£15k-£50k") would feel more precise and credible

## Plan for Now

| File | Change |
|------|--------|
| `src/components/TrustStrip.tsx` | Remove the testimonial quote block (lines 48-54), keeping only the three stat metrics |

Simple, clean change — about 7 lines removed.

