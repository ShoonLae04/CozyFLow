

function Focus() {
  
  return (
    <div className=" w-full h-full flex flex-col ">
      <h1 className="font-heading text-2xl font-semibold mb-4">Focus</h1>
      <div className="grid vgrid-cols-1 md:grid-cols-3 md:grid-rows-[1fr_auto] flex-1 gap-4 ">

        <div className="md:col-span-2 flex flex-col items-center  bg-peach/10 rounded-xl p-4 border-1 border-r border-periwinkle">
        
          <div className="flex justify-center  gap-2 mb-4 ">
            <button className="bg-sage rounded-full px-4 py-1 text-ink  ">Focus</button>
            <button className="bg-sage rounded-full px-4 py-1 text-ink ">Break</button>
          </div>
          <div className ="flex-1 flex  items-center justify-center py-3">
            <p className ="text-6xl font-heading font-bold text-ink">25:00</p>
          </div>       
          <div className=" flex justify-center gap-3">
            <button className="bg-sage text-white rounded-full px-5 py-1">Start</button>
            <button className="border border-sage text-ink rounded-full px-5 py-1">Pause</button>
            <button className="border border-sage text-ink rounded-full px-5 py-1">Reset</button>

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