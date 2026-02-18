
# Add Company Registration Details to the Footer

## Why This Matters

Under the Companies Act 2006, UK limited companies are legally required to display their registered company name, company number, and country of registration on their website. Beyond compliance, this is a powerful trust signal for enterprise clients — they can verify Y & A Design Ltd on Companies House instantly.

## What's Changing

Two places in `src/components/Footer.tsx`:

### 1. Company description block (under the logo)
Add a small registration line beneath the existing description paragraph:

```
Y & A Design Ltd — Registered in England & Wales
Company No. 08931578
```

This sits naturally under the tagline, subtle but visible.

### 2. Bottom bar (copyright strip)
Extend the copyright line to include the legal entity name:

**Before:**
```
© 2026 YektaD. All rights reserved.
```

**After:**
```
© 2026 YektaD. All rights reserved. | Y & A Design Ltd — Co. No. 08931578 — Registered in England & Wales
```

This is where most UK companies place their legal registration notice — it's where visitors expect to find it, and it keeps the main footer clean.

## File

| File | Change |
|------|--------|
| `src/components/Footer.tsx` | Add company registration details under logo description and in the bottom copyright bar |

## Styling

- Registration text will use `text-white/50` (slightly more muted than body text) so it doesn't compete visually but is clearly legible
- Small `text-xs` size — professional and unobtrusive
- No layout changes needed — fits within existing structure
