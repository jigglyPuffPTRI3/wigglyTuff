import {useState} from 'react';

export default function Location({setOfficePolicy}) {
  const [radiocheck, setRadioChecked] = useState({
    'On-site': false,
    'Remote': false,
    'Hybrid': false,
  });

  const radioChanger = (value) => {
    setRadioChecked({
      'On-site': false,
      'Remote': false,
      'Hybrid': false,
    });
    setRadioChecked(prevState => ({
      ...prevState,
      [value]:true
    }));
    setOfficePolicy(value);
  }
  
  return (
    <div className="flex">
      <div className="flex items-center w-1/6">
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
              checked={radiocheck["On-site"]}
              onChange={(e)=>{radioChanger(e.target.value)}}
            />
            <span>On-site</span>
          </label>
          <label className="flex items-center p-2">
            <input className="mr-2" type="radio" name="Remote" value="Remote" checked={radiocheck["Remote"]}
              onChange={(e)=>{radioChanger(e.target.value)}} />
            <span>Remote</span>
          </label>
        </div>
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input className="mr-2" type="radio" name="Hybrid" value="Hybrid" checked={radiocheck["Hybrid"]}
              onChange={(e)=>{radioChanger(e.target.value)}} />
            <span>Hybrid</span>
          </label>
        </div>
      </div>
    </div>
  );
}
