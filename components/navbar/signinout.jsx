import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

export default function SignInOut(){
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  const [session, loading] = useSession();

  if (loading) <div>Authenticating ...</div>

  return(
    <>
    {!session && (
        <button className='w-24 p-1 m-2 text-center text-white bg-gray-600 rounded-lg h-14 hover:bg-gray-300 hover:text-gray-600'>
            <Link href="/api/auth/signin">
                <a data-active={isActive('/signup')}>Log in</a>
            </Link>
        </button>
    )}
    {session && (
        <button 
          className='w-24 p-1 m-2 text-center text-white bg-gray-600 rounded-lg h-14 hover:bg-gray-300 hover:text-gray-600'
          onClick={() => signOut()}
        >
            <a>Log out</a>
        </button>
    )}
</>

  )
}