import axios from 'axios';
import { IPSTACK_API_KEY, IPSTACK_URL } from '../constants';
import { Region } from 'types';

export async function getRegionFromIP(
  ipAddress: string
): Promise<Region | null> {
  console.log(
    'URL',
    `${IPSTACK_URL}${ipAddress}?access_key=${IPSTACK_API_KEY}`
  );
  try {
    const response = await axios.get(
      `${IPSTACK_URL}${ipAddress}?access_key=${IPSTACK_API_KEY}`
    );
    const region = response.data.continent_name;
    return region || null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching region from IP:', error.message);
    } else {
      console.error('Non-Axios error occurred:', error);
    }
    return null;
  }
}
