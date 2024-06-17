<script lang="ts">
  import {userStore} from '../stores/user';
  import {get} from 'svelte/store';
  import {goto} from "$app/navigation";
  import {onMount} from "svelte";
  import type {User} from "../routes/interface/User.ts";

  let user: User;
  onMount(() => {
    user = get(userStore);
    console.log("user", user);

    if (!user.isLoggedIn) {
      goto('/login');
    }
  });

  const handleLogout = () => {
    userStore.logout();
    goto('/login');
  }
</script>

<div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 class="font-bold text-center text-2xl mb-5">Profile</h1>
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div class="px-5 py-7">
                <div class="font-semibold text-sm text-gray-600 pb-1 block">Telegram ID</div>
                <p class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-100">
                    {user?.telegramID}
                </p>
                <div class="font-semibold text-sm text-gray-600 pb-1 block">Password</div>
                <p class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-100">
                    {user?.password}
                </p>
                <div class="font-semibold text-sm text-gray-600 pb-1 block">Token</div>
                <p class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-100">
                    {user?.token}
                </p>
                <div class="font-semibold text-sm text-gray-600 pb-1 block">Created At</div>
                <p class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-100">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : null}
                </p>
            </div>
            <div class="px-5 py-7">
                <button on:click={handleLogout}
                        class="transition duration-200 bg-red-500 hover:bg-red-600 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span class="inline-block mr-2">Logout</span>
                </button>
            </div>
        </div>
    </div>
</div>

