import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Matrix Basics',
  description: 'Matrix basics introduction and core operations.'
};

export default function Home() {
  redirect('/docs/what-is-a-matrix');
  return null;
}