import { doc, getDoc, updateDoc } from "firebase/firestore";
import BBDD from "../../../config/firebase.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState({
        author: "",
        description: "",
        price: "",
        status: true,
        stock: "",
        title: "",
        type: ""
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const docRef = doc(BBDD.db, 'products', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setItem(docSnap.data());
                } else {
                    console.log('No se encontró el libro.');
                }
            } catch (error) {
                console.error('Error al traer los datos del libro:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchBookData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const docRef = doc(BBDD.db, 'products', id);
            await updateDoc(docRef, item);
            alert('Datos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar los datos:', error);
        }
    };

    if (isLoading) return <p className="text-center text-gray-500">Cargando datos...</p>;

    return (
        <form onSubmit={handleUpdate} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-4">
            <label className="block text-blue-800 font-semibold">
                Título:
                <input
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
            </label>
            <label className="block text-blue-800 font-semibold">
                Autor:
                <input
                    type="text"
                    name="author"
                    value={item.author}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
            </label>
            <label className="block text-blue-800 font-semibold">
                Tipo:
                <textarea
                    type="text"
                    name="type"
                    value={item.type}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
            </label>
            <label className="block text-blue-800 font-semibold">
                Descripción:
                <textarea
                    type="text"
                    name="description"
                    value={item.description}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
            </label>
            <label className="block text-blue-800 font-semibold">
                Precio:
                <input
                    type="number"
                    name="price"
                    value={item.price}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
            </label>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
                Actualizar Libro
            </button>
        </form>
    );
};

export default UpdateProduct;
