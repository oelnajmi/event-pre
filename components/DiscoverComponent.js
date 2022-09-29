import { MusicalNoteIcon } from '@heroicons/react/24/solid';

const DiscoverComponent = () => {
  return (
    <a href="#" className="border">
      <div className="flex flex-wrap space-x-2 items-center text-center">
        <div className="p-2 w-[30%] bg-slate-300 btn glass rounded-none">
          <MusicalNoteIcon className="mx-auto h-8 w-8 text-black" />
        </div>
        <div className="p-2 w-[60%] font-medium">Audio</div>
      </div>
    </a>
  );
};

export default DiscoverComponent;
