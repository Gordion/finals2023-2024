// import videoBG from "./images/Rostochia.mp4";
import videoBG from "../images/Rostochia_h264.mp4";
import burger from "../images/hamburger-menu.svg";
import weatherIcon from "../images/partly_cloudy.png";
import React from "react";
import axios from "axios";
import WeatherComponent from "./weather";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Homepage() {
  const [lastNews, setLastNews] = useState({});
  const [lastNewsTwo, setLastNewsTwo] = useState({});
  const [lastNewsThree, setLastNewsThree] = useState({});
  const [lastNewsFour, setLastNewsFour] = useState({});
  const [newsCollection, setNewsCollection] = useState([]);

  const [news, setNews] = useState([]);
  function testClick() {
    console.log(news);
  }
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/news/get-newsfour"
        ); // Replace with your actual endpoint URL
        setNews(response.data); // Set the retrieved news data in state
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews(); // Call the function to fetch news on component mount
  }, []);

  // useEffect(() => {
  //   async function fetchLastNewsData() {
  //     const newsResp = await axios.get(
  //       "http://localhost:4000/news/get-newsfour"
  //     );
  //     if (newsResp && newsResp.status === 200 && newsResp.data) {
  //       console.log("newsrespdata", newsResp.data);
  //       setNewsCollection(newsResp.data);
  //     }
  //   }
  //   fetchLastNewsData();
  // }, []);

  // useEffect(() => {
  //   async function fetchLastNewsData() {
  //     const newsResp = await axios.get(
  //       "http://localhost:4000/news/get-lastnews"
  //     );
  //     if (newsResp && newsResp.status === 200 && newsResp.data) {
  //       console.log("newsrespdata", newsResp.data);
  //       setLastNews(newsResp.data);
  //     }
  //   }
  //   async function fetchLastNewsData() {
  //     const newsResp = await axios.get(
  //       "http://localhost:4000/news/get-lastnewstwo"
  //     );
  //     if (newsResp && newsResp.status === 200 && newsResp.data) {
  //       console.log("newsrespdata", newsResp.data);
  //       setLastNews(newsResp.data);
  //     }
  //   }
  //   async function fetchLastNewsData() {
  //     const newsResp = await axios.get(
  //       "http://localhost:4000/news/get-lastnewsthree"
  //     );
  //     if (newsResp && newsResp.status === 200 && newsResp.data) {
  //       console.log("newsrespdata", newsResp.data);
  //       setLastNews(newsResp.data);
  //     }
  //   }
  //   async function fetchLastNewsData() {
  //     const newsResp = await axios.get(
  //       "http://localhost:4000/news/get-lastnewsfour"
  //     );
  //     if (newsResp && newsResp.status === 200 && newsResp.data) {
  //       console.log("newsrespdata", newsResp.data);
  //       setLastNews(newsResp.data);
  //     }
  //   }

  //   fetchLastNewsData();
  // }, []);
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
        <div className="main-button" onClick={testClick}>
          <Link to="/map">Відкрити карту</Link>
        </div>
      </section>
      <div className="bottom-bar">
        <section className="main-news">
          <div className="news-container">
            <div className="news-head">Останні новини</div>
            <div className="news-body">
              У Львівській ОВА планують розробити стратегію розвитку території
              біосферного резервату «Розточчя»
            </div>
            {/* <div className="news-link">До інших новин</div> */}
          </div>
          <div className="news-container">
            <div className="news-head">Останні новини</div>
            <div className="news-body">
              На Львівщині презентували маршрут до найбільш цінних територій
              спадщини ЮНЕСКО
            </div>
            {/* <div className="news-link">До інших новин</div> */}
          </div>
          {/* <section className="weather">
            <p>Івано-Франково</p>
            <div className="weather-box">
              <img src={weatherIcon} />
              <div className="temperature">
                <h2>15</h2>
                <p>°C</p>
              </div>
            </div>
          </section> */}
          <WeatherComponent />
          <div className="news-container">
            <div className="news-head">Останні новини</div>
            <div className="news-body">
              Біля Львова відкрили новий туристичний маршрут. Протяжність нового
              туристичного шляху – 6 кілометрів.
            </div>
            {/* <div className="news-link">До інших новин</div> */}
          </div>
          <div className="news-container">
            <div className="news-head">Останні новини</div>
            <div className="news-body">
              Три природні заповідники, які необхідно відвідати усією сім'єю.
              Розточчя. Медобори. Ґорґани
            </div>

            {/* <div className="news-link">До інших новин</div> */}
          </div>
        </section>
        {/* <div className="news-link">До інших новин</div> */}
        {/* <section className="weather">
          <p>Івано-Франково</p>
          <div className="weather-box">
            <img src={weatherIcon} />
            <div className="temperature">
              <h2>15</h2>
              <p>°C</p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
