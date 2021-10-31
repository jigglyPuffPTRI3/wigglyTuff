import StarRatings from "react-star-ratings";

export default function InterviewDifficulty({ takeHome, liveCoding, systemDesign }) {
    return (
        <section className='flex items-center justify-between'>
            <p className='flex flex-col items-center m-3'>
                Take Home
                <StarRatings
                    rating={5}
                    starRatedColor='gold'
                    numberOfStars={takeHome}
                    starDimension='30px'
                />
            </p>
            <p className='flex flex-col items-center m-3'>
                Live Coding
                <StarRatings
                    rating={10}
                    starRatedColor='gold'
                    numberOfStars={liveCoding}
                    starDimension='30px'
                />
            </p>
            <p className='flex flex-col items-center m-3'>
                System Design
                <StarRatings
                    rating={5}
                    starRatedColor='gold'
                    numberOfStars={systemDesign}
                    starDimension='30px'
                />
            </p>
        </section>
    );
}