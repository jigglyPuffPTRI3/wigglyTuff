export default function Hired({setHired}){
	return(
    <div className="px-4">
      <label
        htmlFor="hired"
        className="block text-sm font-medium text-gray-700"
      >
        Hired
      </label>
      <select
        id="hired"
        name="hired"
        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        defaultValue=""
        onChange={(e)=>setHired(e.target.value)}
      >
        <option>Pending</option>
        <option>Hired</option>
        <option>Rejected</option>
      </select>
    </div>
	)
}

