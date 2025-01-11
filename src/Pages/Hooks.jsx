import { useState } from "react";

function Hooks() {
    const [title, setTitle] = useState({
        id:1,
        body: 'post body'
    });
    console.log(title);

    return(
        <>
            <h1 className="font-black text-4xl"> React Hooks</h1>
            <h1>{title.id}</h1>
            <h1>{title.body}</h1>

            <input type="text" className="border-1"  
                value={title.body} 
                onChange={(e)=>{setTitle({...title,body:e.target.value})}}/>
            
            <button className="bg-slate-300" onClick={()=>{setTitle({...title,id:2})}}>Change</button>

        </>
    )
}
export default Hooks;