import React, { useState, useEffect } from 'react';
import { getPolicy, getDaoList } from '../services';

export default function Policies({ daos }) {
  console.log(daos);
  return (
    <>
      <div className="flex flex-col justify-center text-2xl">
        {daos &&
          daos.map(policies => {
            return (
              <div>
                <p>{policies.daoId}</p>
                {policies.policy.roles.map(policy => (
                  <div>
                    <p>{policy.name}</p>
                    <p>
                      Members:
                      {typeof policy.kind === 'string'
                        ? policy.kind
                        : policy.kind.Group.map(role => {
                            return <span>{role}</span>;
                          })}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </>
  );
}
