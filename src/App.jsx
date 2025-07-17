import { BrowserRouter, Route, Routes } from "react-router";
import Navpar from "./compo/Navpar";
import Hero from "./pages/Hero";
import Products from "./pages/Products";
import Allprod from "./pages/Allprod";
import Contact from "./pages/Contact";
import FeedbackPage from "./pages/Feedback";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500">
      <Navpar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/all_products" element={<Allprod />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Feedback" element={<FeedbackPage />} />
        </Routes>
      </BrowserRouter>
      {/*  */}
    </div>
  );
}
