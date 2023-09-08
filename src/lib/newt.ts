import { createClient } from 'newt-client-js';
import fetchAdapter from '@vespaiach/axios-fetch-adapter'

export interface Product {
  _id: string
  categoryName: string
}

export const client = createClient({
  spaceUid: import.meta.env.SPACE_UID,
  token: import.meta.env.API_TOKEN,
  apiType: 'api',
  adapter: fetchAdapter
});