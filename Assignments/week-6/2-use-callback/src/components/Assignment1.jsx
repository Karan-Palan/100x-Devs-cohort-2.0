import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here

  const memoisedHandleIncrement = useCallback(() => {
    // Why did I add count as the dependency - If you are using a state variable , add it as a dependency
    setCount(count + 1);
    // Alter native better method - I wont have to add count as a dependency here 
    /*
    setCount(function(currentCount) {
      currentCount = currentCount + 1;
    })
    */
  }, [count]);

    
  const memoisedHandleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={memoisedHandleIncrement}
        onDecrement={memoisedHandleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
