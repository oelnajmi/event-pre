import Image from 'next/image';

const FeedHeader = () => {
  return (
    <div className="rounded-3xl mt-10 md:mt-20 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl font-extrabold md:text-5xl text-[#6E41E2] leading-tight text-center md:text-left slide-in-bottom-h1">
          Build Your Audience. Sell Your Tickets.
        </h1>
        <p className="hidden sm:block leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          The easiest way to share your event to all social media platforms!
        </p>

        <div className="hidden sm:flex w-full justify-center sm:justify-start sm:pb-0 fade-in">
          <button
            type="button"
            className="hidden md:block text-white bg-[#6E41E2] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Create Event
          </button>
        </div>
      </div>

      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden order-first sm:order-last">
        <Image
          src="/undraw_online_posts_re_7ucl.svg"
          alt="Vercel Logo"
          width={1400}
          height={600}
        />
      </div>
    </div>
  );
};

export default FeedHeader;
