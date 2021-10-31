import { useSelector } from 'react-redux';
import InterviewDifficulty from '../components/positionReview/interviewDifficulty';

export default function PositionReview() {

    const { selectedReview } = useSelector(state => state.reviews);
    console.log('selected review', selectedReview);

    return (
        <div className='flex flex-col m-3'>
            <h1 className='p-2 text-5xl'>
                Company Name: {selectedReview.company}
            </h1>
            <p className='p-2 text-4xl'>
                Position: {selectedReview.jobTitle}
            </p>
            <p className='p-2 text-2xl'>
                Interview Description: This is where the review witll be. maybe it will be cut
                off to encourage people to click on the see full review button at the bottom but then it wont and it will be a very very long review maybe, or it might be really short who knows
            </p>
            <p className='p-2 text-2xl'> Salary Range: {`${selectedReview.salaryRangeLow} - ${selectedReview.salaryRangeHigh} `}</p>
            <p className='p-2 text-2xl'> Location: {selectedReview.officePolicy}  </p>
            <p className='p-2 text-2xl'> Languages: {selectedReview.languages}</p>
            <InterviewDifficulty
                takeHome={selectedReview.takeHome}
                liveCoding={selectedReview.liveCoding}
                systemDesign={selectedReview.systemDesign}
            />

        </div >
    );
}