import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Subtitle, Text, Button, Title, Caption } from '@shoutem/ui';
import {NavigationContext} from 'react-navigation';

function SectionHeader(props) {
    const {navigate} = useContext(NavigationContext)
    // debugger
    return (
        <View style={styles.container}>
            <Title styleName="bold h-center" style={styles.subtitle}>{props.title}</Title>
            { props.hasMore ? (
                <Button styleName="clear" style={styles.moreAction} onPress={() => navigate(props.title)}>
                    <Caption>See all</Caption>
                </Button>) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 10,
        height: 50
    },
    subtitle: {
        fontFamily: 'Roboto'
    },
    moreAction: {
        fontFamily: 'Roboto'
    }
})

export default SectionHeader;