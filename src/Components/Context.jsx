import { createContext, useState } from "react";

export const GlobalData = createContext();
const DataProvider = ({children})=>{
    const [todolist , setTodolist] = useState([])
    const [inputVal, setInputVal] = useState("")
    const [id,setId] = useState(null)
    const [toggle, setToggle] = useState(true);
    
    return (
        <GlobalData.Provider value={{todolist, setTodolist, inputVal, setInputVal, id, setId ,toggle , setToggle }}>
            {children}
        </GlobalData.Provider>
    )
}
export default DataProvider;