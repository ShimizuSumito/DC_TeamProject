import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function Test() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="overview">Overview</Link></li>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="profile">Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="overview" element={<DashboardOverview />} />
        <Route path="settings" element={<DashboardSettings />} />
        <Route path="profile" element={<DashboardProfile />} />
      </Routes>
    </div>
  );
}
function DashboardHome() {
  return <h3>Dashboard Home</h3>;
}
function DashboardOverview() {
  return <h3>Dashboard Overview</h3>;
}
function DashboardSettings() {
  return <h3>Dashboard Settings</h3>;
}
function DashboardProfile() {
  return <h3>Dashboard Profile</h3>;
}
export default Test;