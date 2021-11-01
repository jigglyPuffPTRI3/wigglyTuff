import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Feedback({feedback, setFeedback}) {
  const [open, setOpen] = useState(false);
  

  return (
    <div >
      <button
	  type="button"
	  className="items-center py-2 mt-6 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm mt-inline-flex hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-5006"
        onClick={() => {
          setOpen(true);
        }}
      >
        Leave Interview Feedback
      </button>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={setOpen}
          >
            <div className="flex items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="items-center" aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block w-1/3 px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
					<p className="mt-2 text-gray-500 center">
                        Leave some interview feedback here.
                      </p>
                      <textarea
                        id="addFeedback"
                        name="addFeedback"
                        rows={3}
                        className="block w-full max-w-lg border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
						value={feedback}
						onChange={(e)=>{setFeedback(e.target.value)}}
                      />
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}
