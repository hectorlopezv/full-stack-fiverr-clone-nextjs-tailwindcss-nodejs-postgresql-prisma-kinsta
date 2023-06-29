import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/config';


export default async function getSession() {
  return await getServerSession(authOptions);
}
