import "../Components/Catering1.css";
import Cateringimg from "../Components/Images/Catering.jpg";

function Catering1() {
  return (
    <>
      <div className="Catering-Hero">
        <img className="Catering-img" alt="Cateringimg" src={Cateringimg} />
        <div className="Catering-Text">
          <h1>CATERING</h1>
          <h3>Scoop Station</h3>
          <p>
            Joyfull experince that replicates what you would experince when you
            visit a cone and cake shop. view the flavous available , sample,
            choose,then grt it scooped in cones or cups! We scoop on demand from
            a mobile freezer and make the set up more exciting by bringing our
            ice cream bicycle cart.
          </p>
          <a href="/">DROP US AN MAIL</a>
        </div>
      </div>
    </>
  );
}

export default Catering1;
