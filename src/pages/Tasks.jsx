import { useState } from "react"

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
  return (
    <div className="tasks">
      <h1> Tasks </h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input className="rounded-xl  border-r p-4 bg-surface "
        value={task}
        onChange={e=> setTask (e.target.value) }/>
        <button type="submit" className="rounded-xl p-2 bg-surface text-ink hover:bg-sage hover:text-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">Add</button>
       
      </form>
      <ul className="flex flex-col gap-3">
        {list.map((item) => (
          <li key={item.id} className="rounded-xl border p-4 bg-surface text-ink hover:bg-sage hover:text-white">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
 
}

export default Tasks