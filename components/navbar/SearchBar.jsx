import { useState } from 'react';
import SearchSVG from "./searchSVG";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reviewActionCreator } from '../../redux';

export default function SearchBar() {
    const reviews = useSelector((state) => state.reviews)
    const dispatch = useDispatch()
    const { updateReviews } = bindActionCreators(reviewActionCreator, dispatch);

    const [formValue, setFormValue] = useState('');

    const getReviews = async (e) => {
        e.preventDefault();
        const reviews = await axios.get('/api/getCompanyReviews', {
            params: { company: formValue }
        })
        updateReviews(reviews.data.reviews)
        return;
    }

    const onEnterButton = (e) => {
        if (e.keyCode === 'Enter') return getReviews(e);
        return
    }

    return (
        <form className='flex items-center justify-center border-2 border-gray-600 rounded-lg'>
            <input
                className='h-12 px-5 text-lg rounded-l-lg outline-none w-96'
                placeholder='Search Companies'
                onChange={(e) => setFormValue(e.target.value)}
                value={formValue}
            />
            <button className='flex items-center justify-center w-16 h-12 bg-white rounded-r-lg' onClick={getReviews}>
                <SearchSVG />
            </button>
        </form>
    );
}