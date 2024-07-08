import React, { lazy, Suspense } from 'react';
import { Routes, BrowserRouter, Route, useNavigate } from 'react-router-dom';

const Landing = lazy(() => import('./components/Landing'));
const Dashboard = lazy(() => import('./components/Dashboard'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          } />
          <Route path='/' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Landing />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div style={{ background: "black", height: "50px", color: "whitesmoke" }}>
      <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
      <button onClick={() => navigate("/")}>Landing Page</button>
    </div>
  );
}

export default App;
