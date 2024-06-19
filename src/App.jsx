import ChiroBanner from "./components/ChiroBanner";
import { NavBar } from "./components/NavBar";
import ProductSection from "./sections/ProductSection";
import PromoBanner from "./components/PromoBanner";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      <NavBar />
      <ChiroBanner />
      <ProductSection />
      <PromoBanner />
      <FooterSection />
    </div>
  );
}

export default App;
