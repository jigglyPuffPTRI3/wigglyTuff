import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Categories from '../components/postInterview/categories';
import Company from '../components/postInterview/company';
import JobTitle from '../components/postInterview/jobtitle';
import JobType from '../components/postInterview/jobtype';
import Languages from '../components/postInterview/languages';
import Location from '../components/postInterview/location';
import Salary from '../components/postInterview/salaryRange';
import Feedback from '../components/postInterview/feedback';
import Hired from '../components/postInterview/hired';
import Rounds from '../components/postInterview/roundsofinterviews';
import TechnicalDifficulty from '../components/postInterview/technicalDifficulty'

export default function PostInterview() {
  const router = useRouter();
  const [officePolicy, setOfficePolicy] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [content, setContent] = useState('');
  const [algorithms, setAlgorithms] = useState(0)
  const [takeHome, setTakeHome] = useState(0)
  const [systemDesign, setSystemDesign] = useState(0)
  const [liveCoding, setLiveCoding] = useState(0)
  const [jobType, setJobType] = useState('')
  const [languages, setLanguages] = useState([])
  const [salaryRangeLow, setSalaryRangeLow] = useState(70)
  const [salaryRangeHigh, setSalaryRangeHigh] = useState(150)
  const [hired, setHired] = useState('pending')
  const [roundsOfInterviews, setRoundsOfInterviews]=useState(1)
  const [technicalDifficulty, setTechnicalDifficulty] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/addReview', { jobType, officePolicy, company, jobTitle, salaryRangeLow, salaryRangeHigh, content, algorithms, systemDesign, takeHome, liveCoding, languages, hired, roundsOfInterviews, technicalDifficulty })
      .then((newInterview) => {
        console.log('newInterview', newInterview);
        router.push('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col w-2/3 px-5 py-2 bg-gray-300 divide-y divide-gray-500 rounded-lg">
        <JobType setJobType={setJobType}/>
        <Languages setLanguages={setLanguages}/>
        <Location setOfficePolicy={setOfficePolicy}/>
        <div className="flex">
          <h1 className="flex items-center w-1/6 text-3xl">Job Details:</h1>
          <div className="flex items-center m-auto">
            <Company company={company} setCompany={setCompany} />
            <JobTitle setJobTitle={setJobTitle} />
            <Salary setSalaryRangeLow={setSalaryRangeLow} setSalaryRangeHigh={setSalaryRangeHigh}/>
          </div>
        </div>
        <div className="flex items-center">
        
        <div className="flex flex-col w-1/4">
        <h1 className="text-3xl">Categories:</h1>
        <p className="text-sm italic">
          Click the dropdowns to rate on a scale from 0 - 5.
        </p>
      </div>
          <Categories algorithms={algorithms} setAlgorithms={setAlgorithms} takeHome={takeHome} setTakeHome={setTakeHome} systemDesign={systemDesign} setSystemDesign={setSystemDesign} liveCoding={liveCoding} setLiveCoding={setLiveCoding}/>
          <Feedback content={content} setContent={setContent}/>
          

        </div>
        
        
        <div className="flex mt-4">
        <h1 className="flex items-center w-1/4 text-3xl">Final Thoughts:</h1>
        <div className="flex w-full py-4 mt-2 justify-evenly">
            <div><Hired setHired={setHired}/></div>
            <div><Rounds setRoundsOfInterviews={setRoundsOfInterviews}/></div>
            <div><TechnicalDifficulty setTechnicalDifficulty={setTechnicalDifficulty}/></div>
          </div>
      </div>
      </div>
      
      <div>
        <button
          type="button"
          className="items-center px-4 py-2 mt-6 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm mt-inline-flex hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-5006"
          onClick={handleSubmit}
        >
          <a>Post Interview</a>
        </button>
      </div>
    </div>
  );
}
