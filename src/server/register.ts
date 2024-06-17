import {type ApiResponse, BASE_URL} from "./index.ts";

export const register = async ({telegramID, password, token}: {
  telegramID: string;
  password: string;
  token: string
}): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        telegramID: telegramID,
        password: password,
        token: token,
      })
    });
    return {ok: response.ok, json: () => response.json(), status: response.status};
  } catch (error) {
    console.error('Error in register request:', error);
    throw error;
  }
}