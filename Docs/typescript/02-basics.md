# Chapter 2: Basics

## Primitives

```ts
let count: number = 0
let name: string = 'Passiflora'
let active: boolean = true
let nothing: null = null
let maybe: undefined = undefined
```

## Arrays & Tuples

```ts
const ids: number[] = [1, 2, 3]
const pair: [string, number] = ['x', 10]
```

## Objects & Functions

```ts
type User = { id: string; email: string; name?: string }

function greet(u: User): string {
  return `Hello ${u.name ?? 'friend'}`
}
```

## Union Types & Narrowing

```ts
function toArray(x: string | string[]) {
  if (typeof x === 'string') return [x] // narrowing
  return x
}
```
