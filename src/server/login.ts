import {type ApiResponse, BASE_URL} from "./index.ts";

export const login = async ({telegramID, password, token}: {
  telegramID: string;
  password: string;
  token: string
}): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({telegramID, password, token}),
    });
    return {ok: response.ok, json: () => response.json(), status: response.status};
  } catch (error) {
    console.error('Error in login request:', error);
    throw error;
  }
}