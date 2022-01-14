import React from "react";
import ReactPlayer from "react-player";
import {useState} from "react"



export function SearchField(){
    const [input, setInput] = useState("")
    function handleChange(e){
       const text = e.target.value;
       setInput(text)
    }

    console.log("This is our text", input)
    return <form><input type="text" placeholder="Enter keyword" onChange={handleChange}></input>
    <button type="submit">Submit</button>
    </form>

}
