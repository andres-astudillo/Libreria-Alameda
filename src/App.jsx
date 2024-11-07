import './App.css'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UpdateProduct from './components/UpdateProduct';

function App() {

  return (
    <div className="flex flex-col min-h-screen">  
      <Router>
        < NavBar />
        <Routes>
          <Route path="/" element={< ProductList />} />
          <Route path="/detalledelproducto/:id" element={< ProductDetail />} />
          <Route path="/nuevoproducto/" element={< AddProduct />} />
          <Route path="/editarproducto/:id" element={< UpdateProduct />} />
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App

