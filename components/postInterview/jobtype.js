export default function JobType() {
  return (
    <div className="flex">
      <div className="flex items-center">
        <h1 className="text-3xl">Job Type:</h1>
      </div>
      <div className="flex justify-evenly">
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="frontendengineer"
              value="front end engineer"
            />
            <span>Front End Engineer</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="backendengineer"
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
              name="fullstackengineer"
              value="fullstack engineer"
            />
            <span>Fullstack Engineer</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="testengineer"
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
              name="devopsengineer"
              value="devops engineer"
            />
            <span>Devops Engineer</span>
          </label>
        </div>
      </div>
    </div>
  );
}
