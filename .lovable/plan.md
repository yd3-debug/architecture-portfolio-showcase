

# Copy & UX Overhaul — Clarity, Flow, and Removing the Ticks

## The Core Problem

The copy across the site reads like a corporate whitepaper — words like "delineate," "imperatives," "meticulously," "unrivaled," "bespoke" create distance instead of connection. Your target audience (service business founders) wants to feel understood, not lectured. The language needs to sound like a confident peer, not a consultant's slide deck.

## Changes Overview

### 1. Remove the Checkboxes/Ticks (WhoWeHelp)

The interactive checklist in "Who We Help" — users tap checkboxes but nothing meaningful happens until 3 are checked, at which point a CTA appears. This is friction disguised as engagement. Replace with a simple, scannable list using bullet dots or dashes. Remove the `useState`, `toggleItem`, and `CheckSquare`/`Square` imports. The items become static text, and the CTA is always visible.

### 2. Rewrite Copy Across All Sections

Every section gets a plain-English pass. Here's the direction for each:

| Section | Current Tone | New Direction |
|---------|-------------|---------------|
| **PainPoints** | "inherently lacks predictability and caps your capacity for exponential expansion" | "Your pipeline depends on who happens to refer you. That's not a growth strategy — it's luck." |
| **PainPoints header** | "The Unseen Barriers to Enterprise Scale" | "What's Really Holding You Back" |
| **WhoWeHelp** | "Built Something Great But Still a Hidden Gem?" | Keep — this works |
| **ServicesHero** | "Strategic Imperatives" / "meticulously crafted to dismantle growth inhibitors" | "What We Actually Do" / clear outcome-focused descriptions |
| **Testimonials** | "Executive Endorsements" / "Validated impact from our enterprise partners" | "What Our Clients Say" / "Real results from real partnerships" |
| **CaseStudy** | Good structure, but some copy is heavy | Lighten the inline descriptions |
| **FAQ** | "Strategic Clarity for Enterprise Leaders" | "Common Questions" or "Frequently Asked Questions" |
| **Contact** | "Engage for Unrivaled Enterprise Dominance" / "forging deep, transformative partnerships" | "Let's Talk About Your Growth" / shorter, warmer intro |

### 3. Pain Point Names — More Direct

| Current | Proposed |
|---------|----------|
| "The Referral Dependency Trap" | "Stuck on Referrals" |
| "Digital Footprint Disparity" | "Invisible Online" |
| "Scaling Momentum Stalled" | "Ready to Scale, No Clear Path" |

### 4. TrustStrip Stat Accuracy

Change "50+" to "12+" to match the real number in your llms.txt. Inflated stats erode the trust they're meant to build.

## Files Changed

| File | What Changes |
|------|-------------|
| `src/components/WhoWeHelp.tsx` | Remove checkbox interactivity, convert to static list, always show CTA |
| `src/components/PainPoints.tsx` | Rewrite pain point names and solutions in plain English, simplify header |
| `src/components/ServicesHero.tsx` | Rewrite header, descriptions, and pain tags to be direct and clear |
| `src/components/Testimonials.tsx` | Simplify section title and subtitle |
| `src/components/FAQ.tsx` | Simplify header, lighten CTA copy |
| `src/components/Contact.tsx` | Rewrite headline and intro paragraph, tighten "next steps" copy |
| `src/components/TrustStrip.tsx` | Change "50+" to "12+" |

## What Stays the Same

- All layouts, animations, and visual design remain untouched
- The interactive pain points hover/tap mechanic stays (that works well)
- Case Study structure stays (it's strong)
- Hero copy stays (already revised and solid)

This is purely a copy clarity pass + removing the non-functional checkboxes.

