import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white text-center py-6">
        © {new Date().getFullYear()} MacheteX. Todos los derechos reservados.
        </footer>
    );
}

