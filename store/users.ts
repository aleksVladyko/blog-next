import { atom } from 'nanostores'
 export type User = {
    email: string,
    password: string,
}
export const $users = atom<User[]>([])

export function addUser(user: User) {
  $users.set([...$users.get(), user]);
}