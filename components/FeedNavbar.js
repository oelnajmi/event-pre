const FeedNavbar = () => {
  return (
    <div className="border-b shadow-md w-full mt-10 flex justify-between p-4">
      <div className="hidden md:flex md:w-auto">
        <ul className="flex text-gray-600 justify-between items-center space-x-8 text-base font-bold">
          <li>
            <a href="#" className="hover:text-black" aria-current="page">
              Music
            </a>
          </li>
          <li>
            <a href="#" className="">
              Hobbies
            </a>
          </li>
          <li>
            <a href="#" className="">
              Health
            </a>
          </li>
          <li>
            <a href="#" className="">
              Online
            </a>
          </li>
          <li>
            <a href="#" className="">
              Food
            </a>
          </li>
          <li>
            <a href="#" className="">
              Sports
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedNavbar;
