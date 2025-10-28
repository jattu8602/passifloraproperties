# Contributing to Passiflora Properties

Thanks for your interest in contributing! This guide will help you get set up and submit high‑quality changes.

## Code of Conduct

Be respectful and inclusive. By participating, you agree to uphold a positive, harassment‑free experience for everyone.

## How Can I Contribute?

- Report bugs and request features via GitHub Issues
- Pick an issue (comment to get assigned)
- Improve docs, tests, accessibility, or performance

## Local Development

1. Fork and clone the repo
2. Install deps: `pnpm install`
3. Create `.env.local` (see README)
4. Prepare DB:
   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```
5. Run the app: `pnpm dev`

## Branching Strategy

- Branch from `main`: `feat/<short-name>` or `fix/<short-name>`
- Keep changes focused and small where possible

## Commit Messages (Conventional Commits)

- `feat: add sticky search hysteresis`
- `fix: prevent success modal on refresh`
- `docs: add initialization guide`
- `refactor: simplify header layout`

## Code Style

- TypeScript, React 18, Next.js 16 (App Router)
- Prefer readable, explicit code and early returns
- Include only non‑obvious comments
- Ensure no linter errors: `pnpm lint`

## Testing Checklist

- Run locally and validate core flows:
  - Google login
  - Email magic link delivery + sign‑in
  - Sticky search behavior on scroll and reload
  - Mobile menu animation
- Verify no regressions on desktop and mobile

## Pull Request Process

1. Update README/docs if your change affects usage
2. Link the PR to an issue when applicable
3. Request review; address feedback promptly
4. Squash/merge once approved and checks pass

## Security

If you discover a security issue, report it privately to the maintainers. Do not open a public issue.

## License

By contributing, you agree your contributions are licensed under the project’s MIT license.
