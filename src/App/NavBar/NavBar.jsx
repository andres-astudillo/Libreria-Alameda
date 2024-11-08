import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartModal from "../Cart/CartModal";

const NavBar = () => {
    const { cart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleCartModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    <Link to={`/`}>
                        Librería
                    </Link>
                </div>
                <div className="relative ml-4">
                    <button
                        className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-700"
                        onClick={toggleCartModal}
                    >
                        🛒 <span className="ml-2">Carrito</span>
                    </button>
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                        {cart.length}
                    </span>
                </div>
            </div>
            <CartModal isOpen={isOpen} toggleCartModal={toggleCartModal} />
        </nav>
    );
};

export default NavBar;
