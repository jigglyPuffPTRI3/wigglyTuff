import prisma from '../../lib/prisma';

export const getServerSideProps = async ({ params }) => {
  const review = await prisma.review.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true },
      }
    },
  });
  return { props: { review } };
};

export default function Review({ review }) {
  console.log('review', review)
  return <h1>Review</h1>
}