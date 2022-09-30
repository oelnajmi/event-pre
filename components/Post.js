const Post = () => {
  return (
    <div className="card w-[90%] border border-black shadow-xl mx-auto hover:shadow-2xl hover:skew-y-[1deg] hover:bg-slate-100">
      <div className="p-2 text-center">
        <h2 className="font-semibold font-mono text-lg">Omar Elnajmi</h2>
      </div>
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="flex flex-col justify-around h-full">
        <div className="border-b border-black text-center items-center h-auto overflow-x-auto flex-grow max-h-24">
          <h2 className="font-mono text-lg">
            Build mockup photoshop photoshop photoshop photoshop photoshop
            photoshop photoshop
          </h2>
        </div>
        <div className="border-black flex text-center items-center justify-around">
          <div className="w-[50%] border-r border-black p-2">$19</div>
          <div className="w-[50%] text-center p-2 hover:cursor-pointer">
            buy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
