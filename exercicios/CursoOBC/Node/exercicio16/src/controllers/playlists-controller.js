const playlistExample = { id: 1, name: 'Doka', tags: ['Trap', 'Hip-hop brasileiro'], songsList: [{ title: 'Melhor pensar denovo, né', year: 2022, artist: 'Sidoka', album: 'Melhor pensar denovo, né' }, { title: 'Mentiroza', year: 2019, artist: 'Sidoka', album: 'Mentiroza' }] }
const playlistExample2 = { id: 2, name: 'Gracie', tags: ['Pop', 'Sad pop'], songsList: [{ title: 'Stay', year: 2021, artist: 'Gracie Abrams', album: 'Stay' }, { title: 'Will you cry?', year: 2023, artist: 'Gracie Abrams', album: 'Good Riddance' }] }

const playlists = [playlistExample, playlistExample2]

module.exports = {
    //GET /playlists
    index: (req, res) => {
        res.status(200).json(playlists)
    },

    createPlaylist: (req, res) => {
        const { name, tags, songsList } = req.body

        if (typeof name !== "string" || !tags) {
            return res.status(400).json({ message: "The playlist could not be created because of missing info on name or tags!" })
        }
        if (!songsList) {
            songsList = ['']
        }
        const newPlaylist = {
            id: Math.floor(Math.random() * 9999),
            name: name,
            tags: tags,
            songsList: songsList
        }
        playlists.push(newPlaylist)
        res.status(201).json(newPlaylist)
    },

    //GET /playlists/:id
    getPlaylist: (req, res) => {
        const { id } = req.params
        const index = playlists.findIndex(playlist => playlist.id === +id)
        if (index === -1) {
            return res.status(404).json({ message: "Playlist not found!" })
        }
        const playlistFound = playlists[index]

        res.status(201).json(playlistFound)
    },

    //PUT /playlists/:id/
    updatePlaylistInfo: (req, res) => {
        const { id } = req.params
        const { name, tags } = req.body
        const index = playlists.findIndex(playlist => playlist.id === +id)

        //Verifica existência da playlist
        if (index === -1) {
            return res.status(404).json({ message: "Playlist not found!" })
        }

        //Verifica tipo do 'name' enviado na requisição e o atualiza se for compatível
        if (typeof name === "string") {
            playlists[index].name = name
        }

        //Verifica se o array tags existe e está povoado de strings e o atualiza caso positivo
        if (Array.isArray(tags)) {
            if (tags.length > 0) {
                for (const tag of tags) {
                    if (typeof tag !== "string") {
                        return res.status(400).json({ message: "Todos os itens em 'tags' devem ser strings!" })
                    }
                }
                playlists[index].tags = tags
                res.status(200).json({ message: "Dados atualizados com sucesso!" })
            }
            return res.status(400).json({ message: "'Tags' não deve estar vazio!" })
        }
        res.status(200).json({ message: "Dados atualizados com sucesso!" })
    },

    //DELETE /playlists/:id
    deletePlaylist: (req, res) => {
        const { id } = req.params
        const index = playlists.findIndex(playlist => playlist.id === +id)

        //Verifica existência da playlist
        if (index === -1) {
            return res.status(404).json({ message: "Playlist not found!" })
        }

        playlists.splice(index, 1)
        return res.status(204).end()
    },

    //POST /playlists/:id/songs
    addSong: (req, res) => {
        const { id } = req.params
        const { title, year, artist, album } = req.body
        const index = playlists.findIndex(playlist => playlist.id === +id)

        //Verifica existência da playlist
        if (index === -1) {
            return res.status(404).json({ message: "Playlist not found!" })
        }

        if (typeof title !== "string" || typeof year !== "number" || typeof artist !== "string" || typeof album !== "string") {
            return res.status(400).json({ message: "As informações da música se encontram inválidas!" })
        }
        if (playlists[index].songsList.find(song => song.title === title) && playlists[index].songsList.find(song => song.artist === artist)) {
            return res.status(400).json({ message: "Uma música com esse mesmo nome e artista já existe na playlist, sendo assim a ação foi cancelada." })
        }
        const newSong = {
            title: title,
            artist: artist,
            year: year,
            album: album
        }
        playlists[index].songsList.push(newSong)
        return res.status(200).json(playlists[index].songsList)
    },

    //DELETE /playlists/:id/songs
    removeSong: (req, res) => {
        const { id } = req.params
        const { title } = req.body
        const index = playlists.findIndex(playlist => playlist.id === +id)

        //Verifica existência da playlist
        if (index === -1) {
            return res.status(404).json({ message: "Playlist not found!" })
        }

        const songToBeRemoved = playlists[index].songsList.findIndex(song => song.title === title)
        playlists[index].songsList.splice(songToBeRemoved, 1)

        return res.status(200).json(playlists[index].songsList)
    }
}
