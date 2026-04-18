

# Rename "Letter of Authorisation" → "Letter of Authentication"

The wording only appears in `src/components/CaseStudy.tsx` (the proprietary innovation section). Three text changes needed:

| Line | Current | New |
|------|---------|-----|
| 153 (heading) | `NFC-Authenticated Letter of Authorisation System` | `NFC & LOA — Letter of Authentication System` |
| 157 (body) | `physical Letter of Authorisation` | `physical Letter of Authentication (LOA)` |
| 135 (comment) | `NFC + LOA` | unchanged (already correct) |

The comment on line 135 (`NFC + LOA`) is already aligned with the new naming, so no change there. The rest of the section (NFC chip, backend database, flow diagram steps) stays as is — the user only asked about the LOA wording.

| File | Change |
|------|--------|
| `src/components/CaseStudy.tsx` | Update heading (line 153) and body strong tag (line 157) |

