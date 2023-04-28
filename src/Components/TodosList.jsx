import React, { useContext} from 'react'
import { GlobalData } from './Context';
import './CSS files/TodosList.css'
const TodosList = () => {
    const { todolist, setTodolist, setInputVal,setId, setToggle } = useContext(GlobalData)
    const Deletefun = (id) => {
        const result = todolist.filter((ele) => {
            return ele.key !== id;
        })
        setTodolist(result)
    }
    const Editfun = (id)=>{
        const editresult= todolist.find((ele)=>{
            return ele.key === id;
        })
        setInputVal(editresult.inputVal)
        setId(id)
    }
    return (
        <div className='TodosList'>
            {
                todolist.length > 0 ?
                    todolist.map((ele, idx) => {
                        return <div className='listitem'>
                            <input type="checkbox" />
                            <h1 style={{width:"80%"}}>{ele.inputVal}</h1>
                            <button onClick={()=>{
                                Editfun(ele.key)
                                setToggle(false)
                            }}>edit</button>
                            <button onClick={() => {
                                Deletefun(ele.key)
                            }}>Del</button>
                        </div>
                    })
                    :
                    <div className='listitem'>
                        <h1 style={{marginTop:"50px"}}>Data Not Found</h1>
                    </div>
            }
        </div>
    )
}

export default TodosList