import React from 'react';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import AntIcon from 'react-native-vector-icons/AntDesign'
import { StyleSheet } from 'react-native';

const IconDictionary = {
    Fontisto: FontistoIcon,
    Feather:  FeatherIcon,
    Ion: IonIcon,
    Octicon: OcticonIcon,
    Ant: AntIcon
}
function IconWrapper(props) {
    const Icon = IconDictionary[props.type];
    return (
        <Icon 
            {...props} 
            size={24} 
            style={props.style ? {...styles.iconBase, ...props.style} : styles.iconBase}
        />
    )
}

let styles = StyleSheet.create({
    iconBase: {
        padding: '10%',
        color: '#62727b'
    }
})

export default IconWrapper;