import React, { useState } from 'react'

function Simplecounter(){

const [value, setValue] = useState(0);



    return(
        <div>
        <h1>Simple Counter</h1>
        <h2>{value}</h2>
        <button onClick={()=>{setValue(value+1)}}>Increase</button>
        <button onClick={()=>{setValue(0)}}>Reset</button>
        <button onClick={()=>{setValue(value-1)}}>Decrease</button>
        <hr></hr>
        </div>
    )
}





export default Simplecounter;