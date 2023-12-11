import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";
import NewsTableRow from "./news-table";

const AdminPage = () => {
  const [newsCollection, setNewsCollection] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    axios
      .get("http://localhost:4000/news")
      .then((res) => {
        setNewsCollection(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const newsObject = {
      name: name,
      description: description,
      timestamp: moment(timestamp).format("DD.MM.YYYY"),
    };

    axios
      .post("http://localhost:4000/news/set-news", newsObject)
      .then((res) => {
        setNewsCollection([...newsCollection, res.data]);
      });

    setName("");
    setDescription("");
    setTimestamp(new Date());
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeTimestamp = (e) => {
    const date = e.target.value;
    setTimestamp(date);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const dataTable = (collection, hideDelete) => {
    return collection.map((data, i) => (
      <NewsTableRow
        obj={data}
        key={i}
        onRowDelete={!hideDelete ? deleteRow : null}
      />
    ));
  };

  const deleteRow = (rowId) => {
    setNewsCollection(newsCollection.filter((item) => item._id !== rowId));
  };

  return (
    <div className="App">
      <div className="App-admin">
        <div className="form-container">
          <div className="form-admin">
            <h2>News</h2>
            <Form className="custom-form">
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={name}
                  onChange={onChangeName}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Timestamp</Form.Label>
                <Form.Control
                  type="date"
                  value={moment(timestamp).format("YYYY-MM-DD")}
                  onChange={onChangeTimestamp}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>News text</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={description}
                  onChange={onChangeDescription}
                />
              </Form.Group>
              <Button
                variant="primary"
                size="lg"
                block="block"
                type="submit"
                className="custom-btn"
                onClick={onSubmit}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="stats-container">
          <div className="stats-column">
            <table className="custom-table">
              <thead className="thead-blue">
                <tr>
                  <td>Name</td>
                  <td>Timestamp</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>{dataTable(newsCollection)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
