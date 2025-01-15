import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";


const App = () => (
  <BrowserRouter> {/* Wrap everything in BrowserRouter */}
    <div className="font-sans bg-gray-50">
      <Navbar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
