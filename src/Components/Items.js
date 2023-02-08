// import "../components/Trip.css";
import "../Components/Items.css";
import ItemsData from "./ItemsData";
import img1 from "../Components/Images/Cookie.jpg";
import img2 from "../Components/Images/Ice cream1.jpg";
import img3 from "../Components/Images/Whole cake.jpg";
import img4 from "../Components/Images/cake.jpg";
import img5 from "../Components/Images/kone.jpg";
import img6 from "../Components/Images/Best Deals.jpg";
import { Link } from "react-router-dom";

function Items() {
  return (
    <div className="Item-Total">
      <div className="Item-card">
        <ItemsData image={img1} heading="COOKIE" tag="Show more" />

        <ItemsData image={img2} heading="Ice cream" tag="Show more" />

        <ItemsData image={img3} heading=" Full cake" tag="Show more" />
        <ItemsData image={img4} heading="Cake" tag="Show more" />
        <ItemsData image={img5} heading="cones" tag="Show more" />
        <ItemsData image={img6} heading="Best deal" tag="Show more" />
      </div>
      <div className="Item-text">
        <h1>PLEASE NOTE:</h1>
        <p>
          While we take every precaution to prevent cross-contamination and
          provide a pleasant experience for customers with dietary needs, we do
          make our products in a facility with peanuts, tree nuts, coconut, and
          gluten. If you have any allergies, we will be happy to make reasonable
          accommodations at your request but we cannot guarantee any of our
          products are allergen-free. We encourage you to communicate with your
          server and use your own best judgement in determining what is best for
          your needs.
        </p>
        <a href="/">Shop Now</a>
      </div>
    </div>
  );
}
export default Items;
