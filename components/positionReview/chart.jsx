import { Radar } from 'react-chartjs-2';

export default function Chart({ algos, liveCoding, takeHome, systemDesign }) {

    const data = {
        labels: ['Algos', 'Live Coding', 'Take Home', 'System Design'],
        datasets: [{
            data: [algos, liveCoding, takeHome, systemDesign]
        }]
    }

    return (
        <Radar data={data} />
    )
}