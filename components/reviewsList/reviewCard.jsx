import Link from 'next/link';
import StarRatings from "react-star-ratings";

export default function ReviewCard() {
    return (
        <div className='flex flex-col items-center justify-center m-6 border-2 border-gray-300 shadow-lg h-96 w-72'>
            <h2 className='m-3 text-2xl font-bold'>Company Name</h2>
            <p className='mx-4 my-3 text-lg text-center'>This is where the review witll be. maybe it will be cut
                off to encourage people to click on the see full review button at the bottom.....
            </p>
            <StarRatings
                rating={5}
                starRatedColor='gold'
                numberOfStars={4}
                starDimension='30px'
            />
            <Link href='/positionReview'>
                <button className='p-2 my-5 text-lg font-medium text-white bg-gray-600 border-2 border-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-600'>
                    Full Review
                </button>
            </Link>
        </div>
    );
}