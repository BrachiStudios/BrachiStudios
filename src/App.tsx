import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Craft from "./components/Craft";
import Loaves from "./components/Loaves";
import Method from "./components/Method";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-olive-950 text-cream">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Craft />
        <Loaves />
        <Method />
        <Journal />
        <Footer />
      </main>
    </div>
  );
}
