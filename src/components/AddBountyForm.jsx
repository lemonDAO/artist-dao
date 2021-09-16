/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { addBounty } from '../services';

export default function AddBountyForm() {


  const [bountyForm, setBountyForm] = useState({ description: '', bountyDescription: '', amount: '' , times: 1, maxDeadline : "500"});

  const handleChange = e => {
    setBountyForm({
      ...bountyForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e, bountyForm) => {
    e.preventDefault();
    const POLICY_ID = localStorage.getItem('daoId')
    // console.log()
    // console.log({ POLICY_ID, ...bountyForm });
    addBounty({ POLICY_ID, ...bountyForm });
  };

  return (
 
    <div className="flex items-center justify-center my-20">
    <form>
      <label for="description" className="mx-2">General description</label>
      <input
        value={bountyForm.description}
        onChange={e => handleChange(e)} 
        type="text"
        name="description"
      
        id="description"
        placeholder="Description"
        className="border rounded p-1 px-3 w-40 h-11"
      />

      <label for="bountyDescription" className="mx-2">Bounty description</label>
      <input
       value={bountyForm.bountyDescription}
       onChange={e => handleChange(e)} 
        type="text"
        name="bountyDescription"
        id="bountyDescription"
        placeholder="Bounty Description"
        className="border rounded p-1 px-3 w-40 h-11"
      />
      <label for="amount" className="mx-2">Amount</label>
      <input
         value={bountyForm.amount}
         onChange={e => handleChange(e)} 
        type="text"
        name="amount"
        id="amount"
        placeholder="Amount"
        className="border rounded p-1 px-3 w-40 h-11"
      />
      <label for="times" className="mx-2">Times</label>
      <input
        value={bountyForm.times}
        onChange={e => handleChange(e)} 
        type="number"
        name="times"
        id="times"
        placeholder="Times"
        className="border rounded p-1 px-3 w-40 h-11"
      />
      <label for="maxDeadline" className="mx-2">Max Deadline</label>
      <input
        value={bountyForm.maxDeadline}
        onChange={e => handleChange(e)} 
        type="text"
        name="maxDeadline"
        id="maxDeadline"
        placeholder="Max Deadline"
        className="border rounded p-1 px-3 w-40 h-11"
      />
    </form>
    <button
      onClick={(e)=>handleSubmit(e,bountyForm)}
      className="bg-indigo-500 text-white hover:bg-indigo-700 flex items-center justify-center h-11 w-32 rounded-md"
    >
      Add bounty
    </button>
  </div>
  );
}
