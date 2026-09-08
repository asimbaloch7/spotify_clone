import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const playlists = [
  { title: "Today's Top Hits", description: 'Sabrina Carpenter, Taylor Swift, Billie Eilish and more', image: 'music-img1.jpg' },
  { title: 'RapCaviar', description: 'New music from Kendrick Lamar, Drake and more', image: 'music-img2.jpg' },
  { title: 'All Out 2010s', description: 'The biggest songs of the 2010s', image: 'music-img3.jpg' },
  { title: 'Rock Classics', description: 'Rock legends and timeless anthems', image: 'music-img4.jpg' },
  { title: 'Chill Hits', description: 'Kick back to the best new and mellow music', image: 'music-img1.jpg' },
];

const tracks = [
  { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', date: 'Nov 7, 2023', duration: '3:20', videoId: '4NRXx6U8ABQ' },
  { title: 'As It Was', artist: 'Harry Styles', album: "Harry's House", date: 'Nov 7, 2023', duration: '2:47', videoId: 'H5v3kku4y6Q' },
  { title: 'Flowers', artist: 'Miley Cyrus', album: 'Endless Summer Vacation', date: 'Nov 7, 2023', duration: '3:20', videoId: 'G7KNmW9a75Y' },
  { title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', date: 'Nov 7, 2023', duration: '3:20', videoId: 'b1kbLwvqugk' },
  { title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', date: 'Nov 7, 2023', duration: '3:23', videoId: 'TUVcZfQe-Kw' },
];

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function Sidebar({ onHome, onSearch, onCreate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <button className="brand" onClick={onHome}><Icon>●</Icon><span>Spotify</span></button>
        <button className="sidebar-link active" onClick={onHome}><Icon>⌂</Icon><span>Home</span></button>
        <button className="sidebar-link" onClick={onSearch}><Icon>⌕</Icon><span>Search</span></button>
      </div>
      <div className="library">
        <div className="library-heading">
          <button className="library-link"><Icon>▣</Icon><span>Your Library</span></button>
          <button className="icon-button" aria-label="Create playlist" onClick={onCreate}>＋</button>
        </div>
        <div className="library-cards">
          <div className="library-card">
            <strong>Create your first playlist</strong>
            <span>It's easy, we'll help you</span>
            <button onClick={onCreate}>Create playlist</button>
          </div>
          <div className="library-card">
            <strong>Let's find some podcasts to follow</strong>
            <span>We'll keep you updated on new episodes</span>
            <button onClick={onSearch}>Browse podcasts</button>
          </div>
        </div>
        <div className="legal-links">
          <span>Legal</span><span>Privacy Center</span><span>Privacy Policy</span><span>Cookies</span><span>About Ads</span><span>Accessibility</span>
          <button className="language-button"><Icon>◎</Icon> English</button>
        </div>
      </div>
    </aside>
  );
}

function Header({ onMenu, onBack, onForward }) {
  return (
    <header className="header">
      <div className="history-buttons">
        <button className="circle-button" aria-label="Go back" onClick={onBack}>‹</button>
        <button className="circle-button" aria-label="Go forward" onClick={onForward}>›</button>
      </div>
      <div className="account-actions">
        <button className="signup-button">Sign up</button>
        <button className="login-button">Log in</button>
        <button className="menu-button" aria-label="Open menu" onClick={onMenu}>☰</button>
      </div>
    </header>
  );
}

function PlaylistCard({ playlist, onSelect }) {
  return (
    <button className="playlist-card" onClick={() => onSelect(playlist)}>
      <span className="cover-wrap"><img src={`/images/${playlist.image}`} alt="" /><span className="play-button">▶</span></span>
      <strong>{playlist.title}</strong>
      <span>{playlist.description}</span>
    </button>
  );
}

function Home({ onSelect }) {
  return (
    <div className="home-view">
      <section className="welcome-section">
        <p className="eyebrow">YOUR SOUNDSPACE</p>
        <h1>Good evening</h1>
        <div className="quick-picks">
          {playlists.slice(0, 4).map((playlist) => <PlaylistCard key={playlist.title} playlist={playlist} onSelect={onSelect} />)}
        </div>
      </section>
      <section className="shelf">
        <div className="section-heading"><h2>Made for you</h2><button>Show all</button></div>
        <div className="playlist-grid">{playlists.map((playlist) => <PlaylistCard key={playlist.title} playlist={playlist} onSelect={onSelect} />)}</div>
      </section>
      <section className="editorial-band"><div><p className="eyebrow">A DAILY DOSE OF DISCOVERY</p><h2>Music that moves with you.</h2><p>Find a soundtrack for every version of today.</p></div><span className="sound-mark">♪</span></section>
    </div>
  );
}

function PlaylistView({ playlist, onPlay }) {
  return (
    <div className="playlist-view">
      <section className="playlist-hero">
        <img src={`/images/${playlist.image}`} alt="" />
        <div><p className="eyebrow">PLAYLIST</p><h1>{playlist.title}</h1><p>{playlist.description}</p><span className="meta"><b>● Spotify</b> · 159,795 likes · 222 songs, about 8 hr 30 min</span></div>
      </section>
      <div className="playlist-actions"><button className="large-play" onClick={() => onPlay(tracks[0])}>▶</button><button className="outline-icon" aria-label="Save playlist">♡</button><button className="outline-icon" aria-label="More options">•••</button><button className="list-view">☷ List</button></div>
      <div className="track-table"><div className="table-heading"><span>#</span><span>Title</span><span>Album</span><span>Date added</span><span>◷</span></div>{tracks.map((track, index) => <button className="track-row" key={track.title} onClick={() => onPlay(track)}><span>{index + 1}</span><span className="track-title"><img src="/images/music-img2.jpg" alt="" /><span><b>{track.title}</b><small>{track.artist}</small></span></span><span>{track.album}</span><span>{track.date}</span><span>{track.duration}</span></button>)}</div>
    </div>
  );
}

function YouTubePlayer({ track, onClose }) {
  return <div className="player-dock">
    <div className="player-heading"><span><b>Listening now</b><small>{track.title} · {track.artist}</small></span><button onClick={onClose} aria-label="Close player">×</button></div>
    <div className="player-frame"><iframe src={`https://www.youtube.com/embed/${track.videoId}?autoplay=1&rel=0`} title={`${track.title} by ${track.artist}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div>
  </div>;
}

function MobileMenu({ onClose, onHome }) {
  return <div className="mobile-menu"><button className="mobile-close" onClick={onClose}>×</button><div className="mobile-brand">● Spotify</div><button onClick={onHome}>⌂ Home</button><button onClick={onClose}>⌕ Search</button></div>;
}

function App() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [notice, setNotice] = useState('');
  const showNotice = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 1800); };
  const goHome = () => setSelectedPlaylist(null);

  return <div className="app-shell">
    {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} onHome={() => { goHome(); setMobileMenuOpen(false); }} />}
    <Sidebar onHome={goHome} onSearch={() => showNotice('Search is ready for the next step')} onCreate={() => showNotice('Playlist creation is ready for the next step')} />
    <main className="main-panel"><Header onMenu={() => setMobileMenuOpen(true)} onBack={goHome} onForward={() => showNotice('There is nowhere else to go yet')} />{selectedPlaylist ? <PlaylistView playlist={selectedPlaylist} onPlay={(track) => setNowPlaying(track)} /> : <Home onSelect={setSelectedPlaylist} />}</main>
    {nowPlaying && <YouTubePlayer track={nowPlaying} onClose={() => setNowPlaying(null)} />}
    {notice && <div className="toast">{notice}</div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
