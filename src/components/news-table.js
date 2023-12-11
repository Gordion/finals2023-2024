import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const NewsTableRow = ({ obj, onRowDelete }) => {
  const deleteNews = () => {
    axios
      .delete(`http://localhost:4000/news/delete-news/${obj._id}`)
      .then((res) => {
        onRowDelete && onRowDelete(obj._id);
        console.log("News successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      <td className="data-tbody">{obj.name}</td>
      <td className="data-tbody">{obj.timestamp}</td>
      {onRowDelete && (
        <td className="data-tbody">
          <Button
            onClick={deleteNews}
            className="custom-button custom-danger-button"
            size="sm"
            variant="danger"
          >
            Delete
          </Button>
        </td>
      )}
    </tr>
  );
};

export default NewsTableRow;
