import blackBurger from "../images/hamburger-menu-black.svg";
import whiteBurger from "../images/hamburger-menu.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);
  return (
    <section
      className={
        currentPage === "/" ? "navbar navbar-white" : "navbar navbar-black"
      }
    >
      <div className="navbar-main">
        <ul>
          <li className={currentPage === "/" ? "current-selected" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={currentPage === "/map" ? "current-selected" : ""}>
            <Link to="/map">Карта</Link>
          </li>
          <li className={currentPage === "/news" ? "current-selected" : ""}>
            <Link to="/news">Новини</Link>
          </li>
          <li className={currentPage === "/touroute" ? "current-selected" : ""}>
            <Link to="/touroute">Кращі маршрути</Link>
          </li>
          {/* <li className={currentPage === "/dnd" ? "current-selected" : ""}>
            <Link to="/dnd">dnd</Link>
          </li> */}
          <li
            className={currentPage === "/secondary" ? "current-selected" : ""}
          >
            <Link to="/secondary">Додаткова інформація</Link>
          </li>
        </ul>
        <Link to="/login-user">
          <img
            src={currentPage === "/" ? whiteBurger : blackBurger}
            alt="burger-icon"
          />
        </Link>
      </div>
    </section>
  );
}
