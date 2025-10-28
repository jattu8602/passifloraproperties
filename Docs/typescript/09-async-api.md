# Chapter 9: Async & API Typing

## Promises

```ts
async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`/api/users/${id}`)
  if (!res.ok) throw new Error('Failed')
  return res.json()
}
```

## Axios Typing

```ts
import axios from 'axios'
const { data } = await axios.get<User>('/api/user')
```

## Validation with Zod

```ts
import { z } from 'zod'
const UserSchema = z.object({ id: z.string(), email: z.string().email() })

type User = z.infer<typeof UserSchema>
```
