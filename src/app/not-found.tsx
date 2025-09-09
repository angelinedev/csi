
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">The page you are looking for does not exist.</p>
      <Link href="/">
        <a className="text-primary hover:underline">Go back to the homepage</a>
      </Link>
    </div>
  );
}
