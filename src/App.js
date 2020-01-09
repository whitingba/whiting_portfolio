import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/Navbar/index';
import Parallax1 from './components/Parallax1';
import Parallax2 from './components/Parallax2';
import Projects from './components/Projects/index'
import Parallax3 from './components/Parallax3';



function App() {
  return (
    <>
      <Navbar />
      <Parallax1 />
      {/* About Me component */}
      <Parallax2 />
      <Projects />
      <Parallax3 />
      {/* contact component */}

    </>
  );
}

export default App;
