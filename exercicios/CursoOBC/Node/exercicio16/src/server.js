const express = require('express')
const playlistsController = require('./controllers/playlists-controller')

const app = express()
app.use(express.json())

app.get('/', (req, res)=> {
    res.json({message: 'Hello again, world!'})
})

app.get('/playlists', playlistsController.index)
app.post('/playlists', playlistsController.createPlaylist)
app.get('/playlists/:id', playlistsController.getPlaylist)
app.put('/playlists/:id', playlistsController.updatePlaylistInfo)
app.delete('/playlists/:id', playlistsController.deletePlaylist)
app.post('/playlists/:id/songs', playlistsController.addSong)
app.delete('/playlists/:id/songs/:songId', playlistsController.removeSong)

const PORT = 3333
app.listen(PORT, ()=>{ console.log('Server running')})