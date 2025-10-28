# Chapter 5: Advanced Types

## Discriminated Unions

```ts
type Success = { kind: 'ok'; data: string }
type Failure = { kind: 'err'; error: Error }

type Result = Success | Failure

function handle(r: Result) {
  if (r.kind === 'ok') return r.data
  return r.error.message
}
```

## keyof & Indexed Access

```ts
type User = { id: string; email: string; name?: string }

type Keys = keyof User // 'id' | 'email' | 'name'

type EmailType = User['email'] // string
```

## Mapped Types

```ts
type Optional<T> = { [K in keyof T]?: T[K] }
```
