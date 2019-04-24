// import 
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

//Component

const App = () => {
    return (
        <View style={styles.scrollViewContainer}>
            <Header headerText='Albums!' />
            <AlbumList />
        </View>
    );
}


// Render

const styles = {
    scrollViewContainer: {
        flex: 1
    }
}

AppRegistry.registerComponent('albums', () => App);

//Component should matches the project name