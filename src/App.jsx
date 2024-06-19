import ChiroBanner from "./components/ChiroBanner";
import { NavBar } from "./components/NavBar";
import ProductSection from "./sections/ProductSection";
import PromoBanner from "./components/PromoBanner";

function App() {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      <NavBar />
      <ChiroBanner />
      <ProductSection />
      <PromoBanner />
    
    </div>
  );
}

export default App;
