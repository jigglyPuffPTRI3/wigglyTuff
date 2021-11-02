export default function Location({setOfficePolicy}) {
  return (
    <div className="flex">
      <div className="flex items-center w-1/6">
        <h1 className="text-3xl">Location:</h1>
      </div>
      <form className="flex justify-evenly" onChange={(e)=>setOfficePolicy(e.target.value)}>
        <div className="ml-10">
          {/* <form> */}
            <label className="flex items-center p-2">
              <input
                className="mr-2"
                type="radio"
                name="job-location"
                value="On-site"
                
              />
              <span>On-site</span>
            </label>
            <label className="flex items-center p-2">
              <input className="mr-2" type="radio" name="job-location" value="Remote" />
              <span>Remote</span>
            </label>
          </div>
          <div className="ml-10">
            <label className="flex items-center p-2">
              <input className="mr-2" type="radio" name="job-location" value="Hybrid" />
              <span>Hybrid</span>
            </label>
          
        </div>
      </form>
    </div>
  );
}
