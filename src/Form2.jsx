import { useContext, useRef, useState } from "react";
import { MyContext } from "./MyContext";

let nextid = 2
const Form2 =  () => {
    const title = useRef();
    const {post, setpost }  = (useContext(MyContext));
    console.log(useContext(MyContext));
    const handleAdd = () =>{
        setpost([...post, {id: nextid++, title:title.current.value}])
    }

    return(
        <>
            <input type="text" name="username" placeholder="Name"
            className="border border-blue-500 mb-2" ref={title}/><br/> 

            <button className="border border-blue-500" onClick={handleAdd}> Add </button>
        </>
    );
};
export default Form2;
