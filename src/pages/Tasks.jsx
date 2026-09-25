import { useState ,useEffect  } from "react"
import { Trash } from "lucide-react";
import {CirclePlus } from "lucide-react";

function Tasks() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(()=>{
    const saved = localStorage.getItem("cozyflow-tasks");
    return saved ? JSON.parse(saved) : [];
  }
  );

  const [filter, setFilter] = useState("all");
  useEffect(()=>{
    localStorage.setItem("cozyflow-tasks", JSON.stringify(list));
  }, [list] );

  function handleSubmit(e){
    e.preventDefault();
    if (task.trim()===""){
      return;
    }
    const newTask ={
      id:crypto.randomUUID(),
      title:task.trim(),
      status:"active",
      completedDate: null
    };
    setList([newTask, ...list]);
    setTask("");


  }
  function handleDelete(id){
  
    setList(list.filter(a=>
      a.id!== id
      ))
  }

  function toggleTask(id){
    setList(prev => prev.map(item=> {
     
      if (item.id !== id) return item; 
      const nextStatus = item.status === "active"? "completed" : "active";
      const nextDate = nextStatus === "completed" ?  new Date().toISOString() : null ;

      return { ...item, status: nextStatus, completedDate: nextDate };
     
    }));

  }
  const visibleTasks = list.filter((item)=> {
    if (filter === "active") return item.status === "active";
    if(filter === "completed") return item.status === "completed";
    return true;

  });  
  const FILTERS = [
    {value: "all", label: "All"},
    {value: "active", label: "Active"},
    {value: "completed", label: "Completed"}
  ];
  

  
  return (
    <div className="tasks">
      <h1> Tasks </h1>
      <form onSubmit={handleSubmit} className="w-full flex gap-2 mb-6">
        <input className="w-full rounded-xl  border-r px-4 py-2 bg-surface "
        value={task}
        onChange={e=> setTask (e.target.value) }/>
        <button type="submit" className="rounded-xl px-4 py-2 text-sm bg-sage text-ink border-2 border-peach hover:bg-peach hover:text-white hover:border-sage transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"><CirclePlus size={18}/></button>
       
      </form>

      <div className=" flex gap-5 mb-4">
        {FILTERS.map((f)=> (
          <button
          key = {f.value}
            onClick ={()=>setFilter(f.value)}
            className= "px-3 py-2 rounded-xl bg-periwinkle text-sm text-ink border-2 border-dustyrose hover:bg-dustyblue hover:text-white transition duration-300 ease-in-out hover:scale-105  hover:shadow-lg "
          >{f.label}
          </button>
        ))}
      </div>

      <ul className="w-full flex flex-col justify-between items-center gap-3">
        {visibleTasks.map((item) => (
          <li key={item.id} className="w-full flex justify-between items-center rounded-xl border   p-4 bg-surface text-ink ">
            <div className="flex items-center gap-3">
              <input
                type ="checkbox"
                checked={item.status === "completed"}
                onChange = {()=> toggleTask(item.id)}
              />
              <span className={item.status === "completed" ? "line-through opacity-60" : ""}>
                {item.title}
              </span>
            
            </div>
  
            <button  className="rounded-xl px-3 py-1 text-sm bg-honey/40 text-slateblue border-2 border-dustyrose hover:bg-honey hover:text-white hover:border-dustyrose transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg" 
             onClick={() => handleDelete(item.id)}>
            <Trash size={18} />
            </button>
            
           
          </li>
          
        ))}
        
      </ul>
    </div>
  );
 
}

export default Tasks