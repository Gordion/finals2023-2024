import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const tasks = [
  { id: "1", content: "Ліси" },
  { id: "2", content: "Гори" },
  { id: "3", content: "Озера" },
  { id: "4", content: "Тварини" },
];

const taskStatus = {
  requested: {
    name: "Requested",
    items: tasks,
  },
  first: {
    name: "first",
    items: [],
  },
  second: {
    name: "second",
    items: [],
  },
  third: {
    name: "third",
    items: [],
  },
  fourth: {
    name: "fourth",
    items: [],
  },
  fifth: {
    name: "fifth",
    items: [],
  },
};

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

function DND() {
  const [columns, setColumns] = useState(taskStatus);
  console.log(columns);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* <h1 style={{ textAlign: "center" }}>Jira Board</h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          marginTop: "150px",
        }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div
                  style={{
                    margin: 8,
                  }}
                >
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
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
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        isplay: "flex",
                                        flexDirection: "row",
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
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
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default DND;
