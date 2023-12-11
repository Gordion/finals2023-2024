import menu from "../images/menu.png";
import { React, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import brain from "brain.js";
import brainModel from "../models/brain_model.json";
import { createNeuralNetwork } from "../utils/neuralNetwork";
import cross from "../images/close.png";

const tasks = [
  { id: "woods", content: "Ліси" },
  { id: "hills", content: "Гори" },
  { id: "lakes", content: "Озера" },
  { id: "animals", content: "Тварини" },
];

const taskStatus = {
  dragList: {
    name: "dragList",
    items: tasks,
    neuralValue: 0,
  },
  highest: {
    name: "highest",
    items: [],
    number: 1,
    neuralValue: 1,
  },
  high: {
    name: "high",
    items: [],
    number: 2,
    neuralValue: 0.75,
  },
  medium: {
    name: "medium",
    items: [],
    number: 3,
    neuralValue: 0.5,
  },
  low: {
    name: "low",
    items: [],
    number: 4,
    neuralValue: 0.25,
  },
  zero: {
    name: "zero",
    items: [],
    number: 5,
    neuralValue: 0,
  },
};

export default function Touroute() {
  const [neuralRoute, setNeuralRoute] = useState();
  const [neuro, setNeuro] = useState({
    woods: 0,
    hills: 0,
    lakes: 0,
    animals: 0,
  });
  // const [draggedItem, setDraggedItem] = React.useState(null);
  const [columns, setColumns] = useState(taskStatus);

  // const onDragStart = (e, id) => {
  //   e.dataTransfer.setData("text/plain", id);
  //   setDraggedItem(id);
  // };

  // const onDragOver = (e) => {
  //   e.preventDefault();
  // };

  // const onDrop = (e, id) => {
  //   e.preventDefault();
  //   const droppedItemId = e.dataTransfer.getData("text/plain");
  //   console.log(`Dropped ${droppedItemId} into ${id}`);
  //   setDraggedItem(null);
  // };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    console.log("results", result, columns);
    console.log("source", source);
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      console.log("sourceColumn", sourceColumn);
      const destColumn = columns[destination.droppableId];
      console.log("destination", destColumn);
      console.log("neuro", result.draggableId, neuro[result.draggableId]);

      // const newNeuro = neuro;
      // newNeuro[result.draggableId] = ...
      // setNeuro(newNeuro);

      setNeuro((prevNeuro) => ({
        ...prevNeuro,
        [result.draggableId]: destColumn.neuralValue,
      }));

      // setNeuro(destColumn.neuralValue);

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  useEffect(() => {
    console.log(">>", neuro);
  });
  // React.useEffect(() => {
  //   const neuralNetwork = createNeuralNetwork();
  //   const trainedNetwork = neuralNetwork.fromJSON(brainModel);
  //   console.log(trainedNetwork.run(neuro));
  // }, []);

  function neuralChoice() {
    const neuralNetwork = createNeuralNetwork();
    const trainedNetwork = neuralNetwork.fromJSON(brainModel);
    const neuralResult = trainedNetwork.run(neuro);
    console.log(neuralResult);
    const maxKey = Object.keys(neuralResult).reduce(
      (max, key) => (neuralResult[key] > neuralResult[max] ? key : max),
      Object.keys(neuralResult)[0]
    );
    console.log(maxKey);

    const finalRoute = switchRoute(maxKey);
    console.log(finalRoute);
    setNeuralRoute(finalRoute);
  }

  function switchRoute(param) {
    console.log(param);
    switch (param) {
      case "m":
        return "Музей";
      case "qm":
        return "Королева Гора";
      case "fv":
        return "Верещиця";
      case "fp":
        return "Лісотипологічний профіль";
      case "s":
        return "Болото";
    }
  }

  return (
    <section className="touroute">
      {/* <div
        className="drag-container"
        onDragStart={(e) => onDragStart(e, "item1")}
        draggable
      >
        Item 1
      </div>

      <div
        className="drop-container"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "item1")}
      >
        Drop Zone
      </div> */}

      <div className="drag-title">
        Для визначення кращого місця або маршруту, виберіть ваші пріоритети в
        списку нижче
      </div>
      {neuralRoute && (
        <div>
          <div className="popup-neuro">
            Найкращим маршрутом для вас стане {neuralRoute}
            <img
              className="cross"
              src={cross}
              onClick={() => setNeuralRoute(null)}
            />
          </div>
          <div className="overlay-neuro"></div>
        </div>
      )}
      {/* <div className="drag-list">
        <div
          className="drag-container"
          onDragStart={(e) => onDragStart(e, "item1")}
          draggable
        >
          {draggedItem === "item1" ? (
            <div className="dragged-item">Item 1</div>
          ) : (
            "Item 1"
          )}
        </div>
        <div
          className="draggable"
          onDragStart={(e) => onDragStart(e, "item1")}
          draggable
        >
          <img className="drag-icon" src={menu} />
          Ліси
        </div>
        <div
          className="draggable"
          onDragStart={(e) => onDragStart(e, "item2")}
          draggable
        >
          <img className="drag-icon" src={menu} /> Гори
        </div>
        <div
          className="draggable"
          onDragStart={(e) => onDragStart(e, "item3")}
          draggable
        >
          <img className="drag-icon" src={menu} />
          Озера
        </div>
        <div
          className="draggable"
          onDragStart={(e) => onDragStart(e, "item4")}
          draggable
        >
          <img className="drag-icon" src={menu} />
          Тварини
        </div>
      </div>  */}
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="number">{column.number}</div>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      className={`${column.name} priority`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        // background: snapshot.isDraggingOver
                        //   ? "lightblue"
                        //   : "lightgrey",
                        padding: 4,
                        // minWidth: 400,
                        // minHeight: 200,
                      }}
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  className="draggable"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    // isplay: "flex",
                                    // flexDirection: "row",
                                    // userSelect: "none",
                                    // padding: 16,
                                    // margin: "0 0 8px 0",
                                    // minHeight: "50px",
                                    // backgroundColor: snapshot.isDragging
                                    //   ? "#263B4A"
                                    //   : "#456C86",
                                    // color: "white",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {item.content}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
                {/* <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 4,
                  minWidth: 400,
                  minHeight: 200,
                }}
              >

              </div> */}
                {/* <div className="number">{task.number}</div> */}
                {/* <div className={`${task.name} priority`}></div> */}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
      <div className="drag-priority"></div>
      <div className="drag-button" onClick={neuralChoice}>
        Визначити
      </div>
    </section>
  );
}
