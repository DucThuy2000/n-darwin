import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
        <Button asChild className="mt-6">
          <Link href="/">Back To Home</Link>
        </Button>
      </div>
    </div>
  );
}
