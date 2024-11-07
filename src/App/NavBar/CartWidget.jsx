import { useState } from "react";

const CartWidget = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        alert("Producto añadido al carrito");
    };

    return (
        <div className="relative">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Carrito ({cartItems.length})
            </button>
            {/* Opcional: Mostrar detalles del carrito */}
        </div>
    );
};

export default CartWidget;