import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 pt-6">
      <div className="flex flex-wrap justify-between items-center mx-auto">
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
          <button
            type="button"
            className="hidden md:block text-white primary-bg-color button-shape"
          >
            Sign Up
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
