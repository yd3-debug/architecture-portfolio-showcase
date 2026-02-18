
# Update Terms of Service

## What's Changing

Three things need to be updated in `src/pages/legal/TermsOfService.tsx`:

1. **Timestamps** — Update both "Effective Date" and "Last Updated" to today's date: **18 February 2026**
2. **Governing Law (Section 9)** — Replace the placeholder `[State/Country]` with **England and Wales**, and update the dispute resolution language to reflect UK law (disputes resolved through UK courts, not "binding arbitration" which is US-style language)
3. **Company identity (Section 10 / Contact)** — Add the company's full legal name and registration number to the contact block:
   - **Y & A Design Ltd**
   - **Company Number: 08931578**

## File

| File | Changes |
|------|---------|
| `src/pages/legal/TermsOfService.tsx` | Update dates, Section 9 governing law, Section 10 contact details |

## Exact Changes

**Line 49 — Dates:**
```
Effective Date: 18 February 2026 | Last Updated: 18 February 2026
```

**Lines 132–136 — Section 9 Governing Law:**
```
These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
```

**Lines 143–147 — Section 10 Contact block:**
```
Y & A Design Ltd (Company Number: 08931578)
Email: contact@yektad.com
Trading as: YektaD
```

No structural or layout changes — content updates only.
