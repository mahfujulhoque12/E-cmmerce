"use client"
import { Button } from "@/components/atoms/Button";
import Paragraph from "@/components/atoms/Paragraph";
import React, { useState } from "react";

const Counter = () => {
    const [counter,setCounter] = useState(1)
    const [msg,setMsg] = useState("")


    
    const handleDec = () =>{

        if(counter > 1){
            setCounter(counter - 1)
        
        }
        else{
            setMsg("Minimun Requerment is 1")
            setTimeout(()=>(
                setMsg("")
            ),3000)
        }
      
    }

  return (
    <div>

 
    {msg && (
        <Paragraph className="text-red-500 mt-3">{msg}</Paragraph>
    )}
    <div className="flex justify-between mt-5">
       
      <div className="flex items-center border rounded-full shadow-md overflow-hidden">
       
        <Button type="button" variant="counterBtn" onClick={()=>handleDec()}>
          -
        </Button>

        <Paragraph className="lg:text-xl px-6 py-1 border-x bg-white">{counter}</Paragraph>

        <Button type="button" variant="counterBtn"
         onClick={()=>{
            setCounter(counter + 1)
            setMsg("")
        }}
         >
          +
        </Button>
      </div>

      <div>
        <Button type="button" variant="addToCartBtn">
          Add to cart
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Counter;
