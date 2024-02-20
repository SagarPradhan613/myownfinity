import Hero from "./pages/Hero";
import NewsLetterSection from "./pages/NewsLetterSection";
import OwnerShipSection from "./pages/OwnerShipSection";
import PartnerShipSection from "./pages/PartnerShipSection";
import SecondarySection from "./pages/SecondarySection";
import Footer from "./view/Footer";
import Header from "./view/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SecondarySection />
      <OwnerShipSection />
      <PartnerShipSection />
      <NewsLetterSection />
      <Footer />
    </>
  );
}

export default App;
