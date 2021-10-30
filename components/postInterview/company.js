import { ExclamationCircleIcon } from '@heroicons/react/solid';
export default function Company() {
  return (
    <div className="ml-10 mr-10">
      <label
        htmlFor="email"
        className="text-sm font-medium text-gray-700 center"
      >
        Company Name
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="email"
          name="company"
          id="company"
          className="block w-full pr-10 text-red-900 placeholder-red-300 border-red-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          placeholder="Type in the company here."
          aria-invalid="true"
          aria-describedby="email-error"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ExclamationCircleIcon
            className="w-5 h-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        You must put in a company.
      </p>
    </div>
  );
}
