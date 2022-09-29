import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 z-10">
      <div className="shadow-md sm:shadow-none flex sm:flex-col justify-between items-center mx-auto">
        <a className="tracking-widest sm:p-10 p-4 sm:text-center w-full sm:border-x sm:border-b border-black">
          <span className="font-burtons text-center text-3xl sm:text-6xl text-accent-content font-extrabold whitespace-nowrap primary-text-color">
            EVENTPRE
          </span>
        </a>
        <div className="sm:pl-36 sm:pr-36 flex justify-between md:space-x-8 sm:p-10 text-center w-full sm:border-x sm:border-b border-black">
          <ul className="hidden sm:flex justify-around text-center items-center space-x-8 text-lg font-semibold">
            <li>
              <a href="#" className="" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="">
                About
              </a>
            </li>
            <li>
              <a href="#" className="dropdown dropdown-hover">
                Services
              </a>
            </li>
          </ul>
          <div className="flex space-x-8">
            <Link href="/SignIn">
              <button className="btn bg-white text-black hidden sm:block">
                Log in
              </button>
            </Link>
            <Link href="/SignUp">
              <button className="btn bg-white text-black hidden sm:block">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="sm:hidden ">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </Menu.Button>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="z-50 absolute right-0 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <button className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      Duplicate
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      Duplicate
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      Duplicate
                    </button>
                  </Menu.Item>
                  {/* ... */}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
