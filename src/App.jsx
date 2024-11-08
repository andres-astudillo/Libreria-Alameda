import './App.css';
import ItemList from './App/ItemListContainer/ItemList/ItemList';
import ItemDetail from './App/ItemDetailContainer/ItemDetail/ItemDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItem from './App/ItemDetailContainer/ItemDetail/AddItem';
import NavBar from './App/NavBar/NavBar';
import Footer from './App/Footer/Footer';
import UpdateItem from './App/ItemDetailContainer/ItemDetail/UpdateItem';
import { CartProvider } from './context/CartContext';
import CartModal from './App/Cart/CartModal';
import { useState } from 'react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Router>
        <NavBar toggleCartModal={toggleCartModal} />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/detalledelproducto/:id" element={<ItemDetail />} />
          <Route path="/nuevoproducto/" element={<AddItem />} />
          <Route path="/editarproducto/:id" element={<UpdateItem />} />
        </Routes>
        <Footer />
        <CartModal isOpen={isCartOpen} toggleCartModal={toggleCartModal} />
      </Router>
    </CartProvider>
  );
}

export default App;