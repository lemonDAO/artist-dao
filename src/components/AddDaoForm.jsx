/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { addDao } from '../services';

export default function AddDaoForm({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  const [daoForm, setDaosForm] = useState({ daoName: '', purpose: '', council: '' });

  const handleChange = e => {
    setDaosForm({
      ...daoForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e, daoForm) => {
    e.preventDefault();
    addDao({ ...daoForm });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto " initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-">
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div className=" bg-main-gray inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Create your DAO
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="content-form space-y-6 sm:space-y-5">
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-dark-gray sm:pt-5">
                        <label htmlFor="dao-name" className="block text-sm font-medium text-gray-700 p-1">
                          DAO Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input placeholder="DAO Name" type="text" name="daoName" id="dao-name" value={daoForm.daoName} onChange={e => handleChange(e)} className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-dark-gray rounded-md p-1" />
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-dark-gray sm:pt-5">
                        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                          Purpose of the DAO
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <textarea value={daoForm.purpose} id="purpose" name="purpose" rows={3} onChange={e => handleChange(e)} className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-dark-gray rounded-md" />
                          <p className="mt-2 text-sm text-gray-500">Write a few sentences about the purpose of your DAO.</p>
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-dark-gray sm:pt-5">
                        <label htmlFor="dao-name" className="block text-sm font-medium text-gray-700 p-1">
                          Council
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input placeholder="Council Members" type="text" name="council" id="council" value={daoForm.council} onChange={e => handleChange(e)} className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-dark-gray rounded-md p-1" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button onClick={e => { handleSubmit(e, daoForm);  setOpen(false)}} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                  Add DAO
                </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-dark-gray shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm" onClick={() => setOpen(false)} ref={cancelButtonRef}>
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
