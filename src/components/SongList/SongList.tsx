import './SongList.css';

const songs = [
    {
        name: '七人のティータイム',
        original: '亡き王女の為のセプテット',
        credits: 'Arrange. まさみティー(オーライフジャパン)',
    },
    {
        name: 'Alice in the Rain',
        original: '人形裁判　～ 人の形弄びし少女',
        credits: 'Arrange. ハム(Foxtail-Grass Studio)',
    },
    {
        name: 'Still Dignified',
        original: '大神神話伝',
        credits: 'Arrange. signum/ii ft. Irus & Yousuke Saito',
    },
    {
        name: 'unnamed stars',
        original: 'もうドアには入れない',
        credits: 'Lyric,arrangement,all instruments by milka',
    },
    {
        name: 'at Sunday Market',
        original: 'あの賑やかな市場は今どこに ～ Immemorial Marketeers',
        credits:
            'Arrange. tanigon (ついったー東方部)\nKeys. tanigon Bass. 2416 Drums. saki Sax. crow',
    },
    {
        name: 'O Segredo do Vermelho Assustado',
        original: '柳の下のデュラハン',
        credits: 'Arrange. Shibayan Vocal. 3L Lyric. cittan* Bass. ムー',
    },
    {
        name: 'Chase of the dawn',
        original: '少女秘封倶楽部',
        credits:
            'Arrange. Unity-Gain-2.5dB+1\nVn. 三次元大介 Bass. ItEdoke Key. O太 Perc,Steelpan. 96木',
    },
    {
        name: 'アンブレラ',
        original: '万年置き傘にご注意を',
        credits: 'Lyric,arrangement,all instruments by じんぞう',
    },
    {
        name: 'ヴァンピールサボタージュ',
        original: 'U.N.オーエンは彼女なのか？',
        credits: 'Lyric,arrangement. 鯛の小骨 Vocal.Synthesizer V 夏色花梨',
    },
    {
        name: '月明かりのスキャット',
        original: 'プレインエイジア, エクステンドアッシュ 〜 蓬莱人',
        credits:
            'Arrange. As/Hi ROCK\nVocal, Chorus, Lyric. あとり Vocal, Chorus, Guitar. うどんタイマーP\nPiano, synthesizer. 柊秀雪 Drums. もっち',
    },
];

export function SongList() {
    return (
        <>
            <h2>Track List</h2>
            <ol className="songlist">
                {songs.map((song) => (
                    <li key={song.name}>
                        <h3>{song.name}</h3>
                        <h4>/Original. {song.original}</h4>
                        <p className="credits">{song.credits}</p>
                    </li>
                ))}
            </ol>
        </>
    );
}
