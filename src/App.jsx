import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Skills from './assets/components/skills.jsx';
import Loading from './assets/components/loading.jsx';
import Home from './assets/components/home.jsx';
import Projects from './assets/components/projects.jsx';
function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={loaded ? <Home /> : <Loading />} />
          {/* Add other routes here as needed */}
          <Route path="/projects" element={<Projects />} />
          {/* Add other routes here as needed */}
          <Route path="/skills" element={<Skills/>}></Route>
        </Routes>
      </Router>
    </>
  )
}


export default App;
