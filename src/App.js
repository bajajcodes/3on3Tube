import { Header, Footer } from "components";
import { Home } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "styles/common.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
