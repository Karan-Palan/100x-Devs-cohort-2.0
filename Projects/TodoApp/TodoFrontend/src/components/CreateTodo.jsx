import { useState } from "react";

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #3498db, #87CEEB)", // Dark blue to light blue gradient background
  };

  const inputStyle = {
    padding: 10,
    margin: 10,
    border: "1px solid #3498db", // Dark blue border color
    borderRadius: 5,
    outline: "none",
  };

  const buttonStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: "#3498db", // Dark blue background color
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <input
        id="title"
        style={inputStyle}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        id="desc"
        style={inputStyle}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <button
        style={buttonStyle}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
