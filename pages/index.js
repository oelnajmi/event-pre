import FeedHeader from '../components/FeedHeader';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col max-w-[1500px] mx-auto">
      <Navbar />
      <FeedHeader />
    </main>
  );
};

export default Home;
