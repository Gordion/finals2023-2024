import menu from "../images/menu.png";
import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const tasks = [
  { id: "1", content: "Ліси" },
  { id: "2", content: "Гори" },
  { id: "3", content: "Озера" },
  { id: "4", content: "Тварини" },
];

const taskStatus = [
  {
    name: "drag-list",
    items: tasks,
  },
  {
    name: "highest",
    items: [],
    number: 1,
  },
  {
    name: "high",
    items: [],
    number: 2,
  },
  {
    name: "medium",
    items: [],
    number: 3,
  },
  {
    name: "low",
    items: [],
    number: 4,
  },
  {
    name: "zero",
    items: [],
    number: 5,
  },
];

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
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

export default function Touroute() {
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
        <Droppable droppableId={columnId} key={columnId}></Droppable>
        {taskStatus.map((e) => {
          return (
            <div>
              <div className="number">{e.number}</div>
              <div className={`${e.name} priority`}></div>
            </div>
          );
        })}
      </DragDropContext>
      <div className="drag-priority"></div>
      <div className="drag-button">Визначити</div>
    </section>
  );
}
