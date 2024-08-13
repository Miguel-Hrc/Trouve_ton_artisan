import './App.sass';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Component/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>      
        <Route path="/" element={<Home />}/>
      </Routes>  
  </BrowserRouter>
  );
}

export default App;
