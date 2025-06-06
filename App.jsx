import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Lesson1 from "./pages/Lesson1"
import Lesson2 from "./pages/Lesson2"
import Lesson3 from "./pages/Lesson3"
import Lesson4 from "./pages/Lesson4"
import Lesson5 from "./pages/Lesson5"
import Lesson6 from "./pages/Lesson6"
import Lesson7 from "./pages/Lesson7"
import Lesson8 from "./pages/Lesson8"
import Lesson9 from "./pages/Lesson9"
import "./styles/App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lesson2" element={<Lesson2 />} />
          <Route path="/lesson3" element={<Lesson3 />} />
          <Route path="/lesson4" element={<Lesson4 />} />
          <Route path="/lesson5" element={<Lesson5 />} />
          <Route path="/lesson6" element={<Lesson6 />} />
          <Route path="/lesson7" element={<Lesson7 />} />
          <Route path="/lesson8" element={<Lesson8 />} />
          <Route path="/lesson9" element={<Lesson9 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
