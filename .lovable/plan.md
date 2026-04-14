

# Fix Broken Build — Reinstall Dependencies

## What Happened

When `three` was installed, the package manager (`bun`) failed to resolve a transitive dependency (`js-yaml`), which left `node_modules` in a broken state. That's why every single import fails — not just `three`.

## Fix

1. **Clean install dependencies** — Remove `node_modules` and lockfiles, then reinstall everything fresh
2. **Verify `three` is in `package.json`** — Confirm the dependency was actually added
3. **If `bun` continues to fail on `js-yaml`**, switch the install to `npm` which handles resolution differently

| Step | Command |
|------|---------|
| Clean | `rm -rf node_modules bun.lock bun.lockb` |
| Reinstall | `npm install` (or `bun install` if it resolves cleanly) |
| Verify build | `npx vite build --mode development` |

No code changes needed — this is purely a dependency resolution fix.

