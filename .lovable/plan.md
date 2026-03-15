

# Remove Duplicate Contact Link in Header

The desktop nav has both a "Contact" link and a "Get in Touch" button — both point to `#contact`. That's redundant.

**Fix:** Remove "Contact" from the `navItems` array, keeping only the "Get in Touch" button as the single CTA. Same for the mobile menu.

| File | Change |
|------|--------|
| `src/components/Header.tsx` | Remove `{ name: 'Contact', href: '#contact' }` from `navItems`, leaving only `Services` |

