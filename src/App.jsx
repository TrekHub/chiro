// import NavBar from "./components/NavBar";

import ChiroBanner from "./components/ChiroBanner";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      <NavBar />
      <ChiroBanner />
    </div>
  );
}

export default App;
