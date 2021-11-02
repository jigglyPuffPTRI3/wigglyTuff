export default function JobType({setJobType}) {
  
  return (
    <div className="flex">
      <div className="flex items-center w-1/6">
        <h1 className="text-3xl">Job Type:</h1>
      </div>
      <form className="flex justify-evenly" onChange={(e)=>setJobType(e.target.value)}>
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="job-type"
              value='front end engineer'
            />
            <span>Front End Engineer</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="job-type"
              value="back end engineer"
            />
            <span>Back End Engineer</span>
          </label>
        </div>
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="job-type"
              value="fullstack engineer"
            />
            <span>Fullstack Engineer</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="job-type"
              value="test engineer"
            />
            <span>Test Engineer</span>
          </label>
        </div>
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="job-type"
              value="devops engineer"
            />
            <span>Devops Engineer</span>
          </label>
        </div>
      </form>
    </div>
  );
}
