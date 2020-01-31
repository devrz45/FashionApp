import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from '../components/IconWrapper';
import { NavigationBar } from '@shoutem/ui';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFetchData } from '../utils/customHooks';
import { getAuthenticationStatus } from '../utils/api';

function LoginScreen(props) {
    const {navigate} = props.navigation;
    debugger
    let [email, setEmail] = useState('');
    let [passwd, setPasswd] = useState('');
    let [passHide, setPassHide] = useState(true);
    let [loginLoading, setLoginLoading] = useState(false);

    const handleLogin = async () => {
        setLoginLoading(true);
        getAuthenticationStatus(email, passwd, (data) => {
            (async () => {
                if(data.success)
                {
                    await AsyncStorage.setItem('auth_token', data.authToken);
                    navigate('Root');
                }
            })();
        });
    }

    const getLoginBtnContent = () => {
        if(loginLoading)
        {
            return (
                <ActivityIndicator size="small" color="#ffffff" />
            )
        }
        else
        {
            return (
                <TouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
                    <Text style={styles.buttonText}>
                        Log in
                    </Text>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer} >
                <Text style={styles.titleText}>Login</Text>
            </View>
            <View style={styles.formContainer}>
                <ScrollView>
                <Input
                    label="Email"
                    labelStyle={styles.inputLabel}
                    inputContainerStyle={{
                        borderBottomColor: '#BFBFBF'
                    }}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    label="Password"
                    labelStyle={styles.inputLabel}
                    inputContainerStyle={{
                        borderBottomColor: '#BFBFBF'
                    }}
                    rightIcon={
                        <TouchableHighlight onPressIn={() => setPassHide(false)} onPressOut={() => setPassHide(true)} underlayColor="white">
                            <View>
                                <Icon type="Ion" name="md-eye" style={styles.showIcon} />
                            </View>
                        </TouchableHighlight>
                    }
                    value={passwd}
                    onChangeText={(text) => setPasswd(text)}
                    secureTextEntry={passHide}
                />
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#667EEA', '#64B6FF']} style={styles.linearGradient}>
                    {
                        getLoginBtnContent()
                    }
                    
                </LinearGradient>
                <Text style={styles.suggestionText}>
                    Don't have an account ? <Text style={{color: '#000'}}> Sign Up </Text>
                </Text>
                </ScrollView>
            </View>
        </View>
    )
}

LoginScreen.navigationOptions = {
    header: ({ scene, previous, navigation }) => {
        return (
            <NavigationBar 
                styleName="inline no-border"
                leftComponent = {
                    <Icon type="Ant" name="arrowleft" style={{padding: '5%', color: '#A6A6A6'}}/>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 25,
        paddingVertical: 5
    },
    titleContainer: {
        flex: 2,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    formContainer: {
        flex: 12,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    titleText: {
        flex: 1,
        fontSize: 30,
        fontFamily: 'SegoeUI'
    },
    inputLabel: {
        fontFamily: 'SegoeUI',
        fontWeight: 'normal',
        marginTop: 30,
        fontSize: 16,
        color: '#A6A6A6'
    },
    linearGradient: {
        padding: 5,
        marginHorizontal: 15,
        marginBottom: 30,
        marginTop: 50,
        borderRadius: 5,
        justifyContent: 'center',
        height: 50,
        elevation: 12,
        shadowOffset:{  width: 0,  height: 20,  },
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 7
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'SegoeUI',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    suggestionText: {
        fontSize: 14,
        fontFamily: 'SegoeUI',
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#A6A6A6'
    },
    showIcon: {
        color: '#A6A6A6',
        padding: '1%'
    }
});

export default LoginScreen;