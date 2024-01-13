import { useState } from 'react'

// jsx is xml
function App() {
  const [count, setCount] = useState(0) //hook
  return(
    <div>
      <CustomButton count = {count} setCount = {setCount}></CustomButton>
    </div>
  )
}

// component 
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count+1)
  }
  return (
      <button onClick={onClickHandler}>
       {props.count}
      </button>
  )

}
import React from 'react'
// React code gets transpiled
/* 
function App() {

  return (
    <div>
      <Button></Button>
    </div>
  )
}

function Button(props) {
  const [count, setCount] = React.useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  return React.createElement(
    'button',
    { onClick: onButtonClick },
    `Counter ${count}`
  );
}

export default App
*/
export default App
