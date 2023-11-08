import React, { useEffect } from 'react'
import {v4 as uuidv4} from "uuid"

export default function Form({input, setInput, todo, setTodo, editTodo, setEditTodo}) {

    const handleChange = (e) =>{
        setInput(e.target.value)
    }

    const updateTodo=(title, id, completed)=>{
        const updated = todo.map((to)=>(
            to.id === id ? {title, id, completed} : todo
        ))
        setTodo(updated)
        setEditTodo("")
    }

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title)
        }else{
            setInput("")
        }
    },[setInput,editTodo])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!editTodo){
            setTodo([...todo,{id: uuidv4(), title: input, completed: false}])
            setInput("")
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder='Enter your todo' onChange={handleChange} value={input}/>
        <button type='submit'>{editTodo ? "Edit" : "Add"}</button>
      </form>
    </div>
  )
}
