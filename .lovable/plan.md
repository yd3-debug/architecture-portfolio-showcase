
# Reposition: Small Businesses & Independent Founders

New voice: warm, human, confident. Audience = independent founders and small teams (1–10 people). Tagline: **"From hidden to found."** Remove every "enterprise", "6-figure", "12+ businesses", "£5k–£20k" and "Director-level" claim. Keep the selective, partner-led tone.

## Voice rules (applied everywhere)

- "Enterprise clients / enterprise buyers" → "the right clients" / "the clients you actually want"
- "6-figure contracts" / "£15k–£50k" / "12+ businesses" → removed (no numeric claims)
- "Established service businesses" → "Independent founders and small teams"
- "Director of Operations & Growth" style language → softened to "operations and growth lead"
- "Business architecture" stays as a concept but is described as *practical systems*, not enterprise infrastructure
- Confident, not corporate. Avoid jargon ("commercial infrastructure", "go-to-market", "enterprise-grade")

## Files to rewrite

| File | What changes |
|------|--------------|
| `src/components/Hero.tsx` | Eyebrow: "Web design & growth for small businesses". H1: **"From hidden / to found."** Subhead: speaks to founders/small teams. Markers row → "Approach: Selective · Method: Built around you · Markets: UK · EU · US" |
| `src/components/TrustStrip.tsx` | Reframe 3 pillars: selective, real care, built around your business (not "enterprise"). |
| `src/components/AboutYekta.tsx` | Story: small businesses with great work but no online presence. Drop "enterprise buyers"; talk about "the clients searching for what you do". 3 side cards stay structurally but rephrased for small-team accountability. |
| `src/components/PainPoints.tsx` | Keep 3-card structure. Rewrites: 01 Stuck on referrals → no enterprise mention. 02 Invisible online → unchanged in spirit. 03 No path to grow → drop "bigger clients / larger contracts" wording, just "grow without losing what makes you you". |
| `src/components/ServicesHero.tsx` | Header: "Three ways I help small businesses grow". Service 01 Business Architecture → "Practical systems for how your business actually runs". Service 02 Web Design → drop "high-value visitors". Service 03 Growth Strategy → drop "ideal enterprise buyer". Remove the result-stat boxes' enterprise framing; keep the qualitative wins (+65% bookings, brand & web, etc.). |
| `src/components/CaseStudy.tsx` | Keep VandaVee but reframe intro: "Proof I can build serious systems for any size of business — including a luxury brand operating internationally." Drop "hidden gem" framing. NFC/LOA section stays. |
| `src/components/Testimonials.tsx` | Header stays. Trust line below — replace "50% refund guarantee" with a softer line: "Selective by design — I only take on work I'm confident I can deliver." (Keeps positioning, drops corporate guarantee.) |
| `src/components/FAQ.tsx` | Rewrite all 8 Q&As: drop "enterprise market", "6-figure", "Director-level". Replace with small-business framing — focus on websites, online visibility, growth without enterprise pretence. |
| `src/components/Contact.tsx` | "Tailored growth plan" stays. Right card: replace "Enterprise Visibility Playbook" → **"The Small Business Visibility Playbook"** with 3 bullets rewritten for small-biz pain (positioning mistakes, website checklist, pricing your work). Cost-of-waiting line: drop "£15k–£50k enterprise contract"; replace with qualitative line about missed opportunities. Spot-remaining badge stays. |
| `src/components/Footer.tsx` | Tagline under logo: rewrite, drop "12+ businesses. 6-figure contracts." |
| `src/components/PlaybookDownloadForm.tsx` | Modal title/description: "Enterprise Visibility Playbook" → "Small Business Visibility Playbook". Bullets rewritten. |
| `src/components/SEOHead.tsx` | Default title/description rewritten for small-business audience. `knowsAbout` array updated (remove "Enterprise Client Acquisition"). |
| `src/pages/Index.tsx` | `SEOHead` title/description props rewritten. |
| `index.html` | Full SEO/meta overhaul: `<title>`, meta description, OG title/description, Twitter title/description, keywords meta, `ai-content-declaration`, Dublin Core, ProfessionalService JSON-LD (description, slogan, serviceType, hasOfferCatalog → remove £ price ranges and enterprise wording), FAQPage JSON-LD (all 8 answers rewritten), AggregateRating review bodies (drop "enterprise"). |
| `public/llms.txt` | Full rewrite for AI crawlers: small-business positioning, drop pricing/£ ranges, drop "12+ / 6-figure", reframe services and FAQs. |

## New core taglines

- **H1**: "From hidden / to found."
- **Subhead**: "Websites, positioning, and growth systems built for independent founders and small teams — by someone who actually cares how your business runs."
- **Meta title**: "YektaD — Websites & Growth Systems for Small Businesses | Yekta Dastranj"
- **Meta description**: "From hidden to found. I help independent founders and small teams (1–10 people) build the websites, positioning, and growth systems that get them seen by the right clients. Selective by design — book a free Discovery Session."

## Memory update

Update `mem://index.md` Core: replace the "Diamond in the Rough → Enterprise Clients in 90 Days" line with the new "From hidden to found" positioning for small businesses. Update `mem://brand/guidelines` and `mem://features/landing-page`, `mem://features/faq`, `mem://features/case-study` (VandaVee = "proof of range"), `mem://features/seo-metadata` accordingly.

## Out of scope

- No layout, component, or design-token changes.
- No new pages or routes.
- Numeric metric badges on testimonials ("+65% bookings", "Brand & Web") stay — they're real client wins, not enterprise claims.
- VandaVee case study structure and NFC/LOA section stay intact — only the intro paragraph is reframed.
- Pricing tiers stay removed; no replacement small-business pricing is added (per your answer).
