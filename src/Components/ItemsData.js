// import "../components/Trip.css";
import "../Components/Items.css";
import Items from "../Components/Items";

function ItemsData(props) {
  return (
    <>
      <div className="items-card">
        <div className="Items-image">
          <img alt="card-image" src={props.image} />
        </div>
        <div className="Items-text1">
          <h3>{props.heading}</h3>
          <a href="/">{props.tag}</a>
        </div>
      </div>
    </>
  );
}

export default ItemsData;
