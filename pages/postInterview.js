import Company from '../components/postInterview/company';
import JobTitle from '../components/postInterview/jobtitle';
import JobType from '../components/postInterview/jobtype';
import Languages from '../components/postInterview/languages';
import Location from '../components/postInterview/location';
import Salary from '../components/postInterview/salaryRange';

export default function PostInterview() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-2/3 px-5 py-2 bg-gray-300 divide-y divide-gray-500 rounded-lg">
        <JobType />
        <Languages />
        <Location />
        <div className="flex">
          <h1 className="flex items-center w-1/6 text-3xl">Job Details:</h1>
          <div className="flex items-center m-auto">
            <Company />
            <JobTitle />
            <Salary/>
          </div>
        </div>
	  
      </div>
    </div>
  );
}
