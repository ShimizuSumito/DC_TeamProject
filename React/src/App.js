import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Start from './components/Start/Start';
import Register from './components/Start/Register/Register';
import Weather from "./components/Main/Weather/Weather";
import Timeline from "./components/Main/Timeline/Timeline";
import Check from "./components/Start/Register/Check";
import MyCloth from "./components/Main/MyCloth/MyCloth";
import Choose from "./components/Main/Choose/Choose";
import ClothRegister from './components/Main/ClothRegister/ClothRegister';
import Nav from './components/Main/Nav/Nav'; 
import RegisterSuccess from './components/Start/RegisterSuccess/RegisterSuccess';
import Mypage from'./components/Main/Mypage/Mypage.jsx';
function App() {
  return (
    <>
    <Router>
      <AppContent/>
    </Router>
    </>

  );
}

function AppContent(){
  const location = useLocation();
  const noNavRoutes = ['/', '/Register', '/Check', '/RegisterSuccess'];
  return(
    <div>
      {!noNavRoutes.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path="/Main" element={<Main />}/>
        <Route path="/Main/Weather" element={<Weather />}/>
        <Route path="/Main/Timeline" element={<Timeline />}/>
        <Route path="/Main/Choose" element={<Choose />}/>
        <Route path="/Main/ClothRegister" element={<ClothRegister />}/>
        <Route path="/Main/MyCloth" element={<MyCloth />} />
        <Route path="/" element={<Start />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Check" element={<Check />}/>
        <Route path="/RegisterSuccess" element={<RegisterSuccess />}/>
        <Route path="/Main/Mypage/" element={<Mypage/>}/>
      </Routes>
    </div>
  );
}

export default App;
