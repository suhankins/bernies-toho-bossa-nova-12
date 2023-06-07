import heroImage from './img/hero.webp';
import heroImageMobile from './img/hero-mobile.webp';
import './Hero.css';

export function Hero() {
    return (
        <header className="hero">
            <picture>
                <source srcSet={heroImageMobile} media="(max-width: 600px)" />
                <source srcSet={heroImage} />
                <img
                    className="hero-image-blured"
                    src={heroImage}
                    aria-hidden="true" // This image is decorative, so it should be hidden from screen readers
                />
            </picture>
            <picture>
                <source srcSet={heroImageMobile} media="(max-width: 600px)" />
                <source srcSet={heroImage} />
                <img
                    className="hero-image"
                    src={heroImage}
                    alt="Cover of Toho Bossa Nova 12 album, showing a red haired anime girl wearing red coat gazing at viewer, with dusk in the background"
                />
            </picture>
        </header>
    );
}
