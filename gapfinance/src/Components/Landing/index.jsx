import Backing from './Backing';
import Cta from './Cta';
import Enjoy from './Enjoy';
import Faqs from './Faqs';
import Footer from './Footer';
import Happy from './Happy';
import Hero from './Hero';
import More from './More';
import Navbar from './Navbar';

const Landing = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <More />
      <Backing />
      <Happy />
      <Enjoy />
      <Cta />
      <Faqs />
      <Footer />
    </main>
  );
};

export default Landing;
