import {useState} from 'react';

export default function Languages({setLanguages}) {
  
  const manageLanguages = (e) => {
    //only adds checkedValues
    if(e.target.checked === true){
      setLanguages(prevState => ([
        ...prevState,
        e.target.value
      ]))
    }
  }
  
  return (
    <div className="flex">
      <div className="flex items-center w-1/6">
        <h1 className="text-3xl">Languages:</h1>
      </div>
      <div className="flex justify-evenly">
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              type="checkbox"
              className="mr-2 appearance-none checked:bg-blue-600 checked:border-transparent"
              name="Javascript"
              value="Javascript"
            />
            <span>Javascript</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2 appearance-none checked:bg-blue-600 checked:border-transparent"
              type="checkbox"
              name="Python"
              value="Python"
              onChange={(e)=> {manageLanguages(e)}}
            />
            <span>Python</span>
          </label>
        </div>
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2 appearance-none checked:bg-blue-600 checked:border-transparent"
              type="checkbox"
              name="Java"
              value="Java"
            />
            <span>Java</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2 appearance-none checked:bg-blue-600 checked:border-transparent"
              type="checkbox"
              name="C++"
              value="C++"
            />
            <span>C++</span>
          </label>
        </div>
        <div className="ml-10">
          <label className="flex items-center p-2">
            <input
              className="mr-2 appearance-none checked:bg-blue-600 checked:border-transparent"
              type="checkbox"
              name="Ruby"
              value="Ruby"
            />
            <span>Ruby</span>
          </label>
          <label className="flex items-center p-2">
            <input
              className="mr-2 appearance-none checked:bg-blue-600 checked:border-transparent"
              type="checkbox"
              name="Go"
              value="Go"
            />
            <span>Go</span>
          </label>
        </div>
      </div>
    </div>
  );
}
