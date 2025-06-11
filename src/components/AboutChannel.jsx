import React from "react";
import { motion } from "framer-motion";

export default function AboutChannel() {
    return (
        <section id="about" className="py-20 px-6 bg-black text-white text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6"
            >
                ¿Qué es MacheteX?
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-3xl mx-auto text-lg"
            >
                MacheteX es tu canal de referencia para análisis de gadgets, novedades en IA, gameplays y tutoriales técnicos. ¡Explora tecnología de vanguardia y aprende con nosotros!
            </motion.p>
        </section>
    )
};