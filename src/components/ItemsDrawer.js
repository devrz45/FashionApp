import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SectionHeader from './SectionHeader';
import TileListView from './ItemsListView';


function ItemsDrawer(props) {
    const { name, items, hasMore } = props.renderData;
    return (
        <View style={styles.container}>
            <SectionHeader title={name} hasMore={hasMore} />
            <TileListView itemsList={items} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       // flex: 4,
        backgroundColor: 'transparent',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    }
})

export default ItemsDrawer;