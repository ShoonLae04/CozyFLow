import { useState } from "react"
import { Trash } from "lucide-react";
import {CirclePlus } from "lucide-react";

function Tasks() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    if (task.trim()===""){
      return;
    }
    const newTask ={
      id:crypto.randomUUID(),
      title:task.trim(),
      status:"active",

    };
    setList([newTask, ...list]);
    setTask("");


  }
  function handleDelete(id){
  
    setList(list.filter(a=>
      a.id!== id
      ))
  }
  return (
    <div className="tasks">
      <h1> Tasks </h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input className="rounded-xl  border-r p-4 bg-surface "
        value={task}
        onChange={e=> setTask (e.target.value) }/>
        <button type="submit" className="rounded-xl px-3 py-1 text-sm bg-periwinkle text-ink border-2 border-dustyrose hover:bg-dustyblue hover:text-white hover:border-dustyrose transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"><CirclePlus size={18}/></button>
       
      </form>
      <ul className="flex flex-col gap-3">
        {list.map((item) => (
          <li key={item.id} className="flex justify-between items-center rounded-xl border   p-4 bg-surface text-ink ">
            {item.title}<button  className="rounded-xl px-3 py-1 text-sm bg-honey/40 text-slateblue border-2 border-dustyrose hover:bg-honey hover:text-white hover:border-dustyrose transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg" onClick={() => handleDelete(item.id)}
        
              ><Trash size={18} /></button>
          </li>
          
        ))}
        
      </ul>
    </div>
  );
 
}

export default Tasks