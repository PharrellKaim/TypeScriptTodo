import React, {ChangeEvent, useState} from 'react'
import {ITask} from "./Interfaces.ts";
import TodoTask from "./TodoTask.tsx";
import "./App.css";

const App:React.FC =() => {
  //const [count, setCount] = useState(0)
    const [task, setTask] = useState<string>(""); //todo: limitation
    const [deadline, setDeadLine] = useState<string>(""); //todo: only allow numbers
    const [todo, setTodo] = useState<ITask[]>([]);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
        if(event.target.name == "task"){
            setTask(event.target.value);
        }else{
            setDeadLine(event.target.value);
        }
    }

    const addTask = () =>{
        const newTask ={
            taskName:task,
            taskDeadline:deadline
        }
        setTodo([...todo, newTask]);
        setTask("");
        setDeadLine("");
    }

    const completeTask = (taskNameToDelete: string) => {
        setTodo(todo.filter((task) => {
            return task.taskName != taskNameToDelete
        }))
    }

    return (
   <div className={"App"}>
       <h1>TODO APP</h1>
    <div className={"Header"}>
        <h3>Create a new ToDo:</h3>
        <div className={"InputContainer"}>
            <input type={"text"} name={"task"} placeholder={"Input the name of the task"} value={task} onChange={handleChange}/>
            <input type={"text"} name={"deadline"} placeholder={"Input your deadline in Days or Date"} value={deadline} onChange={handleChange}/>
        </div>
    </div>
       <button onClick={addTask}>Add</button>
    <div className={"TodoList"}>
        {todo.map((task:ITask, key:number)=> {
            return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
    </div>
   </div>
  )
}

export default App
