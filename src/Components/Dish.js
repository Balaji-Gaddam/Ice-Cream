// import "../components/Trip.css";
import "../Components/Dish.css";
import DishData from "./DishData";
import img1 from "../Components/Images/img1.jpg";
import img2 from "../Components/Images/img2.jpg";
import img3 from "../Components/Images/img3.jpg";
import img4 from "../Components/Images/img4.jpg";
import img5 from "../Components/Images/img5.jpg";
import img6 from "../Components/Images/img1.jpg";
import { Link } from "react-router-dom";

function Dish() {
  return (
    <div className="Dish">
      <h1>OUR PHILOSOPHY</h1>
      <p>
        At cone & cake, we only use ingredients you’d find in your own kitchen –
        Nothing derived from a food laboratory.
      </p>
      <h2>LET’S GET REAL WITH OUR INGREDIENTS</h2>
      <div className="Dish-card">
        <DishData image={img1} heading="additive free" />

        <DishData image={img2} heading="refined suger free" />

        <DishData image={img3} heading="dairy & egg free" />
        <DishData image={img4} heading="preservative free" />
      </div>
    </div>
  );
}
export default Dish;
