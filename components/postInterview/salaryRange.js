export default function Salary({setSalaryRangeLow, setSalaryRangeHigh}) {
  return (
    <div className="flex items-center mt-2 mb-2">
      <h1 className="text-3xl">Salary Range:</h1>
      <form className="px-4">
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
          onChange={(e)=>setSalaryRangeLow(parseInt(e.target.value))}
        >
          <option value={70}>70k</option>
          <option value={80}>80k</option>
          <option value={90}>90k</option>
          <option value={100}>100k</option>
          <option value={110}>110k</option>
          <option value={120}>120k</option>
        </select>
      </form>
      <form>
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
          onChange={(e)=>setSalaryRangeHigh(parseInt(e.target.value))}
        >
          <option value={150}>150k</option>
          <option value={175}>175k</option>
          <option value={200}>2000k</option>
          <option value={225}>225k</option>
          <option value={250}>250k</option>
          <option value={275}>275k</option>
        </select>
      </form>
    </div>
  );
}
