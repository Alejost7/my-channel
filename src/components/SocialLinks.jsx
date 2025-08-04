import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
    return (
        <section id="social" className="py-20 px-6 bg-gray-800 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Síguenos</h2>
            <motion.div
                className="flex justify-center gap-8 text-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <a href=" https://www.youtube.com/@AlejoST7?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-600 hover:text-red-700" />
                </a>
                <a href="https://www.instagram.com/alejandro._santander/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-500 hover:text-pink-600" />
                </a>
                <a href="https://www.facebook.com/DiegoSanta007/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-500 hover:text-pink-600" />
                </a>
            </motion.div>
        </section>
    );
}