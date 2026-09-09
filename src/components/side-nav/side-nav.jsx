import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
import "./side-nav.css";

function SideNav({ navItems }) {
  return (
    <nav className="side-nav">
      <section className="nav-left">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Логотип" />
        </NavLink>

        <p className="nav-text">Навигация</p>
      </section>

      <section className="nav-right">
        <div className="nav-items">
          {navItems.map(({ id, title, path }) => (
            <NavLink key={id} to={path} className="item">
              {title}
            </NavLink>
          ))}
        </div>
      </section>
    </nav>
  );
}

export default SideNav;
