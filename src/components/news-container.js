import React from "react";

const NewsContainer = ({ backgroundImage, item }) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "200px", // Adjust the height based on your design
    width: "400px", // Adjust the width based on your design
    position: "relative", // Ensure positioning for absolute content
    borderRadius: "10px",
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
        <div className="news-body news-block-text">{item.description}</div>
      </div>
    </div>
  );
};

export default NewsContainer;
