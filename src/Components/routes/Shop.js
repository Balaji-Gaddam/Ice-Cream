// import "../components/Trip.css";
import Navbar from "../navbar/Navbar";

import ShopData from "/src/Components/routes/ShopData.js";
import img1 from "/src/Components/Images/img1.jpg";
import img2 from "/src/Components/Images/img2.jpg";
import img3 from "/src/Components/Images/img3.jpg";
import img4 from "/src/Components/Images/img4.jpg";
import img5 from "/src/Components/Images/img5.jpg";

import { Link } from "react-router-dom";

function Dish() {
  return (
    <>
      <Navbar />
      <div className="Item-List">
        <a href="/">Cakes</a>
        <a href="/">Cakes</a>
        <a href="/">Cakes</a>
        <a href="/">Cakes</a>
        <a href="/">Cakes</a>
        <a href="/">Cakes</a>
        <a href="/">Cakes</a>
        <a href="/">Cakes</a>
        <a href="/">Cakes</a>
        <div className="Item-card">
          <ShopData image={img1} heading="additive free" />

          <ShopData image={img2} heading="refined suger free" />

          <ShopData image={img3} heading="dairy & egg free" />
          <ShopData image={img4} heading="preservative free" />
        </div>
      </div>
    </>
  );
}
export default Dish;
