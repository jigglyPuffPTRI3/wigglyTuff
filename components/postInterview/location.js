export default function Location() {
  return (
    <div className="flex">
      <div className="flex items-center">
        <h1 className="text-3xl">Location:</h1>
      </div>
      <div className="flex justify-evenly">
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="On-site"
              value="On-site"
            />
            <span>On-site</span>
          </label>
          <label className="flex items-center p-2">
            <input className="mr-2" type="radio" name="Remote" value="Remote" />
            <span>Remote</span>
          </label>
        </div>
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input className="mr-2" type="radio" name="Hybrid" value="Hybrid" />
            <span>Hybrid</span>
          </label>
        </div>
      </div>
    </div>
  );
}
