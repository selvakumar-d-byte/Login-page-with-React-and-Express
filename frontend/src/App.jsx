import Login from "./Login"
import Signup from "./Signup"
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-red-950 to-black flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App