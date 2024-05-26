import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Start from './components/Start/Start';
import Home from "./components/Main/Home/Home";
import Weather from "./components/Main/Weather/Weather";
import Timeline from "./components/Main/Timeline/Timeline";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/" element={<Start />} />
        <Route path="/Main/Home" element={<Home />} />
        <Route path="/Main/Weather" element={<Weather />} />
        <Route path="/Main/Timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
