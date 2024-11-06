import { collection, getDocs } from "firebase/firestore";
import BBDD from "../config/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="w-full h-48 bg-gray-200 overflow-hidden">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-blue-800">
                                <Link to={`/detalledelproducto/${product.id}`} className="hover:underline">
                                    {product.title}
                                </Link>
                            </h3>
                            <p className="text-gray-600">{product.author}</p>
                            <p className="text-blue-600 font-semibold mt-2">$ {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
