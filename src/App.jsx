import './App.css'
import ProductList from './App/ItemListContainer/ItemList/ItemList';
import ItemDetail from './App/ItemDetailContainer/ItemDetail/ItemDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItem from './App/ItemDetailContainer/ItemDetail/AddItem';
import NavBar from './App/NavBar/NavBar';
import Footer from './App/Footer/Footer';
import UpdateItem from './App/ItemDetailContainer/ItemDetail/UpdateItem';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <Router>
          < NavBar />
          <Routes>
            <Route path="/" element={< ProductList />} />
            <Route path="/detalledelproducto/:id" element={< ItemDetail />} />
            <Route path="/nuevoproducto/" element={< AddItem />} />
            <Route path="/editarproducto/:id" element={< UpdateItem />} />
          </Routes>
          < Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App

