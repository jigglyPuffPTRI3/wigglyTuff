import { getSession } from 'next-auth/client';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log(req.body)
  try {
    const user = await prisma.user.findUnique({
      where: {
        image: session?.user?.image,
      },
    })
    const newReview = await prisma.review.create({
      data: {
        ...req.body,
        authorId: user.id,
      },
    });
    res.status(200).json({ newReview });
  } catch (e) {
    console.log('error', e);
  }
}
