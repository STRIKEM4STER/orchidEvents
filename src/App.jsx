import { BrowserRouter,Routes,Route } from "react-router-dom"
import Event from "./Wedding"

function App() {
  

  return (

    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Event/>} />         
        </Routes>
      
      </BrowserRouter>
    </div>

  )
}

export default App
