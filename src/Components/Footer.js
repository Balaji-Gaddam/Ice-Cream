import "../Components/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1> Cone & Cake</h1>
          <p>I scream,you scream, we all scream for ICE CREAM</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="bottom"
      >
        <div>
          <h4>Project</h4>
          <a href="/">Change log</a>
          <a href="/">Status</a>
          <a href="/">Lincense</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Trouble shooting</a>
          <a href="/">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of service</a>
          <a href="/">Privacy policy</a>
          <a href="/">Lincense</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
