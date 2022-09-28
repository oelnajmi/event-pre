import FeedHeader from '../components/FeedHeader';
import FeedNavbar from '../components/FeedNavbar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <main className="min-h-screen flex flex-col max-w-[1500px] mx-auto p-4">
        <Navbar />
        <FeedHeader />
        <FeedNavbar />
      </main>
    </div>
  );
};

export default Home;
