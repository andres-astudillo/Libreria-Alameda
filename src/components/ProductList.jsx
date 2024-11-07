import { collection, getDocs } from "firebase/firestore";
import BBDD from "../config/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Funcion para listar todos los productos
const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const collectionsRef = collection(BBDD.db, 'products');
        getDocs(collectionsRef).then(snaps => {
            const { docs } = snaps;
            const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(list);
        });
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
            {products.map((product) => (
                <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden transform scale-90">
                    <div className="w-40 h-40">
                        <img
                            alt={product.imageAlt}
                            src={product.img}
                            className="w-full h-full object-cover aspect-[258/346]"
                        />
                    </div>
                    <div className="p-2">
                        <h3 className="text-sm font-semibold text-gray-800">
                            <Link to={`/detalledelproducto/${product.id}`}>
                                {product.title}
                            </Link>
                        </h3>
                        <p className="text-xs text-gray-600">{product.author}</p>
                        <p className="text-blue-600 font-bold text-sm">$ {product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
