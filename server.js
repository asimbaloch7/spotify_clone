import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const songSchema = new mongoose.Schema({ title: String, artist: String, album: String, duration: Number, coverImage: String, audioUrl: String, genre: String }, { timestamps: true });
const playlistSchema = new mongoose.Schema({ name: String, description: String, coverImage: String, accent: String, songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }] }, { timestamps: true });
const Song = mongoose.models.Song || mongoose.model('Song', songSchema);
const Playlist = mongoose.models.Playlist || mongoose.model('Playlist', playlistSchema);

const image = (name) => `/images/${name}`;
const seedSongs = [
  { _id: 'song-1', title: 'Midnight City Lights', artist: 'The Night Arcade', album: 'After Hours', duration: 224, coverImage: image('music-img1.jpg'), genre: 'Electronic' },
  { _id: 'song-2', title: 'Golden Hour', artist: 'Maya Sol', album: 'Sunroom', duration: 198, coverImage: image('music-img2.jpg'), genre: 'Indie Pop' },
  { _id: 'song-3', title: 'Ocean Drive', artist: 'Coastline Club', album: 'Tidal', duration: 241, coverImage: image('music-img3.jpg'), genre: 'Chill' },
  { _id: 'song-4', title: 'Velvet Rooms', artist: 'Nico June', album: 'Soft Focus', duration: 186, coverImage: image('music-img4.jpg'), genre: 'R&B' },
  { _id: 'song-5', title: 'Slow Motion', artist: 'Luna Parks', album: 'After Hours', duration: 205, coverImage: image('music-img1.jpg'), genre: 'Alternative' },
  { _id: 'song-6', title: 'Static Dreams', artist: 'The Night Arcade', album: 'Neon Weather', duration: 232, coverImage: image('music-img2.jpg'), genre: 'Electronic' },
];
const seedPlaylists = [
  { _id: 'playlist-top', name: "Today's Top Hits", description: 'The pulse of what is happening now. Cover: new sounds for late nights and long drives.', coverImage: image('music-img1.jpg'), accent: '#b8d8c0', songs: seedSongs },
  { _id: 'playlist-discover', name: 'Discover Weekly', description: 'A private mix of fresh finds chosen around your listening taste.', coverImage: image('music-img2.jpg'), accent: '#d6b7e8', songs: seedSongs.slice(1, 5) },
  { _id: 'playlist-chill', name: 'Chill Hits', description: 'Ease into the weekend with mellow favorites and soft-focus grooves.', coverImage: image('music-img3.jpg'), accent: '#b9d5e3', songs: seedSongs.slice(2, 6) },
  { _id: 'playlist-focus', name: 'Deep Focus', description: 'Instrumental atmosphere for the work that deserves your full attention.', coverImage: image('music-img4.jpg'), accent: '#e0c59e', songs: seedSongs.slice(0, 4) },
];

const useMemoryData = async (callback) => {
  try { return await callback(); } catch { return null; }
};
app.get('/api/health', (_req, res) => res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'memory' }));
app.get('/api/songs', async (req, res) => {
  const query = String(req.query.q || '').toLowerCase();
  const dbSongs = await useMemoryData(() => Song.find().lean());
  const songs = dbSongs?.length ? dbSongs : seedSongs;
  res.json(query ? songs.filter((song) => `${song.title} ${song.artist} ${song.album} ${song.genre}`.toLowerCase().includes(query)) : songs);
});
app.get('/api/playlists', async (_req, res) => {
  const playlists = await useMemoryData(() => Playlist.find().populate('songs').lean());
  res.json(playlists?.length ? playlists : seedPlaylists);
});
app.get('/api/playlists/:id', async (req, res) => {
  const playlist = await useMemoryData(() => Playlist.findById(req.params.id).populate('songs').lean());
  const found = playlist || seedPlaylists.find((item) => item._id === req.params.id);
  found ? res.json(found) : res.status(404).json({ message: 'Playlist not found' });
});
app.post('/api/playlists', async (req, res) => {
  const playlist = { _id: `playlist-${Date.now()}`, name: req.body.name || 'Untitled playlist', description: 'Created in your library', coverImage: image('music-img4.jpg'), songs: [] };
  const saved = await useMemoryData(() => new Playlist(playlist).save());
  res.status(201).json(saved || playlist);
});

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/soundspace').then(() => console.log('MongoDB connected')).catch(() => console.log('MongoDB unavailable: using seeded memory data'));
app.listen(port, () => console.log(`API listening on http://localhost:${port}`));
