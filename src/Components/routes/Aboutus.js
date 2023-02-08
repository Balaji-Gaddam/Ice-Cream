import "../routes/About.css";
import Aboutimg from "../Images/icePNG.jpg";

function AboutUs() {
  return (
    <>
      <h1 className="about-title"></h1>
      <div className="about-container">
        <div data-aos="fade-right" className="about-text">
          <h1>ABOUT US</h1>
          <p>
            In 2017… we started out by experimenting with plant - based ice
            cream recipes in a no-frill family home kitchen. Our goal was to
            develop a nice cream that was better-for-you (and the planet!) than
            the conventional options available… and to prove that the plant
            based label or a healthier option does not mean you have to
            compromise on taste.
          </p>
          <p>
            Our ice creams are now handcrafted in small batches (in a fancier
            kitchen!) from all-natural ingredients. Every flavour is free from
            dairy, refined sugar, egg, preservative, and any artificial
            additives. The support for our product has been tremendous and we
            hope to be able to reach more people.
          </p>
          <p>
            Ultimately, we strive to create the kind of company that’s feel good
            and fun to support, work for, and partner with. We believe in
            building a more conscious community through our ice cream. Thank you
            to everyone who has been a part of our journey!
          </p>
        </div>

        <div data-aos="fade-left" className="about-image">
          <img alt="aboutImg" src={Aboutimg} />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
