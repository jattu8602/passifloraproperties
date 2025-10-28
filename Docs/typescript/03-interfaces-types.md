# Chapter 3: Interfaces vs Type Aliases

## Interfaces

```ts
interface Person {
  id: string
  name: string
}

interface Employee extends Person {
  role: 'dev' | 'design' | 'pm'
}
```

## Type Aliases

```ts
type Coordinates = { x: number; y: number }
type WithMeta<T> = T & { createdAt: Date }
```

## Intersections & Unions

```ts
type A = { a: number }
type B = { b: number }

type AB = A & B // intersection
```

Use interfaces for object shapes that may be extended; use type aliases for unions, utility compositions, and generics.
