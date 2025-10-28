# Chapter 4: Generics

## Generic Functions

```ts
function wrap<T>(value: T): { value: T } {
  return { value }
}
```

## Constraints

```ts
function hasId<T extends { id: string }>(obj: T) {
  return !!obj.id
}
```

## Defaults

```ts
type ApiResponse<T = unknown> = { ok: boolean; data: T }
```

## Utility Patterns

```ts
type Values<T> = T[keyof T]

type User = { id: string; email: string }
type UserValues = Values<User> // string
```
