import React, { createContext } from "react";
import Students from "./Students";
const data=createContext()
const ContextData = () => {
  return (
    <div>ContextData
        <data.Provider >
            <Students/>
        </data.Provider>
    </div>
  )
}

export default ContextData
export {data}