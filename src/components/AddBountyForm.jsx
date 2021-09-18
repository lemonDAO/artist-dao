/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import { addBounty } from '../services';

export default function AddBountyForm() {
  const [bountyForm, setBountyForm] = useState({ description: '', bountyDescription: '', amount: '', times: 1, maxDeadline: '500' });

  const handleChange = e => {
    setBountyForm({
      ...bountyForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e, bountyForm) => {
    e.preventDefault();
    const POLICY_ID = localStorage.getItem('daoId');
    addBounty({ POLICY_ID, ...bountyForm });
  };

  return (
    <div className="relative max-w-7xl mx-auto my-12 ">
      <form className="flex justify-center ">
     
        <div className="flex flex-col justify-between mb-10 w-6/12 rounded-lg border border-dark-gray shadow-lg overflow-hidden p-6">

          <div className="flex justify-between my-2">
            <label htmlFor="description" className="">
              General description
            </label>
            <textarea value={bountyForm.description} onChange={e => handleChange(e)} type="text" name="description" id="description" placeholder="Description" className="border rounded p-1 px-3 w-96 h-20" />
          </div>
          <div className="flex justify-between my-2">
            <label htmlFor="bountyDescription" className="">
              Bounty description
            </label>
            <textarea value={bountyForm.bountyDescription} onChange={e => handleChange(e)} type="text" name="bountyDescription" id="bountyDescription" placeholder="Bounty Description" className=" w-96 border rounded p-1 px-3  h-20" />
          </div>
          <div className="flex justify-between my-2">
            <label htmlFor="amount" className="mx-2">
              Amount
            </label>
            <input value={bountyForm.amount} onChange={e => handleChange(e)} type="text" name="amount" id="amount" placeholder="Amount" className=" w-96 border rounded p-1 px-3  h-11" />
          </div>
          <div className="flex justify-between my-2">
            <label htmlFor="times" className="mx-2">
              Times
            </label>
            <input value={bountyForm.times} onChange={e => handleChange(e)} type="number" name="times" id="times" placeholder="Times" className=" w-96 border rounded p-1 px-3  h-11" />
          </div>

          <div className="flex justify-between my-2">
            <label htmlFor="maxDeadline" className="mx-2">
              Max Deadline
            </label>
            <input value={bountyForm.maxDeadline} onChange={e => handleChange(e)} type="text" name="maxDeadline" id="maxDeadline" placeholder="Max Deadline" className="border rounded p-1 px-3 w-96 h-11" />
          </div>
          <button onClick={e => handleSubmit(e, bountyForm)} className="self-end text-white hover:bg-indigo-700 flex items-center justify-center h-11 w-32 px-4 mt-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm ">
            Add bounty
          </button>
        </div>
      </form>
    </div>
  );
}
