import {useEffect, useState } from 'react'

const AddNum = (props)=>
{
    return (
        <>
        <h1> Add Num </h1>
        <h1 className={props.myStyle}> Number Is {props.count}</h1>

        <button className='px-4 py-2 bg-blue-500 text-white' 
          onClick={props.handleAdd}> Count</button> 
          <br/>
          <br/>
          {props.children}
        </>

    )
}

export default AddNum;