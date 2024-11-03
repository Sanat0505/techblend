import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Header from "./components/Header";
import Aos from "aos";

function App() {
  Aos.init();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen font-Mulish rounded-lg flex items-center justify-center p-10 relative">
      {/* <Team /> */}
      <div className="flex flex-col font-monda shadow-box_shadow rounded-lg ">
        <BrowserRouter>
          <Header setOpen={setOpen} headerOpen={open} />
          <div className={` flex-1 ${open ? 'hidden' : 'block'}`}>
            <Routes>
              <Route path="/" element={<About />} />
            </Routes>
            
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
