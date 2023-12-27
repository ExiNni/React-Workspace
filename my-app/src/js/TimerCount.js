import React, {useState, useEffect} from "react";

function TimerCount(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const reset= ()=>{
        setCount(0);
    }

    const decrement = () =>{
        setCount(count - 1);
    }
    useEffect(() => {
        document.title = `${count}`;
    })

    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click
            </button>

            <button onClick={increment}>
                클릭
            </button>

            <button onClick={decrement}>
                감소
            </button>

            <button onClick={reset}>
                초기화
            </button>
        </div>
    )
}

export default TimerCount;