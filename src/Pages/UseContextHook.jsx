import { useState } from "react";
import Posts from "../Components/Posts";
import { MyContext  } from "../MyContext";


function UseContextHook() {

    //   const [user, setuser] = useState('Jhon');
    const [post, setpost] = useState([{id:1, title: "post 1"}]) //array
    return(
        <MyContext.Provider value={{post, setpost}}>
            <h1 className="title"> React Hook : UseContext</h1>
            {/* <Form2/> */}
            <Posts/>
        </MyContext.Provider> 
    )

}
export default UseContextHook;