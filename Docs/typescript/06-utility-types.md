# Chapter 6: Utility Types

Common helpers from lib.d.ts

```ts
type PartialUser = Partial<User>
type RequiredUser = Required<User>
type OnlyIdEmail = Pick<User, 'id' | 'email'>
type WithoutEmail = Omit<User, 'email'>
type Dict<T> = Record<string, T>

type Func = (x: number) => string
type Returns = ReturnType<Func> // string
```
