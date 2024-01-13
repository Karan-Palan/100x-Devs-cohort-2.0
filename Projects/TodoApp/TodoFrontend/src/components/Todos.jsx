import React from "react";

export function Todos({ todos }) {
  const todoContainerStyle = {
    padding: 20,
    margin: 20,
    backgroundColor: "white", // White background color
    borderRadius: 10,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle lift
  };

  const todoTitleStyle = {
    color: "#3498db", // Dark blue text color
    marginBottom: 10,
  };

  const todoDescriptionStyle = {
    color: "#3498db", // Dark blue text color
    marginBottom: 15,
  };

  const buttonStyle = {
    padding: 10,
    backgroundColor: "#3498db", // Dark blue background color
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  };

  return (
    <div>
      {todos.map(function (todo, index) {
        return (
          <div key={index} style={todoContainerStyle}>
            <h1 style={todoTitleStyle}>{todo.title}</h1>
            <h2 style={todoDescriptionStyle}>{todo.description}</h2>
            <button style={buttonStyle}>
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
