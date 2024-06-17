<script lang="ts">
  import {userStore} from '../stores/user.ts';
  import {goto} from "$app/navigation";
  import {login} from '../server/login.ts';
  import type {User} from "../routes/interface/User.ts";

  let telegramID = '';
  let password = '';
  let token: string | null = null;
  let loginError = '';

  const handleLogin = async () => {
    if (!token) {
      loginError = 'Invalid token';
      // return goto('/signup');

    } else {
      const response = await login({telegramID, password, token});
      if (response.ok) {
        const user: User = {
          telegramID,
          password,
          createdAt: new Date(),
          token,
          isLoggedIn: true
        };

        userStore.login(user);
        return goto('/profile');

      }

      loginError = 'Invalid Telegram ID or password';
    }
  };
</script>

<form on:submit|preventDefault={handleLogin}>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            <h1 class="font-bold text-center text-2xl mb-5">Login</h1>
            <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div class="px-5 py-7">
                    {#if loginError}
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                            <span class="font-medium">Oops!</span>
                            <span>{loginError}</span>
                        </p>
                    {/if}
                    <div class="font-semibold text-sm text-gray-600 pb-1 block">Telegram ID</div>
                    <input type="text" bind:value={telegramID} required
                           class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                    <div class="font-semibold text-sm text-gray-600 pb-1 block">Password</div>
                    <input type="password" bind:value={password} required
                           class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                    <div class="font-semibold text-sm text-gray-600 pb-1 block">Token</div>
                    <input type="password" bind:value={token} required
                           class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                    <button type="submit"
                            class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span class="inline-block mr-2">Login</span>
                    </button>
                    <div class="text-center mt-5">
                        <a href="/signup"
                           class="transition duration-200 bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 focus:shadow-sm focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 text-gray-700 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span class="inline-block mr-2">Don't have an account? Register</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
