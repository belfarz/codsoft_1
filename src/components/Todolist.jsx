import React from 'react'
import {MdDeleteOutline} from "react-icons/md"
import {MdOutlineEditCalendar} from "react-icons/md"
import {AiOutlineCheckCircle} from "react-icons/ai"

export default function Todolist({todo, setTodo, setEditTodo}) {

    const handleEdit=({id})=>{
        const findTodo = todo.find((todo)=> todo.id === id)
        setEditTodo(findTodo)
    }

    const handleDelete =({id})=>{
        setTodo(todo.filter((to)=>to.id !== id))
    }

    const handleSave=(todos)=>{
        setTodo(
            todo.map((to)=>{
                if (todos.id === to.id) {
                    return {...to, completed: !to.completed}
                }
                return to;
            })
        )
        console.log(todos.completed)
    }
  return (
    <div>
      {
        todo.map((to)=>(
            <li className='todo-list' key={to.id}>
                <input 
                    type="text" 
                    value={to.title} 
                    className='todo'
                    onChange={(e)=> e.preventDefault()}
                />
                <div className='icons'>
                    <AiOutlineCheckCircle size={20} onClick={()=>handleSave(to)} className={to.completed ? "green" : ""}/>
                    <MdOutlineEditCalendar size={20} onClick={()=>handleEdit(to)}/>
                    <MdDeleteOutline size={20} onClick={()=>handleDelete(to)}/>
                    
                </div>
            </li>
        ))
      }
    </div>
  )
}
