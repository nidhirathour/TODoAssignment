import { useContext, useState } from 'react'
import './CSS files/Inputtodo.css';
import { GlobalData } from './Context';

const InputTodo = () => {
  const { setTodolist, todolist, setInputVal, inputVal, toggle,id,setToggle,setId } = useContext(GlobalData)
  const [disable,setDisable] = useState(true)
  const Addtodo = () => {
    if (!toggle) {
      setTodolist(todolist.map((ele)=>{
        if(ele.key === id){
          return { ...ele, inputVal}
        }
        return ele;
      }))
      setInputVal("")
      setToggle(true)
      setId(null)
    } else {
      setTodolist([...todolist, { inputVal: inputVal, key: Date.now() }])
      setInputVal(" ")
      setDisable(true)
    }
  }
  return (
    <div className='inputTodo'>
      <div className='textDiv'>

        <input type="text" value={inputVal} placeholder='Addtodo...' onChange={(e) => {
          setInputVal(e.target.value)
          if(e.target.value !== ""){
            setDisable(false)
          }else{
            setDisable(true)
          }
        }} />
        <button disabled={disable} onClick={()=> Addtodo()}>Add</button>
      </div>
    </div>
  )
}

export default InputTodo