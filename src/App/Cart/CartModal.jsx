import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

const CartModal = ({ isOpen, toggleCartModal }) => {
    const { cart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        isOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-10">
                <h2 className="text-lg font-bold mb-4">Detalles del Carrito</h2>
                <ul className="space-y-2">
                    {cart.map((item, index) => (
                        <li key={index} className="flex justify-between">
                            <span>{item.name} x{item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <button
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 transition-colors duration-300"
                    onClick={toggleCartModal}
                >
                    Continuar Comprando
                </button>
            </div>
        )
    );
};

export default CartModal;
