import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Subtitle, Image } from '@shoutem/ui';
import images from '../assets/images';
import {NavigationContext} from 'react-navigation';

function ItemTile(props) {
    const {navigate} = useContext(NavigationContext)
    // debugger
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate("Details", {itemId: props.itemId})}>
            <View style={styles.container} >   
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={images[props.image]}
                />
                <View style={styles.content}>
                    <Text>${props.price}</Text>
                    <Subtitle>{props.title}</Subtitle>
                </View>        
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:0,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    image: {
        borderRadius: 4,
        width: 150,
        height: 200,
    },
    content: {
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 6,
    }
})

export default ItemTile;