import { createClient } from 'newt-client-js';

export interface Product {
  categoryName: string
}

export const client = createClient({
  spaceUid: import.meta.env.SPACE_UID,
  token: import.meta.env.API_TOKEN,
  apiType: 'api'
});