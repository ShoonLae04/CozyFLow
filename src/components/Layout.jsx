import { NavLink, Outlet } from "react-router";

function Layout(){
   const linkClass=  ({isActive}) =>

   isActive 
   ? "px-4 py-2 rounded-xl bg-sage text-white border-2 border-peach"
   : "px-4 py-2 rounded-xl hover:bg-cream text-ink border-2 border-sage"
        
    return (
        <div className="flex min-h-screen">
            
            <nav className="flex flex-col p-4 w-56 gap-8 bg-surface border-r border-line">
                <h1 className = "font-heading text-xl font-semibold mb-6 px-4"> CozyFlow</h1>
                <NavLink to="/" end className= {linkClass}>Home</NavLink>
                <NavLink to="/focus" className= {linkClass}>Focus</NavLink>
                <NavLink to="/journal"className= {linkClass}>Journal</NavLink>
                <NavLink to="/settings"className= {linkClass}>Settings</NavLink>
                <NavLink to="/stats"className= {linkClass}>Stats</NavLink>
                <NavLink to="/tasks"className= {linkClass}>Tasks</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )

}
export default Layout