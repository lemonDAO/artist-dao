import { useState } from 'react';
import heroImg from '../images/heroImg.jpg';
import AddDaoForm from './AddDaoForm'

export default function HeroSection() {
  const [open, setOpen] = useState(false)
  return (
    <main className="bg-main-gray border-b border-dark-gray">
      <div className=" flex max-w-7xl mx-auto px-4 sm:px-6 bg-main-gray ">
        <div className="absolute py-16 sm:py-24 lg:py-32 max-w-7xl">
          <h1 className="text-left  text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Fund your favorite</span>
            <span className="block text-indigo-200">Artist today</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-left text-xl sm:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <div className="mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-start">
            <button onClick={() => setOpen(true)} className="flex items-start justify-start px-4 mr-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
             Create your DAO
            </button>
            <button  className="flex items-start justify-start px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
              Learn more
            </button>
          </div>
        </div>
        <img className="h-full object-cover" src={heroImg} alt="Man singing" />

     <AddDaoForm open={open} setOpen={setOpen}  />
      </div>
    </main>
  );
}
