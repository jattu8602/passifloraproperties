# Chapter 1: Getting Started

## Why TypeScript?

- Type safety & autocompletion
- Refactoring confidence
- Better API contracts

## Install

```bash
pnpm add -D typescript @types/node @types/react @types/react-dom
pnpm tsc --init
```

In Next.js projects, tsconfig is scaffolded automatically when adding a `.ts`/`.tsx` file.

## tsconfig Highlights

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "moduleResolution": "Bundler",
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  }
}
```
