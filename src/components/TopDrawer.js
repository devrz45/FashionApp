import React from 'react';
import { StyleSheet, Text, FlatList, Image } from 'react-native';
import { View, Overlay, Subtitle, ImageBackground } from '@shoutem/ui';
import images from '../assets/images';
import SectionHeader from './SectionHeader';


function TopDrawer(props) {
    const { name, items, hasMore } = props.renderData;
    return (
        <>
            <SectionHeader title={name} hasMore={hasMore} />
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item}) => (
                        <View style={styles.thumbcon}>
                            <ImageBackground style={styles.thumb}  source={images[item.image]}>
                                <Overlay styleName="fill-parent image-overlay">
                                    <Subtitle styleName="sm-gutter-horizontal">{item.title}</Subtitle>
                                </Overlay>
                            </ImageBackground>
                        </View>)}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //height: 100,
        padding: 10,
    },
    thumbcon:{
        flexDirection: 'row',
        alignSelf: 'center',
        height: 70,
        margin: 10,
        width: 140,
        elevation: 5,
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
       // backgroundColor: 'red',
    },
    thumb: {
        height: 70,
        width: 140,
        //margin: 10,
    },
})

export default TopDrawer;