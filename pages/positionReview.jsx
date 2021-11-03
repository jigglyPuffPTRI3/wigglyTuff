import { useSelector } from 'react-redux';
import Chart from '../components/positionReview/chart';

export default function PositionReview() {

    const { selectedReview } = useSelector(state => state.reviews);
    console.log('selected review', selectedReview);
    // const interviewLanguages=selectedReview.languages.map(el=>{
      
    // })
    const interviewLanguages=selectedReview.languages.join(', ')

    return (
        <div className='flex'>
            <div className='flex flex-col w-2/5 m-3 justify-evenly'>
                <h1 className='p-2 text-5xl'>
                    Company Name: {selectedReview.company}
                </h1>
                <p className='p-2 text-4xl'>
                    Position: {selectedReview.jobTitle}
                </p>
                <p className='p-2 text-2xl'>
                    Interview Description: {selectedReview.content ? selectedReview.content : 'No review'}
                </p>
                <p className='p-2 text-2xl'> Salary Range: {`$${selectedReview.salaryRangeLow}k - $${selectedReview.salaryRangeHigh}k `}</p>
                <p className='p-2 text-2xl'> Location: {selectedReview.officePolicy}  </p>
                <p className='p-2 text-2xl'> Languages: {interviewLanguages}</p>
            </div >
            <Chart
                algos={selectedReview.algorithms}
                liveCoding={selectedReview.liveCoding}
                takeHome={selectedReview.takeHome}
                systemDesign={selectedReview.systemDesign}
            />
        </div>
    );
};