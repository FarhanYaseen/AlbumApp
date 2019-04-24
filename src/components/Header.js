// import
import React from 'react'
import { Text, View } from 'react-native'

// Make a new component

const Header = (props) => {
    const { textStyles, viewStyles } = styles;
    return (
        <View style={viewStyles}>
            <Text style={textStyles}>{props.headerText}</Text>
        </View>

    );
}
// Styles for the Component
const styles = {
    viewStyles: {
        backgroundColor: '#F8F8F8',
        justifyContents: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 45,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyles: {
        fontSize: 20
    }
};

// export the component 

export default Header;