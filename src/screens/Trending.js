import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default (props) => {
    const {navigate, getParam} = props.navigation;
    const userId = getParam('userId') || 0;
    return (
        <View style={styles.container}>
            <Text>
                Trending Screen
            </Text>
            <Button
                title="Details"
                onPress={() => navigate('Details', {userId})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})