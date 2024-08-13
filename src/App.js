import './App.sass';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Component/Header';
import Bâtiment from './Pages/Bâtiment';
import Fabrication from './Pages/Fabrication';
import Alimentation from './Pages/Alimentation';
import Services from './Pages/Services';
import DetailPage from './Pages/DetailPage';
import Page404 from './Pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>      
        <Route path="/" element={<Home />}/>
        <Route path="/Bâtiment" element={<Bâtiment />} />
        <Route path="/Fabrication" element={<Fabrication />} />
        <Route path="/Alimentation" element={<Alimentation />} />
        <Route path="/Services" element={<Services />} />
        <Route path="artisans/:artisanId" element={<DetailPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>  
  </BrowserRouter>
  );
}

export default App;
