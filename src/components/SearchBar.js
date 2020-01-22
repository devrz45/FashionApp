import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { View, TextInput } from '@shoutem/ui';
import Icon from './IconWrapper';
import { SearchContext } from '../utils/searchContext';

function SearchBar(props) {
    let { search, setSearch } = useContext(SearchContext);
    console.log("searchTerm:",search);
    // debugger
    return (
        <View style={styles.container} elevation={3}>
            <Icon type="Octicon" name="search" style={styles.searchIcon}/>
            <TextInput 
                underlineColorAndroid="transparent" 
                placeholder="Search Your Product"
                style={styles.searchInput}
                value={search}
                onChangeText={text => setSearch(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 6,
        marginHorizontal: 17,
        marginTop: 2,
        marginBottom: 10,
        height: 50,
    },
    searchIcon: {
        paddingLeft: '4%',
        paddingRight: '1%',
        paddingVertical: '1%',
    },
    searchInput: {
        flex: 1,
        height: 'auto',
        marginVertical: '0.5%',
        marginHorizontal: '2%',
        padding: 5,
        fontSize: 18,
        fontFamily: 'Roboto'
    }
})

export default SearchBar;