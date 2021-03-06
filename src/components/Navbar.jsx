import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import { CONTRACT_ID, wallet } from '../services';

const accountId = wallet.getAccountId();

const signIn = () => {
  if (accountId) {
    wallet.signOut();
    window.location.reload();
  } else {
    wallet.requestSignIn(CONTRACT_ID);
  }
};

const navigation = [
  { name: 'Contact', href: '/contact-us' }
];

export default function Navbar() {
  return (
    <Popover as="header" className="relative bg-main-gray">
      <div className="py-6">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img className="h-10 w-auto sm:h-24" src={logo} alt="Project Logo" />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navigation.map(item => (
                <Link key={item.name} to={item.href} className="text-base font-medium text-black hover:text-gray-300">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <p>{accountId && accountId}</p>
            <button onClick={signIn} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
              {accountId ? 'Log Out' : 'Log in with NEAR'}
            </button>
          </div>
        </nav>
      </div>

      <Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
          <div className="rounded-lg shadow-md text-black ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg" alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map(item => (
                  <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-50">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 px-5">
                <Link to="/" className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">
                  Start free trial
                </Link>
              </div>
              <div className="mt-6 px-5">
                <p className="text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Link to="/" className="text-gray-900 hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
