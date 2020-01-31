import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Spinner } from '@shoutem/ui';

function LandingScreen(props) {
    const { navigate } = props.navigation;
    
    useEffect(() => {
        /**
         * Looks confusing but it basically creates an async function to get the
         * data from the localStorage and calls this function. It's an IIFE.
         * useEffect will run this code to get localStorage data after the DOM/NativeUI
         * render completes.
         */
        (async () => {
            const authToken = await AsyncStorage.getItem('auth_token');
            if(authToken !== null)
                navigate('Root');
            else
                navigate('Auth');
        })();

    }, []);

    return (
        <View style={styles.container}>
            <Spinner size='large' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff'
    },
});

export default LandingScreen;