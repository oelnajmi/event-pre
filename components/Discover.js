import DiscoverComponent from './DiscoverComponent';

const Discover = () => {
  return (
    <div className="border-x border-b border-black p-2">
      <div className="p-6 font-burtons text-center text-6xl whitespace-nowrap">
        DISCOVER
      </div>
      <div class="pb-6 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center text-center">
        <DiscoverComponent />
        <DiscoverComponent />
        <DiscoverComponent />
        <DiscoverComponent />
        <DiscoverComponent />
        <DiscoverComponent />
        <DiscoverComponent />
        <DiscoverComponent />
      </div>
    </div>
  );
};

export default Discover;
