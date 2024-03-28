import {ITask} from "./Interfaces.ts";
import "./TodoTask.css";

interface Props{
    task:ITask;
    completeTask(taskNameToDelete:string):void;
}

const TodoTask = ({task, completeTask}:Props) =>{
    return(
      <div className={"task"}>
        <div className={"content"}>
            <div className={"checkboxWrapper"}>
                <input type={"checkbox"}/>
                <span>{task.taskName}</span>
                <span>{task.taskDeadline}</span>
            </div>
        </div>
        <div className={"button"}>
        <button onClick={()=>{
            completeTask(task.taskName);
        }}
        >Delete</button>
        </div>
      </div>
    );
}

export default TodoTask;