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
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Proposals</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Fund artists and contribute to the public good</p>
          </div>
          <AddBountyForm />
          {policy && (
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              <div className="flex-1">
                <p className="text-sm font-medium">{policy.policy.daoId}</p>
                <div className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">Dao Name: {policy.config.name}</p>
                  <p className="mt-3 text-base text-gray-500">Dao purpose: {policy.config.purpose}</p>
                </div>
              </div>
              <div>
                Council Members
                {policy.policy.roles.map(policy => (
                  <div key={policy.name}>
                    <p>
                      {policy.name === 'council'
                        ? policy.kind.Group.map(role => {
                            return <span key={role}>{role}</span>;
                          })
                        : ''}
                    </p>
                    <p></p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-20">
            {proposals &&
              proposals.map(proposal => {
                return (
                  <div>
                    <h1>Proposer: {proposal.proposer}</h1>
                    <p>Description: {proposal.description}</p>
                    {proposal.kind.AddBounty && (
                      <div>
                        <h3>Bounty description: {proposal.kind.AddBounty.bounty.description}</h3>
                        <p>Token: {proposal.kind.AddBounty.bounty.token || 'NEAR'}</p>
                        <p>Amount: {proposal.kind.AddBounty.bounty.amount}</p>
                        <p>Times: {proposal.kind.AddBounty.bounty.times}</p>
                        <p>Max deadline: {proposal.kind.AddBounty.bounty.max_deadline}</p>
                        <h3>Status: {proposal.status}</h3>
                        {/* <p>Votes: {proposal.votes}</p> */}
                        <p>
                          Submission Date:
                          {format(new Date(fromUnixTime(parseInt(proposal.submission_time.substring(0, 10)))), 'MMM do yyyy')}
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
