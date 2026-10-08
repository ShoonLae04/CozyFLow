
import { useState, useEffect, useRef } from "react";

const MINUTE = 60 * 1000;
// Turns milliseconds into "MM:SS"
function formatTime(ms) {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds/60);   // Math.floor, and how many seconds in a minute?
  const seconds = totalSeconds%60;  //  the remainder operator %
  // String(...).padStart(2, "0") turns 5 into "05"
  return `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}
function Focus() {
  const [length] =useState({focus :25  , break:5});
  const [mode, setMode] = useState("focus");
  const [remaining , setRemaining ] = useState(length.focus* MINUTE );
  const [isRunning , setIsRunning ] = useState(false);
  
  const endTimeRef = useRef(null);

  function changeMode(newMode){
    setMode(newMode);
    setRemaining(length[newMode]*MINUTE); 

  }
  function start(){
    
    endTimeRef.current = Date.now() + remaining; 
    setIsRunning(true);

  }
  function pause(){
    setIsRunning(false);
  }
  function reset(){
    setIsRunning(false);
    setRemaining(length[mode]*MINUTE);
  }
  useEffect(() => {
    if (!isRunning) return;     // not counting? do nothing

    const id = setInterval(() => {
      const left = Math.max(0,endTimeRef.current - Date.now());
      setRemaining(left) // tick: update remaining
      if (left===0){
        setIsRunning(false);
      }
    }, 250);

    return () => clearInterval(id);   // cleanup: stop ticking
  }, [isRunning]);                     // re-run when isRunning changes
  
  return (
    <div className=" w-full h-full flex flex-col ">
      <h1 className="font-heading text-2xl font-semibold mb-4">Focus</h1>
      <div className="grid vgrid-cols-1 md:grid-cols-3 md:grid-rows-[1fr_auto] flex-1 gap-4 ">

        <div className="md:col-span-2 flex flex-col items-center  bg-peach/10 rounded-xl p-4 border-1 border-r border-periwinkle">
        
          <div className="flex justify-center  gap-2 mb-4 ">
            
            <button onClick ={()=> changeMode("focus")}  className={`rounded-full px-4 py-1 ${mode === "focus" ? "bg-sage text-white" : "border border-sage text-ink"}`}>Focus</button>
            <button onClick ={()=> changeMode("break")}className={`rounded-full px-4 py-1 ${mode === "break" ? "bg-sage text-white" : "border border-sage text-ink"}`}>Break</button>
          </div>
          <div className ="flex-1 flex  items-center justify-center py-3">
            <p className ="text-6xl font-heading font-bold text-ink">{formatTime (remaining)}</p>
          </div>       
          <div className=" flex justify-center gap-3">
            <button onClick={start} className={`rounded-full px-5 py-1 ${isRunning ? "bg-sage text-white" : "border border-sage text-ink"}`}>Start</button>
            <button onClick={pause} className={`rounded-full px-5 py-1 ${!isRunning ? "bg-sage text-white" : "border border-sage text-ink"}`}>Pause</button>
            <button onClick={reset}className="rounded-full px-5 py-1 border border-sage text-ink hover:bg-sage/20 active:scale-95 transition">Reset</button>

          </div>
            
        </div>

        <div className="flex flex-col  bg-peach/10 rounded-xl p-4 border-1 border-r border-periwinkle gap-4">
          <div className=" flex flex-1 justify-center items-center text-center bg-peach text-ink p-2 rounded-lg">Today's Progress</div>
          <div className="flex flex-1 justify-center items-center text-center bg-peach text-ink p-2 rounded-lg">Insights</div>
        </div>
        <div className="md:col-span-3 flex justify-center items-center gap-6 bg-peach/10 rounded-xl p-4 border border-periwinkle">
          <p>Working on: [Read chapter 4 of Biology]</p>
          <button className="text-sage">+ Quick-add task</button>
        </div>

        

      </div>
  
    </div>
  )
}

export default Focus