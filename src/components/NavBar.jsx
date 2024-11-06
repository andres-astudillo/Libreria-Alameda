import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-blue-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-xl">
                    <Link to={`/`}>
                        Librería
                    </Link>
                </div>

                {/* Campo de búsqueda */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar libros..."
                        className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        🔍
                    </span>
                </div>

                {/* Botón de carrito */}
                <div className="relative ml-4">
                    <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-700">
                        🛒 <span className="ml-2">Carrito</span>
                    </button>
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">3</span>
                </div>
            </div>
        </nav>
    );
};


export default NavBar; 