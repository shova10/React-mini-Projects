import React,{useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    };

    const decrement = () => {
        setCount(prevCount => Math.max(prevCount - 1));
    };

    const reset = () => {
        setCount(0);
    };


    return(
        <div>
            <h2>Simple Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

}
export default Counter;