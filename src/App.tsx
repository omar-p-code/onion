import { Route, Routes } from "react-router-dom";
import { Hero } from './pages';

function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element={<Hero/>} />
    </Routes>
    </>
  )
}

export default App
