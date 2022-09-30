import Post from './Post';

const Trending = () => {
  return (
    <div className="border-x border-b border-black p-6">
      <div className="p-6 font-burtons text-center text-6xl whitespace-nowrap">
        {/* TRENDING */}
      </div>
      <div class="pb-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Trending;
