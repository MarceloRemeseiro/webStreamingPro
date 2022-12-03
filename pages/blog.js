import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AddsLaterales from "../components/adds/add";
import Articulos from "../components/atriculos/articulos";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <div className="m-20"></div>
      <div>
        <Header />
      </div>
      <div className="container">
        <Articulos />
      </div>

      <Footer />
    </div>
  );
}
