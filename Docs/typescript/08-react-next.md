# Chapter 8: React & Next.js

## Props & State

```tsx
type ButtonProps = { label: string; onClick?: () => void }
function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>
}
```

## Refs

```tsx
import { useRef } from 'react'
const inputRef = useRef<HTMLInputElement | null>(null)
```

## Hooks

```ts
function useToggle(initial = false) {
  const [on, set] = useState(initial)
  const toggle = () => set((v) => !v)
  return { on, toggle }
}
```

## App Router Patterns

- Typing server actions
- Inferring API types with zod
- Module path aliases (`@/*`)
