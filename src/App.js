import React, { useEffect, useState } from "react";

import Team from "./components/Team";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Aos from "aos";

function App() {
  Aos.init();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen font-LuckiestGuy rounded-lg flex items-center justify-center p-5 relative">
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
      {/* <Footer /> */}

      </div>
    </div>
  );
}

export default App;
