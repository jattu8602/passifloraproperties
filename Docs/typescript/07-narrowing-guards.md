# Chapter 7: Narrowing & Type Guards

## typeof / instanceof

```ts
function log(x: unknown) {
  if (typeof x === 'string') console.log(x.toUpperCase())
}
```

## User-defined Type Predicate

```ts
type User = { id: string }
function isUser(x: any): x is User {
  return x && typeof x.id === 'string'
}
```

## Exhaustive Checks

```ts
function neverReached(x: never): never {
  throw new Error('unreachable')
}
```
