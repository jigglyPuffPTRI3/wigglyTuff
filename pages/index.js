import Head from 'next/head';
import prisma from '../lib/prisma';
import Image from 'next/image';
import { useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux'; 
// import { authActionCreators } from '../redux';

export const getStaticProps = async () => {
  const reviews = await prisma.review.findMany();
  return { props: { reviews } };
};

export default function Home() {

  const {auth} = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const {updateFirstName, updateLastName} = bindActionCreators(authActionCreators, dispatch);
  console.log(auth.isLoggedIn);

  return (
    <div className='flex'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main className='flex flex-col items-center justify-center w-3/6 h-screen bg-gray-100'>
        <h1 className='p-3 my-6 text-5xl text-center'>Welcome To Interview Prep</h1>
        {auth.isLoggedIn ? <button>Search Jobs</button> : 
        <button className='w-3/12 h-20 text-2xl text-white bg-gray-600 rounded-md hover:bg-gray-400'>Login</button>}
      </main> 
      <div className='relative w-1/2 h-screen'>
          <Image 
            src='/womanCoding.jpg'
            alt='Woman Coding'
            layout='fill'
          />
      </div>
    </div>
  );
}
