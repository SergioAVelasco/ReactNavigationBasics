import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'
import Name from './../../profile/components/name'

class Profile extends Component {
    handlePress = (params) => {
        this.props.navigation.navigate('Home')
    }
    setParams = (params) => {
        this.props.navigation.setParams({
            name: 'nel'
        })
    }
    
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.getParam('name')} ${navigation.getParam('age',27)}`
        }
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text> Perfil </Text>
                <Button 
                    title = 'Ir a la homes'
                    onPress = {this.handlePress}
                />
                <Button 
                    title = 'Cambiar nombre'
                    onPress = {this.setParams}
                />
                <Name 
                    name = {'the keko'}
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

export default Profile