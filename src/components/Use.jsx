import { useState } from "react";
const Use = () => {
    const  [count, setCount] = useState(0);
    const handleCount = () => {
        console.log(count);
        setCount(count + 1);
    };
    return (
        <>
            <p>le compte est de : {count}</p>
            <button onClick={handleCount}>increment</button>
        </>
    );
};
export default Use;
