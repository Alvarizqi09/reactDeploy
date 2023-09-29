import { useEffect } from 'react';
import swal from 'sweetalert';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import Main from './components/Main/Main';
import ProductDetail from './components/Pages/ProductDetail/ProductDetail';

function App() {
  useEffect(() => {
    swal("welcome!");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>} path="/"/>
        <Route element={<Main/>} path="/Main"/>
        <Route path="/details/:productId" element={<ProductDetail/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
