export default function Salary() {
  return (
    <div className="flex items-center">
      <h1 className="text-3xl">Salary Range:</h1>
      <div className="px-4">
        <label
          htmlFor="salarybase"
          className="block text-sm font-medium text-gray-700"
        >
          Minimum Range
        </label>
        <select
          id="salarybase"
          name="salarybase"
          className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue="70k"
        >
          <option>70k</option>
          <option>80k</option>
          <option>90k</option>
          <option>100k</option>
          <option>110k</option>
          <option>120k</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="salarymax"
          className="block text-sm font-medium text-gray-700"
        >
          Maximum Range
        </label>
        <select
          id="salarymax"
          name="salarymax"
          className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue="150k"
        >
          <option>150k</option>
          <option>175k</option>
          <option>2000k</option>
          <option>225k</option>
          <option>250k</option>
          <option>275k</option>
        </select>
      </div>
    </div>
  );
}
