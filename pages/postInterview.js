import JobType from '../components/postInterview/jobtype';
import Languages from '../components/postInterview/languages';
import Location from '../components/postInterview/location';

export default function PostInterview() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-2/3 px-5 py-2 bg-red-300 divide-y divide-red-500 rounded-lg">
        <JobType />
        <Languages />
        <Location />
      </div>
    </div>
  );
}
