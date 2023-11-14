import "@/styles/globals.css";
import "../styles/tailwind.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import SlideCart from "@/components/SlideCart";

export default function App({ Component, pageProps }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <Provider store={store}>
      {isCartOpen && (
        <div className="z-[999] bg-[rgba(0,0,0,0.2)] fixed h-screen w-screen top-0">
          <SlideCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        </div>
      )}
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <div className="min-h-[calc(100vh-6rem)] mt-24 flex flex-col">
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
