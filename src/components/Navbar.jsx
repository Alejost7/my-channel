import React from "react";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-black/80 text-white p-4 flex justify-between items-center z-50">
        <div className="text-xl font-bold flex items-center gap-2">
            <FaYoutube size={28} className="text-red-600" />
            <span>AlejoST7</span>
        </div>
        <ul className="hidden md:flex space-x-6">
            <li><a href="#hero" className="hover:text-red-600">Inicio</a></li>
            <li><a href="#videos" className="hover:text-red-600">Videos</a></li>
            <li><a href="#about" className="hover:text-red-600">Acerca</a></li>
            <li><a href="#social" className="hover:text-red-600">Redes</a></li>
        </ul>
        </nav>
    )
};

export default Navbar;