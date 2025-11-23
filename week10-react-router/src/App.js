import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ marginTop: "40px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dynamic Route */}
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
