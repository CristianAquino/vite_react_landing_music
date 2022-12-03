import Footer from "../components/LandingPageFitnes/Footer";
import Hero from "../components/LandingPageFitnes/Hero";
import Join from "../components/LandingPageFitnes/Join";
import Plans from "../components/LandingPageFitnes/Plans";
import Programs from "../components/LandingPageFitnes/Programs";
import Reasons from "../components/LandingPageFitnes/Reasons";
import Testimonials from "../components/LandingPageFitnes/Testimonials";

const PageFitnes = () => {
  return (
    <div className="pageFitnes mix-blend-overlay bg-appColor flex flex-col overflow-hidden gap-24">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default PageFitnes;
