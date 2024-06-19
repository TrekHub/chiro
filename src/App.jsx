// import NavBar from "./components/NavBar";

import ChiroBanner from "./components/ChiroBanner";
import { NavBar } from "./components/NavBar";
import ProductSection from "./sections/ProductSection";

function App() {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      <NavBar />
      <ChiroBanner />
      <ProductSection />
    </div>
  );
}

export default App;
