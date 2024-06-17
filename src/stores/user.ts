import { writable } from 'svelte/store';
import type {User} from "../routes/interface/User";

const initialUser: User = {
  telegramID: null,
  password: null,
  createdAt: null,
  token: null,
  isLoggedIn: false
};

function createUserStore() {
  const { subscribe, set, update } = writable<User>(initialUser);

  return {
    subscribe,
    login: (user: User) => update(() => ({ ...user, isLoggedIn: true })),
    logout: () => set(initialUser)
  };
}

export const userStore = createUserStore();
