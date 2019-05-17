import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from './../../components/UI/HeadingText/HeadingText';
import MainText from './../../components/UI/MainText/MainText';
import backgroundImage from '/home/ilham/Documents/Purwadhika/Mobile/jc8reactnative/src/assets/clouds-06_11.jpg';
import ButtonWithBackground from './../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {
    loginHandler= () => {
        startMainTabs()
    }

    render () {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                <MainText><HeadingText>Please Login</HeadingText></MainText>
                <ButtonWithBackground color='#a5b4ef'>
                    Switch to Login
                </ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder='Your Email Address'/>
                    <DefaultInput placeholder='Password'/>
                    <DefaultInput placeholder='Comfrim Password'/>
                </View>
                <ButtonWithBackground color='#a5b4ef' onTekan={this.loginHandler}>
                    Login
                </ButtonWithBackground>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        margin: 3
    },
    backgroundImage: {
        flex: 1,
        width: '100%'

    }

})
export default AuthScreen