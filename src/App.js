import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import Layouts from "./Layouts";
import Home from './pages/Home/Home'

import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Layouts>
        <Home />
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </Layouts>
    </BrowserRouter>
  );
}

export default App;

// "swiper": "6.8.4",
