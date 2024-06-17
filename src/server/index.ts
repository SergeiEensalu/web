// export const BASE_URL = 'http://localhost:3000'; // Replace with your backend URL
export const BASE_URL = 'https://dffb-82-131-110-53.ngrok-free.app'; // TODO: REPLACE THIS!

export interface ApiResponse {
  ok: boolean;
  json: () => Promise<any>;
  status: any,
}