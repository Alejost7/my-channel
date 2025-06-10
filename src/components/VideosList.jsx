import React from "react";
import { motion } from "framer-motion";
import { getUploadsPlaylistId, getVideos, fetchMostPopularFromMyChannel } from "../services/youtube";
import { useEffect, useState } from "react";

export default function VideosList() {
    const [videos, setVideos] = useState([])
    const [popularVideos, setPopularVideos] = useState([]);

    useEffect(() => {  // Cargar los últimos videos del canal
        let mounted = true;
        async function load() {
            try {
            const playlistId = await getUploadsPlaylistId();
            const vids = await getVideos(playlistId, 6);
            if (mounted) setVideos(vids);
            } catch (e) {
            console.error(e);
            }
        }
        load();
        return () => { mounted = false; };
    }, []);

    useEffect(() => {  // Cargar los videos más populares
        let mounted = true;
        async function loadPopular() {
            try {
                const vids = await fetchMostPopularFromMyChannel(6);
                if (mounted) setPopularVideos(vids);
            } catch (e) {
            console.error("Error cargando populares:", e);
            }
            }
            loadPopular();
            return () => { mounted = false; };
    }, []);


    return (
        <div>
            <section id="videos" className="py-20 px-6 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-12">Últimos Videos</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {videos.map((v) => (
                        <motion.a
                        key={v.id}
                        href={`https://youtu.be/${v.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="space-y-2"
                        whileHover={{ scale: 1.05 }}
                        >
                        <img src={v.thumbnail} alt={v.title} className="rounded-lg w-full" />
                        <h3 className="text-lg font-semibold">{v.title}</h3>
                        </motion.a>
                    ))}
                </div>
            </section>

            <section id="popular-videos" className="py-20 px-6 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Videos Populares</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {popularVideos.map((v) => (
                        <motion.a
                        key={v.id}
                        href={`https://youtu.be/${v.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="space-y-2"
                        whileHover={{ scale: 1.05 }}
                        >
                        <img src={v.thumbnail} alt={v.title} className="rounded-lg w-full" />
                        <h3 className="text-lg font-semibold">{v.title}</h3>
                        </motion.a>
                    ))}
                </div>
            </section>
        </div>

    )
}