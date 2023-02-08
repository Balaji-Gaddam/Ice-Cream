import { Component } from "react";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "../navbar/MenuItems";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="Nav">
        <nav className="NavbarItems">
          <h1 className="Navbar-logo">Cone & Cake</h1>

          <div className="Menu-Icons" onClick={this.handleClick}>
            <i
              className={
                this.state.clicked ? " fas fa-times " : " fas fa-bars "
              }
            ></i>
          </div>
          <ul className={this.state.clicked ? "Nav-Menu active" : "Nav-Menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <a href="/">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
