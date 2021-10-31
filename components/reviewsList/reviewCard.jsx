import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reviewActionCreator } from '../../redux';

export default function ReviewCard({ review }) {

    const dispatch = useDispatch();
    const { selectedReviews } = bindActionCreators(reviewActionCreator, dispatch);

    return (
        <div className='flex flex-col items-center justify-center m-6 border-2 border-gray-300 shadow-lg h-96 w-72'>
            <h2 className='m-3 text-3xl font-bold'>{review.jobTitle}</h2>
            <p className='mx-4 my-3 text-xl text-center'>{review.company}</p>
            <p className='mx-4 my-3 text-lg text-center'>{review.content ? review.content : 'No Review available'}</p>
            <Link href='/positionReview'>
                <button
                    className='p-2 my-5 text-lg font-medium text-white bg-gray-600 border-2 border-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-600'
                    onClick={() => selectedReviews(review)}
                >
                    Full Review
                </button>
            </Link>
        </div>
    );
}