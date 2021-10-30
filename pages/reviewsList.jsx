import { useSelector } from 'react-redux';
import ReviewCard from '../components/reviewsList/reviewCard';

export default function ReviewsList() {
    const { reviews } = useSelector((state) => state.reviews)

    return (
        <section className='flex flex-row flex-wrap justify-center my-10'>
            {reviews.map((review) => <ReviewCard review={review} key={review.id} />)}
        </section>
    );
}