import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Start from './components/Start/Start';
import Register from './components/Start/Register/Register';
import Weather from './components/Main/Weather/Weather';
import Timeline from './components/Main/Timeline/Timeline';
import Check from './components/Start/Register/Check';
import MyCloth from './components/Main/MyCloth/MyCloth';
import Choose from './components/Main/Choose/Choose';
import ClothRegister from './components/Main/ClothRegister/ClothRegister';
import Nav from './components/Main/Nav/Nav';
import RegisterSuccess from './components/Start/RegisterSuccess/RegisterSuccess';
import Mypage from './components/Main/Mypage/Mypage';
import Recommend from './components/Main/Recommend/Recommend';
import CreateTimeline from './components/Main/CreateTimeline/CreateTimeline';
import Loading from './Loading';
import { AnimatePresence } from 'framer-motion';

// ユーザー情報コンテキストの作成
export const UserContext = createContext();

function App() {
  return (
    <AnimatePresence>
      <Router>
        <AppContent />
      </Router>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const noNavRoutes = ['/', '/Register', '/Check', '/RegisterSuccess'];
  const [userinfo, setUserinfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ローディング状態をシミュレート
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4秒後にローディングを終了

    // クリーンアップ関数
    return () => clearTimeout(loadTimer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider value={{ userinfo, setUserinfo }}>
      <div>
        {!noNavRoutes.includes(location.pathname) && <Nav />}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Start />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Check" element={<Check />} />
          <Route path="/RegisterSuccess" element={<RegisterSuccess />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Main/Weather" element={<Weather />} />
          <Route path="/Main/Timeline" element={<Timeline />} />
          <Route path="/Main/Choose" element={<Choose />} />
          <Route path="/Main/ClothRegister" element={<ClothRegister />} />
          <Route path="/Main/MyCloth" element={<MyCloth />} />
          <Route path="/Main/Mypage" element={<Mypage />} />
          <Route path="/Main/Recommend" element={<Recommend />} />
          <Route path="/Main/CreateTimeline" element={<CreateTimeline />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
