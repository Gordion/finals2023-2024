// import videoBG from "./images/Rostochia.mp4";
import videoBG from "../images/Rostochia_h264.mp4";
import burger from "../images/hamburger-menu.svg";
import weatherIcon from "../images/partly_cloudy.png";
export default function Homepage() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted />
      {/* <section className="navbar">
        <div className="navbar-main">
          <ul>
            <li className="current-selected">Home</li>
            <li>Карта</li>
            <li>Новини</li>
            <li>Кращі маршрути</li>
            <li>Додаткова інформація</li>
          </ul>
          <img src={burger} alt="burger-icon" />
        </div>
      </section> */}
      <section className="main-title">
        <p>Природний заповідник "Розточчя"</p>
        <div className="main-button">Відкрити карту</div>
      </section>
      <section className="main-news">
        <div className="news-container">
          <div className="news-head">Останні новини</div>
          <div className="news-body">
            У Львівській ОВА планують розробити стратегію розвитку території
            біосферного резервату «Розточчя»
          </div>
          <div className="news-link">До інших новин</div>
        </div>
      </section>
      <section className="weather">
        <p>Температура в Івано-Франковому</p>
        <img src={weatherIcon} />
        <div className="temperature">
          <h2>15</h2>
          <p>°C</p>
        </div>
      </section>
    </div>
  );
}
