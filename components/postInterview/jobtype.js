import { useState} from 'react';

export default function JobType({setJobType}) {
  const [radiocheck, setRadioChecked] = useState({
    'frontend engineer': false,
    'backend engineer': false,
    'fullstack engineer': false,
    'test engineer': false,
    'devops engineer': false
  });

  const radioChanger = (value) => {
    setRadioChecked({
      'frontend engineer': false,
      'backend engineer': false,
      'fullstack engineer': false,
      'test engineer': false,
      'devops engineer': false
    });
    setRadioChecked(prevState => ({
      ...prevState,
      [value]:true
    }));
    setJobType(value);
  }

  

  const [selectedJob, changeSelectedRole] = useState('');
  
  return (
    <div className="flex">
      <div className="flex items-center w-1/6">
        <h1 className="text-3xl">Job Type:</h1>
      </div>
      <div className="flex justify-evenly">
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="frontendengineer"
              value="frontend engineer"
              checked={radiocheck["frontend engineer"]}
              onChange={(e)=>{radioChanger(e.target.value)}}
            />
            <span>Front End Engineer</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="backendengineer"
              value="backend engineer"
              checked={radiocheck["backend engineer"]}
              onChange={(e)=>{radioChanger(e.target.value)}}
            />
            <span>Back End Engineer</span>
          </label>
        </div>
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="fsengineer"
              value="fullstack engineer"
              checked={radiocheck["fullstack engineer"]}
              onChange={(e)=>{radioChanger(e.target.value)}}
            />
            <span>Fullstack Engineer</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2"
              type="radio"
              name="testengineer"
              value="test engineer"
              checked={radiocheck["test engineer"]}
              onChange={(e)=>{radioChanger(e.target.value)}}
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
              checked={radiocheck["devops engineer"]}
              onChange={(e)=>{radioChanger(e.target.value)}}
            />
            <span>Devops Engineer</span>
          </label>
        </div>
      </div>
    </div>
  );
}
