import React, { useState, useEffect } from 'react';
import { format, fromUnixTime } from 'date-fns';
import { getPolicy, getProposals } from '../services';
import AddBountyForm from '../components/AddBountyForm.jsx';

export default function Proposals() {
  const [policy, sePolicy] = useState();
  const [proposals, seProposals] = useState();

  const getDaoPolicy = async id => {
    const result = await getPolicy(id);
    console.log('policy', result);
    await sePolicy(result);
  };

  const getAllProposals = async id => {
    const result = await getProposals(id);
    console.log('proposals', result);
    await seProposals(result);
  };

  useEffect(() => {
    getDaoPolicy(localStorage.getItem('daoId'));
    getAllProposals(localStorage.getItem('daoId'));
  }, []);

  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 ">
    
        <div className="relative max-w-7xl mx-auto">
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl text-center">DAO Info</h2>
          {policy && (
            <div className="mt-12  flex  w-9/12 flex-col mx-auto">
              <div className="flex justify-between rounded-lg border border-dark-gray p-4">
                <p className="text-xl tracking-tight ">
                  DAO ID: <span className="font-semibold">{localStorage.getItem('daoId')}</span>
                </p>
                <p className="text-xl">
                  Dao Name: <span className="font-semibold">{policy.config.name}</span>
                </p>
                <p className=" text-xl">
                  Dao purpose: <span className="font-semibold">{policy.config.purpose}</span>
                </p>
              </div>
              <div className="flex my-5 mr-2 rounded-lg border border-dark-gray p-4">
                <p className="text-xl mr-2 p-4">Council Members: </p>

                {policy.policy.roles.map(policy => (
                  <p key={policy.name} className="font-semibold text-xl flex flex-col ">
                    {policy.name === 'council'
                      ? policy.kind.Group.map(role => {
                          return <span key={role}>{role}</span>;
                        })
                      : ''}
                  </p>
                ))}
              </div>
            </div>
          )}
          <div className="text-center mt-10">
            <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Propose a bounty</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Fund artists and contribute to the public good</p>
          </div>
          <AddBountyForm />
          <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl text-center">Proposals</h2>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
         
            {proposals &&
              proposals.map(proposal => {
                return (
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-dark-gray p-4">
                    <h1>Proposer: <span className="font-semibold">{proposal.proposer}</span></h1>
                    <p>Description: <span className="font-semibold">{proposal.description} </span></p>
                    {proposal.kind.AddBounty && (
                      
                      <div>
                         <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Bounty Info: </p>
                        <h3>Bounty description: <span className="font-semibold">{proposal.kind.AddBounty.bounty.description}</span></h3>
                        <p>Token: <span className="font-semibold">{proposal.kind.AddBounty.bounty.token || 'NEAR'}</span></p>
                        <p>Amount: <span className="font-semibold">{proposal.kind.AddBounty.bounty.amount}</span></p>
                        <p>Times: <span className="font-semibold">{proposal.kind.AddBounty.bounty.times}</span></p>
                        <p>Max deadline: <span className="font-semibold">{proposal.kind.AddBounty.bounty.max_deadline}</span></p>
                        <h3>Status: <span className="font-semibold">{proposal.status}</span></h3>
                        {/* <p>Votes: {proposal.votes}</p> */}
                        <p>
                          Submission Date:  
                          <span className="font-semibold">{format(new Date(fromUnixTime(parseInt(proposal.submission_time.substring(0, 10)))), 'MMM do yyyy')}</span>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
