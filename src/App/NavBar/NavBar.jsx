import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
    const { cart } = useCart();
    return (
        <nav className="bg-blue-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-xl">
                    <Link to={`/`}>
                        Librería
                    </Link>
                </div>

                {/* Botón de carrito */}
                <div className="relative ml-4">
                    <Link to="/cart">
                        <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-700">
                            🛒 <span className="ml-2">Carrito  </span>
                        </button>
                    </Link>
                    {/* Contador de artículos en el carrito */}
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                        {cart.length} {/* Muestra la cantidad de artículos */}
                    </span>
                </div>
            </div>
        </nav>
    );
};


export default NavBar; 