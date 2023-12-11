import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import rost1 from "../images/rost-1.jpg";
import rost2 from "../images/rost-2.jpg";
import rost3 from "../images/rost-3.jpg";
import rost4 from "../images/rost-4.jpg";
import rost5 from "../images/rost-5.jpg";
import NewsContainer from "./news-container";

export default function News() {
  const [newsCollection, setNewsCollection] = useState([]);
  const [backgroundImages, setBackgroundImages] = useState([]);

  // const getRandomImage = () => {
  //   const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  //   return backgroundImages[randomIndex];
  // };
  // const containerStyle = {
  //   backgroundImage: `url(${getRandomImage()})`,
  // };

  useEffect(() => {
    axios
      .get("http://localhost:4000/news")
      .then((res) => {
        setNewsCollection(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const generateBackgroundImages = () => {
      const imageUrls = [
        rost1,
        rost2,
        rost3,
        rost4,
        rost5,
        // Add more image URLs as needed
      ];
      const tempImages = [];
      for (let i = 0; i < newsCollection.length; i++) {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        tempImages.push(imageUrls[randomIndex]);
      }
      setBackgroundImages(tempImages);
    };

    generateBackgroundImages();
  }, [newsCollection]);
  return (
    // <div className="App-body-news">
    //   {newsCollection.reverse().map((item) => (
    //     <div className="card-temp" style={containerStyle} key={item.id}>
    //       <div className="news-container">
    //         <div className="news-timestamp">{item.timestamp}</div>
    //         <div className="news-head">{item.name}</div>
    //         <div className="news-body">{item.description}</div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="news-page" onClick={() => console.log(newsCollection)}>
      {newsCollection.reverse().map((item, index) =>
        item && item.timestamp ? (
          <NewsContainer
            className="news-block"
            key={item.id}
            backgroundImage={backgroundImages[index % backgroundImages.length]}
            item={item} // Pass the entire 'item' object as a prop
          />
        ) : null
      )}
      {/* Other content of your news page */}
    </div>
  );
}
