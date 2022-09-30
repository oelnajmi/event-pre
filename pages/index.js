import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Trending from '../components/Trending';

const Home = () => {
  return (
    <main className=" min-h-screen flex flex-col max-w-[1500px] mx-auto">
      <Navbar />
      {/* <FeedHeader /> */}
      {/* <Discover /> */}
      <Trending />
      {/* <Footer /> */}
      <Footer />
    </main>
  );
};

export default Home;
