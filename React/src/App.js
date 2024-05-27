import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Start from './components/Start/Start';
import Register from './components/Start/Register/Register';
import Weather from "./components/Main/Weather/Weather";
import Timeline from "./components/Main/Timeline/Timeline";
import Check from "./components/Start/Register/Check";
import Mypage from "./components/Main/Mypage/Mypage";
import RegisterSuccess from './components/Start/RegisterSuccess/RegisterSuccess';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/Register' element={<Register />} />
        <Route path="/Check" element={<Check />} />
        <Route path="/RegisterSuccess" element={<RegisterSuccess/>}/>
        <Route path="/Main" element={<Main />}/>
        <Route path="/Main/Weather" element={<Weather />}/>
        <Route path="/Main/Timeline" element={<Timeline />}/>
        <Route path="/Main/MyPage" element={<Mypage />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
