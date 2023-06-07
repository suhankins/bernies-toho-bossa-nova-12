import heroImage from './img/hero.webp';
import './Hero.css';

export function Hero() {
    return (
        <header className="hero">
            <img
                className="hero-image-blured"
                src={heroImage}
                aria-hidden="true" // This is just a decoration, so it's not important for screen readers
            />
            <img
                className="hero-image"
                src={heroImage}
                alt="Cover of Toho Bossa Nova 12 album, showing a red haired anime girl wearing red coat gazing at viewer, with dusk in the background"
            />
        </header>
    );
}
