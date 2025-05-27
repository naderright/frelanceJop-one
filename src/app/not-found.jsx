
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
      >
        Go back home
      </Link>
    </main>
  );
}
