import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { SongList } from './components/SongList/SongList';
import { VideoEmbed } from './components/VideoEmbed/VideoEmbed';
import './App.css';

export function App() {
    return (
        <div id="content">
            <Hero />
            <SongList />
            <VideoEmbed />
            <Footer />
        </div>
    );
}
