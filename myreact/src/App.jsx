import { useState } from "react";

export default function App(){
    const[count,setCount]=useState(0);
    return(
        <div>
       <center>{count}</center>
<button onClick={()=>setCount(count+1)}>increment</button>
<button onClick={()=>setCount(count-1)}>decrement</button>
<button onClick={()=>setCount(count-1)}> double increment</button>    
<button onClick={()=>setCount(count-1)}> double decrement</button>         
        </div>
    )
}