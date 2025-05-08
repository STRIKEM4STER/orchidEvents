import { BrowserRouter,Routes,Route } from "react-router-dom"
import Event from "./Wedding"
import ReviewSection from "./review"

function App() {
  

  return (

    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Event/>} />        
        <Route path="/review" element={<ReviewSection/>} />  
        </Routes>
      
      </BrowserRouter>
    </div>

  )
}

export default App
