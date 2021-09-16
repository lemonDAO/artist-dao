import React, { useState, useEffect } from 'react';
import { getDaos } from '../services';
import SingleDAO from './SingleDAO';

export default function Daos() {
  const [daos, setDaos] = useState();

  const getAllDaos = async () => {
    const result = await getDaos();
    console.log(result);
    await setDaos(result);
  };

  useEffect(() => {
    getAllDaos();
  }, []);

  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Explore DAOs</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Fund artists and contribute to the public good</p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {daos ? (
              daos.map((dao,index) => {
                return <SingleDAO dao={dao} index={index} key={index}/>;
              })
            ) : (
              <div className="flex justify-center items-center col-start-1 col-end-4">
                <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 text-center"></div>
             </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
