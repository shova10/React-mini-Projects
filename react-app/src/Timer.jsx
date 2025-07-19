import React,{useState, useEffect} from "react";

function Timer(){
    const [seconds, setSeconds] = useState(0);

    useEffect ( () => {
        const intervalID = setInterval (() => {
            setSeconds(prevSeconds => prevSeconds+1);
        }, 1000);
        return () => {
            clearInterval(intervalID);
            console.log('Timer cleanup performed');
        };
    }, []);

    return(
        <div>
            <h2>Simple Timer</h2>
            <p>Elapsed  Time: {seconds} seconds</p>
        </div>
    );
}
export default Timer;