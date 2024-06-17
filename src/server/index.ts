export const BASE_URL = `${YOUR_URL}`; // TODO: REPLACE 'YOUR_URL' WITH YOU LINK 2.

export interface ApiResponse {
  ok: boolean;
  json: () => Promise<any>;
  status: any,
}