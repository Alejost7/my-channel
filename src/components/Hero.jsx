import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 text-center"
        >
        <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
        >
            Bienvenido a ST Tech
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl"
        >
            Tu espacio de tecnología, innovación y videojuegos. ¡Únete a nuestra comunidad y descubre el futuro!
        </motion.p>
        <motion.a
            href="https://www.youtube.com/@STTech322"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
        >
            Visita el Canal
        </motion.a>
        </section>
    )
};