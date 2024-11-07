import { FaFacebookF, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.facebook.com/IglesiaAlameda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://www.instagram.com/iglesialameda/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Contacto</h3>
                    <p className="flex items-center justify-center space-x-2 text-gray-400">
                        <FaPhone />
                        <span>+54 261 425 1182</span>
                    </p>
                </div>

                <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold mb-2">Nuestra ubicación</h3>
                    <p className="flex items-center justify-center md:justify-end space-x-2 text-gray-400">
                        <FaMapMarkerAlt />
                        <span>San Martin 2020, Capital, Mendoza, Argentina</span>
                    </p>
                </div>
            </div>
            <div className="text-center mt-6 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Iglesia de la Alameda. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
