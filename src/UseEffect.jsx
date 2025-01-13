import { useEffect, useState } from "react";

function UseEffect(){
    // useEffect(setup, dependencies?)

    const [count, setcount] = useState(0);
    const [count2, setcount2] = useState(0);

    useEffect( () => {
        // setcount(count+1)
        console.log("useEffect const")},[count]);
    
    return(
        <>
        <h1>React Hook : UseEffect</h1>
        <button onClick={()=>setcount(count+1)}>Count {count}</button>

        <button onClick={()=>setcount2(count2+1)}>Count {count2}</button>
        </>
    );
}
export default UseEffect;