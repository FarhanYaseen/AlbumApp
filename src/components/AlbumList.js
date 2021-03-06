import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component {
    state = {
        albums: []
    };

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }))
            .catch(err => console.log(err))
    }
}


export default AlbumList;