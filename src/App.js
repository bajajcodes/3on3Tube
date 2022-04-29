import { Header, Footer } from "components";
import { Home, Auth } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "styles/common.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
