import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { SongList } from './components/SongList/SongList';
import { VideoEmbed } from './components/VideoEmbed/VideoEmbed';
import './App.css';

export function App() {
    return (
        <div id="content">
            <Hero />
            <main>
                <section className="album-description">
                    <h1>Toho Bossa Nova 12</h1>
                    <h2>2023.05.07</h2>
                    <p>イベント頒布価格1000円 第二十回博麗神社例大祭 た24ab</p>
                    <p>ShibayanRecords にて頒布</p>
                </section>
                <section>
                    <SongList />
                </section>
                <VideoEmbed />
            </main>
            <Footer />
        </div>
    );
}
