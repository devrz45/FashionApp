import React, { useContext } from 'react';
import { StyleSheet, Text, View, ListView, FlatList } from 'react-native';
import ItemTile from './ItemTile';
import { SearchContext } from '../utils/searchContext';


function ItemsListView(props) {
    const {itemsList} = props;
    const { search } = useContext(SearchContext)
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={search ? itemsList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())) : itemsList}
                keyExtractor={item => item.itemId.toString()}
                showsHorizontalScrollIndicator = {false}
                renderItem={({item}) => <ItemTile {...item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //flex: 4,
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // alignItems: 'center'
    }
})

export default ItemsListView;