import { useReducer } from "react";
const SimplEX = () => {
    const [name, setname] = useReducer((state,action)=>{
        return state +  action
     },
        'mike')

    console.log(useReducer());

    return(
        <>
            <div>
            <h1>{name}</h1>
            <button onClick={()=>{setname("jon")}}>change</button>


            </div>
        </>
    )
}
export default SimplEX;