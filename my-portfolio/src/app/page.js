import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/about');
  // The below will never be rendered due to the redirect
  return null;
}
