'use client';

export default function Dashboard(user: any) {
    return (
      <main className="min-h-screen items-center justify-start p-5">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex justify-center">
          <p className="rounded border p-2 text-white backdrop-blur-sm border-purple-600 backdrop-brightness-150 motion-safe:hover:animate-pulse">Welcome to UnknownVPS 🚀</p>
        </div>
        <div className="flex justify-center border p-4 my-2 rounded-lg backdrop-blur-lg border-blue-600 backdrop-brightness-125">
          <p className="text-white text-lg font-mono">Welcome {user?.name}</p>
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex justify-center">
          <a className="rounded border p-2 text-white backdrop-blur-sm border-purple-600 backdrop-brightness-150 motion-safe:hover:animate-pulse" href="/api/auth/signout">Logout</a>
        </div>
      </main>
    );
  }
  