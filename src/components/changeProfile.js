import { useState } from "react"
// import { AppContext } from "../App";
// import { useContext } from "react";
export const ChangeProfile = () => {
    const [newusername, setNewusername] = useState("") 
    return (
        <div>
            <input onChange={(e) => {
                setNewusername(e.target.value);
            }}/>
            <button onClick={() => {
                // props.setUsername(newusername)
                setNewusername(newusername)
                }}> Change Username </button>
        </div>
    )
}
