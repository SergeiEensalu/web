<script>
  import {userStore} from '../stores/user.ts';
  import {v4 as uuidv4} from 'uuid';
  import {goto} from "$app/navigation";
  import {register} from '../server/register.ts';

  let telegramID = '';
  let password = '';
  let registerError = '';

  // TODO for future development: Add data validation.

  const signUp = async () => {
    registerError = ''; // reset error message
    try {
      const token = uuidv4();
      const response = await register({telegramID, password, token});

      if (response.ok) {
        alert(`Your authorization token: ${token}. Please save it somewhere safe.`);

        return goto('/login');
      }

      const errorData = await response.json();

      if (response.status === 403) {
        registerError = (`Registration failed: user with telegram id ${telegramID} already exist!`);
      } else {
        registerError = ('Registration failed: ' + errorData.message);
      }
    } catch (error) {
      registerError = ('An error occurred while registering!');
    }
  };
</script>

<form on:submit|preventDefault={signUp}>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            <h1 class="font-bold text-center text-2xl mb-5">Sign up</h1>
            <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div class="px-5 py-7">
                    {#if registerError}
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                            <span class="font-medium">Oops!</span>
                            <span>{registerError}</span>
                        </p>
                    {/if}
                    <div class="font-semibold text-sm text-gray-600 pb-1 block">Telegram ID</div>
                    <input type="text" bind:value={telegramID} required
                           class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                    <div class="font-semibold text-sm text-gray-600 pb-1 block">Password</div>
                    <input type="password" bind:value={password} required
                           class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                    <button type="submit"
                            class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span class="inline-block mr-2">Sign Up</span>
                    </button>
                    <div class="text-center mt-5">
                        <a href="/login"
                           class="transition duration-200 bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 focus:shadow-sm focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 text-gray-700 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span class="inline-block mr-2">Have an account? Login</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
