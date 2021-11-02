import { Radar } from 'react-chartjs-2';

export default function Chart({ algos, liveCoding, takeHome, systemDesign }) {

    const data = {
        labels: ['Algos', 'Live Coding', 'Take Home', 'System Design'],
        datasets: [{
            data: [algos, liveCoding, takeHome, systemDesign],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)'
        }]
    }

    const options = {
        plugins: {
            legend: false
        }
    }

    return (
        <div className='flex items-center justify-center w-3/5'>
            <div className='w-3/5 h-3/5'>
                <Radar
                    data={data}
                    options={options}
                    type='radar'
                />
            </div>
        </div>
    );
};