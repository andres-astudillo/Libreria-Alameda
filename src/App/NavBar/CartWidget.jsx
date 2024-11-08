import { useState } from "react";

const CartWidget = () => {
    const [cartItem, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem => 
                    cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + item.quantity } 
                    : cartItem
                );
            }
            return [...prevCart, item];
        });
    };
};

export default CartWidget;