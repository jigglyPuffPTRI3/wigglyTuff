export default function Company({ company, setCompany }) {
  return (
    <div className="ml-10 mr-10">
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="email"
          name="company"
          id="company"
          className="block w-full pr-10 text-gray-900 placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          placeholder="Company name."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
    </div>
  );
}
