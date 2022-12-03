import Header from "../components/LandingPageMusic/Header";
import Hero from "../components/LandingPageMusic/Hero";
import Experience from "../components/LandingPageMusic/Experience";
import Search from "../components/LandingPageMusic/Search";
import Download from "../components/LandingPageMusic/Download";
import Footer from "../components/LandingPageMusic/Footer";

const PageMusic = () => {
  return (
    <div className="pageMusic text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
};

export default PageMusic;
