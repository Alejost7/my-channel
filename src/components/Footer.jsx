import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white text-center py-6">
        © {new Date().getFullYear()} AlejoST7. Todos los derechos reservados.
        </footer>
    );
}

