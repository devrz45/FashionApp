import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button
} from 'react-native';
import { useFetchData } from '../utils/customHooks';
import { getInitialData } from '../utils/api';
import { NavigationBar, Spinner } from '@shoutem/ui';
import SearchBar from '../components/SearchBar';
import TopDrawer from '../components/TopDrawer';
import ItemsDrawer from '../components/ItemsDrawer';
import Icon from '../components/IconWrapper';
import { withSearchContext } from '../utils/searchContext';

function HomeScreen(props) {
    const intialData = useFetchData(getInitialData);
    const {navigate} = props.navigation;
    // debugger

    if(intialData)
        return (
            <View style={styles.container}>
                <SearchBar />
                <ScrollView>
                    <TopDrawer renderData={intialData.sections && intialData.sections.top} />
                    <ItemsDrawer renderData={intialData.sections && intialData.sections.mid} />
                    <ItemsDrawer renderData={intialData.sections &&intialData.sections.bottom} />
                </ScrollView>
            </View>
        )
    
    return (
        <View style={styles.loading}>
            <Spinner size='large' />
        </View>
    )
}

const connectedHomeScreen = withSearchContext(HomeScreen);

connectedHomeScreen.navigationOptions = {
    header: ({ scene, previous, navigation }) => {
        return (
            <NavigationBar 
                styleName="inline no-border"
                leftComponent = {
                    <Icon type="Feather" name="menu" />
                }
                rightComponent = {
                    <View style={styles.rightNavBarOptions}>
                        <Icon type="Fontisto" name="bell" style={styles.icon}/>
                        <Icon type="Feather" name="filter" />
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: "#ffffff"
    },
    icon: {
        padding: '1%'
    },
    rightNavBarOptions: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fefefe"
    }
});

export default connectedHomeScreen;