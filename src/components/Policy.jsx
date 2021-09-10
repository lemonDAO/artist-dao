import React, { useState, useEffect } from 'react';
import { getPolicy, addDao } from '../services';
import Policies from './Policies';

export default function Policy() {
  const [daos, setDaos] = useState();
  const [daoForm, setDaosForm] = useState({ daoName: '', purpose: '', council: '' });

  const handleChange = (e) => {
    setDaosForm({
      ...daoForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (daoForm) => {
    console.log({...daoForm})
    addDao({...daoForm})
  }

  const getDaos = async () => {
    const result = await getPolicy();
    await setDaos(result);
  };

  // create a function that allows adding a bounty to the blockchain
  // const handleAddDao = async () => {
  //   addDao();
  // };

  useEffect(() => {
    getDaos();
  }, []);


  useEffect(() => {
    console.log(daoForm)
  }, [daoForm]);
  return (
    <>
      <div className="flex justify-center text-2xl">
        <form className="content-form">
          <input type="text" placeholder="DAO Name" name="daoName" value={daoForm.daoName} onChange={e => handleChange(e)} />
          <input type="text" placeholder="Purpose of the DAO" name="purpose" value={daoForm.purpose} onChange={e => handleChange(e)} />
          <input type="text" placeholder="Council Members" name="council" value={daoForm.council} onChange={e => handleChange(e)} />
        </form>
        {daos && <Policies daos={daos} />}
        <button onClick={() => handleSubmit(daoForm)}>Add DAO</button>
        {/* {policies && policies} */}
        {/* {policies?.roles &&
          policies.roles.map(role => {
            return (
              <div key={role.name} className="mx-4">
                <p> Name: {role.name}</p>
                <p>

                  Members:
                  {typeof role.kind === 'string'
                    ? role.kind
                    : role.kind.Group.map(role => {
                        return <span>{role}</span>;
                      })}
                </p>
                <div>
                  Permissions:
                  {role.permissions}
                  {/* {role.permissions.map(permission => {
                    return <p>{permission}</p>;
                  })} 
                </div>
              </div>
            );
          })} */}
      </div>
    </>
  );
}
