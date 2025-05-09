'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="text-center max-w-md w-full">
        <h1 className="mb-4 text-6xl sm:text-7xl font-bold text-tw-heading">404</h1>
        <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-tw-heading">Page Not Found</h2>
        <p className="mb-6 text-base sm:text-lg text-tw-body">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm sm:text-base transition-all duration-300 border rounded-xl text-tw-white bg-tw-primary"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
