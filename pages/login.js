// Header.tsx
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, getSession, useSession } from 'next-auth/client';

export const getServerSideProps = async ({ req, res }) => {
    const session = await getSession({ req });
    if (!session) {
      res.statusCode = 403;
      return { props: { session: false } };
    }
    return { props: { session } };
};

export default function Login() {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  const [session, loading] = useSession();
  if (loading) {
    return <div>Authenticating ...</div>;
  }
  console.log('session', session);

    return (
        <>
            <p>Login page</p>
            <button 
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <Link href="/api/auth/signin">
                    <a data-active={isActive('/signup')}>Log in</a>
                </Link>
            </button>
            <button 
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => signOut()}
            >
                <a>Log out</a>
            </button>
        </>
    );
}