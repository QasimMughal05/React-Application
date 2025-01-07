import {useEffect, useState } from 'react'
import './App.css'
import AddNum  from './Components/Addnum';

function App(){
    const loggedin = false;
    const greet = "Hello User";
    const myclass = "text-4xl font-bold";
    // const num = [23,24,26,78,97];
    const [count, setCount ] = useState(0);
    const [num, setNum ] = useState(0);


    useEffect(()=>{
      console.log("use ran");
    });

    // const handleClick = () => {
    //   setCount(count + 1);
    //   console.log(count);
    // };


      return (
        <>
          <AddNum></AddNum>
          {/* <h1 className={myclass}>{loggedin ? greet : "Number Is"}</h1> */}
          <h1 className={myclass}> Number Is {count}</h1>
          <h1 className={myclass}> Number Is {num}</h1>

          {/* <button className='px-4 py-2 bg-blue-500 text-white' 
          onClick={handleClick}> Count</button> */}
                    <button className='px-4 py-2 bg-blue-500 text-white' 
          onClick={() => setCount(count + 1)}> Count</button> 
          <br/>
          <br/>
                              <button className='px-4 py-2 bg-blue-500 text-white' 
          onClick={() => setNum(num + 1)}> Add Num</button> 


          {/* <div className='text-2xl'>
            {num.map((el) => (
                <h3 key={el}>{el}</h3>
            ))}
          
          </div> */}
        </>
      )

}
  

export default App
