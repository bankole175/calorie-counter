import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar";

function App() {

  return (
    <div className="mb-4 px-3 pt-5">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App
