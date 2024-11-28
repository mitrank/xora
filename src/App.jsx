import Faq from "./sections/Faq.jsx";
import Features from "./sections/Features.jsx";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Pricing from "./sections/Pricing.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </main>
  );
};
export default App;
