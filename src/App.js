import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import ProjectDetails from './components/ProjectDetails/ProjectDetails.jsx';
import Account from './pages/Account/Account';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Projects from "./pages/Projects/Projects.jsx";
import Layout from './Layout.jsx';
import Leave from './pages/Leave/Leave.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Layout><Dashboard /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/projects/details" element={<Layout><ProjectDetails /></Layout>} />
          <Route path="/leave" element={<Layout><Leave /></Layout>} />
          <Route path="/account" element={<Layout><Account /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
