// import "../components/Trip.css";
import "../Components/Dish.css";
import Dish from "../Components/Dish";

function DishData(props) {
  return (
    <>
      <div className="t-card">
        <div className="t-image">
          <img alt="card-image" src={props.image} />
          <h3>{props.heading}</h3>
        </div>
      </div>
    </>
  );
}

export default DishData;
