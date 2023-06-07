import './VideoEmbed.css';

export function VideoEmbed() {
    return (
        <iframe
            className="video-embed"
            src="https://www.youtube.com/embed/k6BNEUQWo_M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
}
