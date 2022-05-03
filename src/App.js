import "styles/common.css";
import { Header, Footer } from "components";
import { BrowserRouter } from "react-router-dom";
import { RouteSwitch } from "./RouteSwitch";

function App() {
  return (
    <div className="dgrid App">
      <BrowserRouter>
        <Header />
        <RouteSwitch />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
