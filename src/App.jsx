
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Iphones from './pages/Iphones';
import Airpods from './pages/Airpods';
import Tekno from './pages/Tekno';
import NoPage from './pages/NoPage';
import Containers from './components/Containers.jsx';
import Buttons from './components/Buttons.jsx';
import HomePage from './components/HomePage.jsx';
import './components/Index.css';
import Infinix from './pages/Infinix.jsx';
import Oppo from './pages/Oppo';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><HomePage /><Containers /><Buttons /></>} />
        <Route path="/pages/Airpods" element={<Airpods />} />
        <Route path="/pages/Tekno" element={<Tekno />} />
        <Route path="/pages/Iphones" element={<Iphones />} />
        <Route path='/pages/Infinix' element={<Infinix />}/>
        <Route path='/pages/Oppo' element={<Oppo />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* Place static components here if they should appear on every page */}
    </BrowserRouter>
  );
};

export default App;
