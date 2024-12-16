import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoRes, userRes] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}