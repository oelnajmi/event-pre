const FeedNavbar = () => {
  return (
    <div>
      <div className="text-3xl font-bold text-gray-700">Location</div>
      <div className="border-b shadow-md w-full mt-6 flex justify-between p-4">
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
    </div>
  );
};

export default FeedNavbar;