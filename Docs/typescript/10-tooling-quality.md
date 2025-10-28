# Chapter 10: Tooling & Quality

## Strict Mode

Enable strictness for best DX and safety.

```json
{
  "compilerOptions": { "strict": true }
}
```

## ESLint

```bash
pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

`.eslintrc` minimal:

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"]
}
```

## Path Aliases

```json
{
  "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["./*"] } }
}
```

## Tips

- Prefer explicit types on exported APIs; let local inference work inside bodies
- Avoid `any`; use unknown + narrowing
- Leverage utility types instead of duplicating shapes
