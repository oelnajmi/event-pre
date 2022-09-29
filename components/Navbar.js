import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 sm:mt-6 ">
      <div className="p-4 sm:p-0 shadow-md sm:shadow-none pb-4 pt-4 flex flex-wrap justify-between items-center mx-auto">
        <a className="flex items-center flex-1">
          <span className="self-center text-3xl font-extrabold whitespace-nowrap primary-text-color">
            EventPre
          </span>
        </a>
        <div className="hidden md:flex md:w-auto">
          <ul className="flex justify-between items-center space-x-8 text-lg font-semibold">
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
              <a href="#" className="">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-8 flex-1 justify-end">
          <Link href="/SignIn">
            <button
              type="button"
              className="hidden md:block text-white primary-bg-color button-shape"
            >
              Log In
            </button>
          </Link>
          <Link href="/SignUp">
            <button
              type="button"
              className="hidden md:block text-white primary-bg-color button-shape"
            >
              Sign Up
            </button>
          </Link>
          <Menu as="div" className="sm:hidden relative inline-block text-left">
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
              <Menu.Items className="absolute right-0 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
    </nav>
  );
};

export default Navbar;
