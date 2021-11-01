export default function Categories({algorithms, setAlgorithms, takeHome, setTakeHome, systemDesign, setSystemDesign, liveCoding, setLiveCoding}) {
  return (
    <div className="flex items-center w-2/3">
     
      <div className="flex">
        <div className="flex flex-col">
          <div className="px-4">
            <label
              htmlFor="algorithms"
              className="block text-sm font-medium text-gray-700"
            >
              Algorithms
            </label>
            <select
              id="algorithms"
              name="algorithms"
              className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue="70k"
              onChange={(e)=>setAlgorithms(e.target.value)}
            >
              <option>0 - not present</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5 - extremely challenging</option>
            </select>
          </div>
          <div className="px-4">
            <label
              htmlFor="takehome"
              className="block text-sm font-medium text-gray-700"
            >
              Take Home Assignments
            </label>
            <select
              id="takehome"
              name="takehome"
              className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue="70k"
              onChange={(e)=>setTakeHome(e.target.value)}
            >
              <option>0 - not present</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5 - extremely challenging</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-4">
            <label
              htmlFor="systemdesign"
              className="block text-sm font-medium text-gray-700"
            >
              System Design
            </label>
            <select
              id="systemdesign"
              name="systemdesign"
              className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue="70k"
              onChange={(e)=>setSystemDesign(e.target.value)}
            >
              <option>0 - not present</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5 - extremely challenging</option>
            </select>
          </div>
          <div className="px-4">
            <label
              htmlFor="livecoding"
              className="block text-sm font-medium text-gray-700"
            >
              Live Coding
            </label>
            <select
              id="livecoding"
              name="livecoding"
              className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue="70k"
              onChange={(e)=>setLiveCoding(e.target.value)}
            >
              <option>0 - not present</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5 - extremely challenging</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
