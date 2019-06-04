import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'

class About extends Component {
    handlePress = (params) => {
        this.props.navigation.navigate('Profile',{
            name: 'SergioVelasco'
        })
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text> Acerca  </Text>
                <Button 
                    title = 'Ir a pefil'
                    onPress = { this.handlePress }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default About