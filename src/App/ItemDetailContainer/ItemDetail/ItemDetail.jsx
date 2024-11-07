import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import BBDD from "../../../config/firebase.js";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../context/CartContext.jsx";

const isAdmin = false;

const ProductDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchItem = async () => {
            const docRef = doc(BBDD.db, "products", id);
            try {
                const snap = await getDoc(docRef);
                if (snap.exists()) {
                    setItem(snap.data());
                } else {
                    console.log("No se encontró el producto");
                }
            } catch (error) {
                console.error("Error obteniendo el producto:", error);
            }
        };

        fetchItem();
    }, [id]);

    const handleEditClick = () => {
        navigate(`/editarproducto/${id}`);
    };

    const handleBuyClick = () => {
        addToCart(item);
    };

    return (
        <div className="container mx-auto p-6">
            {item ? (
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <img
                            src={item.img}
                            alt={item.img}
                            className="w-full h-auto rounded-lg shadow-md object-cover"
                        />
                    </div>
                    <div className="md:w-2/3 md:ml-6">
                        <h1 className="text-2xl font-bold text-blue-800 mb-4">{item.title}</h1>
                        <p className="text-lg text-gray-700 mb-2">Autor: {item.author}</p>
                        <p className="text-md text-gray-600 mb-2">Tipo: {item.type}</p>
                        <p className="text-md text-gray-700 mb-4">{item.description}</p>
                        <p className="text-xl font-semibold text-blue-600 mb-4">$ {item.price}</p>
                        {isAdmin ? (
                            <button 
                                onClick={handleEditClick} 
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Editar
                            </button>
                        ) : (
                            <button 
                                onClick={handleBuyClick} 
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                            >
                                Comprar
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">Cargando...</p>
            )}
        </div>
    );
};

export default ProductDetail;
