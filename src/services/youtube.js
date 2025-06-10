const API_KEY     = import.meta.env.VITE_YT_API_KEY;
const CHANNEL_ID  = import.meta.env.VITE_YT_CHANNEL_ID;

const baseUrl = "https://www.googleapis.com/youtube/v3";

export async function getUploadsPlaylistId() {
    const params = new URLSearchParams({
        part: "contentDetails",
        id: CHANNEL_ID,
        key: API_KEY,
    });
    const res = await fetch(`${baseUrl}/channels?${params}`);
    const json = await res.json();
    return json.items[0].contentDetails.relatedPlaylists.uploads;
    }

    export async function getVideos(playlistId, maxResults = 6) {
    const params = new URLSearchParams({
        part: "snippet",
        playlistId,
        maxResults,
        key: API_KEY,
    });
    const res = await fetch(`${baseUrl}/playlistItems?${params}`);
    const { items } = await res.json();
    return items.map(item => ({
        id:          item.snippet.resourceId.videoId,
        title:       item.snippet.title,
        thumbnail:   item.snippet.thumbnails.medium.url,
        description: item.snippet.description,
    }));
}


// Función para obtener los vídeos más populares global o de un país
export async function fetchMostPopularVideos(regionCode = "US", maxResults = 6) {
    const params = new URLSearchParams({
        part: "snippet,statistics",       // snippet para miniaturas y título, statistics para views
        chart: "mostPopular",             // chart indica vídeos más populares
        regionCode,                       // código ISO del país (p.ej. "CO" para Colombia)
        maxResults,
        key: API_KEY,
    });

    const res = await fetch(`${baseUrl}/videos?${params}`);
    const json = await res.json();
    if (!res.ok) throw new Error(json.error.message);

    return json.items.map(item => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        views: item.statistics.viewCount,
        description: item.snippet.description,
    }));
}

// Obtiene los videos (no reels) más populares de TU canal (por vistas)
export async function fetchMostPopularFromMyChannel(maxResults = 6) {
    // 1. Obtener el playlistId de uploads
    const uploadsPlaylistId = await getUploadsPlaylistId();

    // 2. Obtener los videos del canal (puedes aumentar maxResults si quieres más)
    const videos = await getVideos(uploadsPlaylistId, 50); // máximo permitido por la API

    // 3. Obtener detalles de estadísticas y duración para esos videos
    const videoIds = videos.map(v => v.id).join(",");
    const params = new URLSearchParams({
        part: "snippet,statistics,contentDetails",
        id: videoIds,
        key: API_KEY,
    });
    const res = await fetch(`${baseUrl}/videos?${params}`);
    const { items } = await res.json();

    // 4. Filtrar solo videos de al menos 1 minuto (no Shorts)
    const filtered = items.filter(item => {
        // Duración en formato ISO 8601, ej: PT2M30S
        const match = item.contentDetails.duration.match(/PT(\d+)M/);
        return match && parseInt(match[1], 10) >= 1;
    });

    // 5. Ordenar por vistas y devolver los más populares
    const sorted = filtered
        .sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount))
        .slice(0, maxResults)
        .map(item => ({
            id: item.id,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            views: item.statistics.viewCount,
            duration: item.contentDetails.duration,
            description: item.snippet.description,
        }));

    return sorted;
}

