// import "../components/Trip.css";

function DishData(props) {
  return (
    <>
      <div className="t-card">
        <div className="t-image">
          <img alt="card-image" src={props.image} />
         
        </div>
      </div>
    </>
  );
}

export default DishData;
