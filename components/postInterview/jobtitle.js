import { ExclamationCircleIcon } from '@heroicons/react/solid';
export default function JobTitle({ jobTitle, setJobTitle }) {
  return (
    <div className="ml-10 mr-10 ">
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="email"
          name="jobtitle"
          id="jobtitle"
          className="block w-full pr-10 text-gray-900 placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          placeholder="Job Title."
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">

        </div>
      </div>
    </div>
  );
}
