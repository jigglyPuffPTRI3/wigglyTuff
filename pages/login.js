// Header.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

export default function Login() {
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;
    const [session, loading] = useSession();

    if (loading) <div>Authenticating ...</div>

    return (
        <>
            <p>Login page</p>
            {!session && (
                <button 
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <Link href="/api/auth/signin">
                        <a data-active={isActive('/signup')}>Log in</a>
                    </Link>
                </button>
            )}
            {session && (
                <button 
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => signOut()}
                >
                    <a>Log out</a>
                </button>
            )}
        </>
    );
}