import React from "react";

const NewsContainer = ({ backgroundImage, item, currentNews, showOverlay }) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "250px",
    minWidth: "400px",
    position: "relative", // Ensure positioning for absolute content
    borderRadius: "10px",
    textAlign: "center",
    // marginTop: "15px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff", // Example: white text
  };

  return (
    // <div className="news-container">
    <div style={containerStyle}>
      <div className="overlay-news"></div>
      <div style={contentStyle}>
        <div className="news-timestamp">{item.timestamp}</div>
        <div className="news-head">{item.name}</div>
        <div
          className="news-body news-block-text"
          onClick={() => {
            showOverlay(item);
            // console.log("currentnews", currentNews);
            console.log("itemid", item._id);
          }}
        >
          {/* {item.description} */}
          <div className="news-button">Переглянути</div>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
