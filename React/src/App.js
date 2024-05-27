import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Start from './components/Start/Start';
import Register from './components/Start/Register/Register';
import Weather from "./components/Main/Weather/Weather";
import Timeline from "./components/Main/Timeline/Timeline";
import Check from "./components/Start/Register/Check";
import Mypage from "./components/Main/Mypage/Mypage";
import Choose from "./components/Main/Choose/Choose";
import RegisterSuccess from './components/Start/RegisterSuccess/RegisterSuccess';
import ClothRegister from './components/Main/ClothRegister/ClothRegister';
import Nav from './components/Main/Nav/Nav'; // Nav コンポーネントをインポートする

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const noNavRoutes = ['/', '/Register', '/Check', '/RegisterSuccess'];

  return (
    <>
      {/* Nav コンポーネントを条件付きでレンダリング */}
      {!noNavRoutes.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/Register' element={<Register />} />
        <Route path="/Check" element={<Check />} />
        <Route path="/RegisterSuccess" element={<RegisterSuccess />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Main/Weather" element={<Weather />} />
        <Route path="/Main/Timeline" element={<Timeline />} />
        <Route path="/Main/MyPage" element={<Mypage />} />
        <Route path ="/Main/Choose" element={<Choose />} />
        <Route path="/Main/ClothRegister" element={<ClothRegister/>} />
      </Routes>
    </>
  );
}

export default App;
