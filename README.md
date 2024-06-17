# create-svelte

Everything you need to build a Svelte project, powered
by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a
development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target
> environment.

# Welcome to Whale, a server and web application designed to interact with Telegram users via a bot.

#### This README provides instructions on setting up and running both the server and web app components.

## Installation

Before you begin, ensure you have Node.js and npm installed on your machine.

### For Server Project

#### 1. Clone the repository:

```bash
git clone <repository-url>
cd whale-server
```

#### 2. Install dependencies:

```bash
npm install
```

### For Web Project

#### 1. Clone the repository:

```bash
git clone <repository-url>
cd web
```

#### 2. Install dependencies:

```bash
npm install
```


### 3. Create or edit ngrok.yml under your project directory or use existing one in project. Example:

```bash
version: "2"
authtoken: YOUR_NGROK_AUTH_TOKEN
tunnels:
  web_app:
    addr: 5173
    proto: http
  server:
    addr: 3000
    proto: http
```

### 4. Run
```bash
ngrok start --config /path/to/your/ngrok.yml --all
```

Note down the forwarded URLs provided by ngrok, such as:

https://b526-82-131-110-53.ngrok-free.app -> http://localhost:5173
https://dffb-82-131-110-53.ngrok-free.app -> http://localhost:3000

Configuration
After ngrok is running, update the following configurations in your project:

Server Configuration
1. Update the URL in whale-server/src/service/start.ts:

url: `https://b526-82-131-110-53.ngrok-free.app/login` // TODO: REPLACE THIS!


2. Telegram Token: Replace the token in whale-server/index.ts:

const TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN_HERE'; // TODO: REPLACE THIS!
Web Configuration
Base URL: Update the base URL in whale-web/src/server/index.ts:
typescript
Copy code
export const BASE_URL = 'https://dffb-82-131-110-53.ngrok-free.app'; // TODO: REPLACE THIS!
Running the Server Locally
To start the server locally:

bash
Copy code
npm start
Running the Web App Locally
To run the web app in development mode:

bash
Copy code
npm run dev
Commands for Telegram App
Main Commands
/start: Initialize the bot.
/adminhello telegramId message: Example: /adminhello 976166394 hello from admin
Admin Commands
/setAdmin telegramId boolean: Example:
/setAdmin 976166394 1: Set user 976166394 as admin.
/setAdmin 976166394 0: Set user 976166394 as not admin.