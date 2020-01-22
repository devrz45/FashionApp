import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { useFetchData } from '../utils/customHooks';
import { getFeaturedData } from '../utils/api';
import { NavigationBar, Spinner } from '@shoutem/ui';
import Icon from '../components/IconWrapper';
import ItemTile from '../components/ItemTile';
import SectionHeader from '../components/SectionHeader';

function FeaturedScreen (props) {
    const featuredData = useFetchData(getFeaturedData);
    // debugger

    if(featuredData)
        return (
            <SafeAreaView style={styles.container} >
                <SectionHeader title={"Featured"} />
                <ScrollView>
                    <View style={styles.gridContainer}>
                        {featuredData.items.map((item) => <ItemTile {...item} key={item.itemId} />)}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    
    return (
        <View style={styles.loading}>
            <Spinner size='large' />
        </View>
    )
}

FeaturedScreen.navigationOptions = {
    header: ({ scene, previous, navigation }) => {
        return (
            <NavigationBar 
                styleName="inline no-border"
                leftComponent = {
                    <Icon type="Ant" name="arrowleft" onPress={() => navigation.goBack()}/>
                }
                rightComponent = {
                    <View style={styles.rightNavBarOptions}>
                        <Icon type="Octicon" name="search" style={styles.icon} />
                        <Icon type="Feather" name="help-circle" />
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    gridContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    icon: {
        padding: '1%'
    },
    rightNavBarOptions: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fefefe"
    }
})

export default FeaturedScreen;