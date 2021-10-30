import prisma from '../../lib/prisma'

export default async function getCompanyReviews(req, res){
  try{
    const reviews = await prisma.review.findMany({
        where :{
            company: req.query.company}
    });
    res.json({reviews})
  }
  catch(error){
    res.status(404)
    console.log('error: ', error)
  }
}
