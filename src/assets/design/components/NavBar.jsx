import { Link, NavLink, useNavigate } from "react-router-dom";
import trickImg  from "../../img/trick-treat5-img.png";


export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={trickImg} alt="" className="nav__logo-img" />
          PAGES EPS
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link active-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/table">
                Datos EPS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/form">
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};
