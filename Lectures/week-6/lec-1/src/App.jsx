import { useState } from "react"

// let GLOBAL_ID = 4;
function App() {
  // Key in react
/*
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    id: 2,
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    id: 3,
    title: "Eat foor",
    description: "Need to eat food from 2-4 PM"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: GLOBAL_ID++,
      title: "new todo",
      description: "new todo desc"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, index) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
*/
  //Wrapper in React
  // <CardWrapper innerComponent = {TextComponent }/> // But you wont use this
  <CardWrapper >
    hi there
  </CardWrapper>
}
/*
function TextComponent() {
  return (
    <div>
      Hi there
    </div>
  )
}
*/

function CardWrapper({children}) {
  return (
    <div style={{border: "2px solid black"}}>
     {children}
    </div>
  )
}


export default App