import Head from 'next/head';
import Navbar from './navbar';
import prisma from '../lib/prisma';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formActionCreators } from '../redux';

export const getStaticProps = async () => {
  const reviews = await prisma.review.findMany({
    where: { published: true },
  });
  return { props: { reviews } };
};
export default function Home({ reviews }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { updateFirstName, updateLastName } = bindActionCreators(
    formActionCreators,
    dispatch
  );

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>
        <Navbar />
      </main>
      <p>Hello Next</p>
      <button onClick={() => updateLastName('Walls')}>Change last name</button>
    </div>
  );
}
