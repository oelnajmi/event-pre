import Image from 'next/image';

const FeedHeader = () => {
  return (
    <div className="z-0 hero border-x border-b border-black p-10 sm:pr-36 sm:pl-36">
      <div className="hero-content p-0 max-w-full justify-between flex-col sm:flex-row-reverse">
        <Image
          src="/undraw_visualization_re_1kag.svg"
          width={500}
          height={400}
        />

        <div className="sm:w-[40%]">
          <h1 className="text-center sm:text-left text-5xl sm:text-7xl font-bold">
            Start <span className="text-success">Selling</span>{' '}
            <span className="primary-text-color text-center">
              Exclusively !
            </span>
          </h1>
          <p className="py-6 font-semibold text-center sm:text-left">
            Sell your digital content exlusively to your most loyal fans.
            Distribute your digital product to a larger audience at a lower
            price once you hit your sales target!
          </p>
          <div className="text-center sm:text-left">
            <button className="btn glass btn-accent bg-accent">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
