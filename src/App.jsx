
import Home from './pages/Home.jsx'
import Tasks from './pages/Tasks.jsx'
import Stats from './pages/Stats.jsx'
import Journal from './pages/Journal.jsx'
import Focus from './pages/Focus.jsx'
import Settings from './pages/Settings.jsx'
import { Routes , Route } from "react-router";
import Layout from './components/Layout.jsx'

function App() {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="focus" element={<Focus/>} />
        <Route path="journal" element={<Journal/>} />
        <Route path="tasks" element={<Tasks/>} />
        <Route path="stats" element={<Stats/>} />
        <Route path="settings" element={<Settings/>} />
      </Route>

    </Routes>

  )
}

export default App
