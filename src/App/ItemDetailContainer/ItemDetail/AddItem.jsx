import { addDoc, collection } from "firebase/firestore";
import BBDD from "../../../config/firebase.js";
import { useState } from "react";

const AddProduct = () => {
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");

    const AddItem = async () => {
        const collRef = collection(BBDD.db, "products");
        await addDoc(collRef, {
            author: author,
            description: description,
            price: price,
            status: true,
            stock: stock,
            title: title,
            type: type
        });

        setAuthor("");
        setDescription("");
        setPrice("");
        setStock("");
        setTitle("");
        setType("");
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-4">
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <input
                type="text"
                placeholder="Autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <input
                type="text"
                placeholder="Tipo"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <input
                type="number"
                placeholder="Cantidad de ejemplares"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <input
                type="number"
                placeholder="Precio unitario"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <button
                onClick={AddItem}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
                Agregar
            </button>
        </div>
    );
};

export default AddProduct;
