import burger from "../images/hamburger-menu.svg";
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <section className="navbar">
      <div className="navbar-main">
        <ul>
          <li className="current-selected">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/map">Карта</Link>
          </li>
          <li>Новини</li>
          <li>Кращі маршрути</li>
          <li>Додаткова інформація</li>
        </ul>
        <img src={burger} alt="burger-icon" />
      </div>
    </section>
  );
}
