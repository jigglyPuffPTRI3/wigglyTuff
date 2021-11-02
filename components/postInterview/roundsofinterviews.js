export default function Rounds({setRoundsOfInterviews}){
	return(
    <div className="px-4">
      <label
        htmlFor="Rounds of Interviews"
        className="block text-sm font-medium text-gray-700"
      >
        Rounds of Interviews
      </label>
      <select
        id="hired"
        name="Rounds of Interviews"
        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        defaultValue="Pending"
        onChange={(e)=>setRoundsOfInterviews(parseInt(e.target.value))}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
	)
}

