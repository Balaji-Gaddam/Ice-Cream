// import "../routes/Home.css";
import Navbar from "../navbar/Navbar";
import "../routes/HomeHero.css";

function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroimage" src={props.Heroimg} />
        <div className="Hero-text">
          <h1>{props.title}</h1>
          <p className="title-1">{props.title1}</p>
          <div className={props.btnClass}>
            <a href={props.url}>{props.buttonText}</a>
            <a href={props.url}> {props.buttonText1}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
