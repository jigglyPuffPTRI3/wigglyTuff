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

export default function PostInterview() {
  const router = useRouter();
  const [jobType, setJobType] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/addReview', { company, jobTitle, jobType})
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
        <Languages />
        <Location />
        <div className="flex">
          <h1 className="flex items-center w-1/6 text-3xl">Job Details:</h1>
          <div className="flex items-center m-auto">
            <Company company={company} setCompany={setCompany} />
            <JobTitle jobTitle={jobTitle} setJobTitle={setJobTitle} />
            <Salary />
          </div>
        </div>
        <div className="flex items-center">
        
        <div className="flex flex-col w-1/4">
        <h1 className="text-3xl">Categories:</h1>
        <p className="text-sm italic">
          Click the dropdowns to rate on a scale from 0 - 5.
        </p>
      </div>
          <Categories />
          <Feedback />
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
