import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { useFetchData } from '../utils/customHooks';
import { getItemDetails } from '../utils/api';
import images from '../assets/images';
import { Spinner, NavigationBar, Title, View as ShoutemView, Caption, Subtitle, Divider, Button } from '@shoutem/ui';
import Icon from '../components/IconWrapper';
import Swiper from 'react-native-web-swiper';

function DetailsScreen (props) {
    const itemId = props.navigation.getParam('itemId') || 0;
    const itemDetails = useFetchData((cb) => getItemDetails(itemId, cb));
    if(itemDetails)
    {
        const { carousel, name, discountedPrice, actualPrice, ratings, review, reviewCount, description, avaialbleSize, avaialbleColor} = itemDetails;
        return (
            <View style={styles.container}>
                <Swiper
                    containerStyle={styles.carousel}
                    controlsProps={{
                        prevPos: false,
                        nextPos: false,
                        dotsPos: 'bottom-left',
                        dotActiveStyle: {backgroundColor: '#6666ff'},
                        dotProps: {
                            badgeStyle: {backgroundColor: '#ffffff'}
                        }
                    }}
                >
                    {carousel.map((image,index) => <Image key={index.toString()} source={images[image]} />)}
                </Swiper>
                <View style={styles.title}>
                    <Title style={{fontSize: 26}}>{name}</Title>
                    <ShoutemView styleName="horizontal">
                        <Title style={{color: '#6666ff'}} styleName="md-gutter-right">${discountedPrice}</Title>
                        <Caption styleName="line-through">${actualPrice}</Caption>
                    </ShoutemView>
                </View>

                <View style={styles.mainContent} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Divider styleName="line" />
                
                        <View style={styles.reviews}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={styles.rating}>
                                    <Text style={{color: '#ffffff'}}>{ratings}</Text>
                                </View>
                                <Subtitle>{review}</Subtitle>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#6666ff'}}>{reviewCount} Reviews</Text>
                            </View>
                        </View>
                        <Divider styleName="line" />

                        <View style={styles.description_container}>
                            <ScrollView>
                                <Subtitle style={{fontSize: 18, paddingVertical: 5}}>Description</Subtitle>
                                <Text style={styles.description_text}>{description}</Text>
                            </ScrollView>
                        </View>
                        
                        <Divider styleName="line" />
                        <View style={styles.selection}>
                            <Subtitle style={{color: '#6666ff'}}>Select Size</Subtitle>
                            <Subtitle>Select Color</Subtitle>
                        </View>
                        <Divider styleName="line" />
                        
                        <View style={styles.sizes}>
                            {avaialbleSize.map(size => (
                                <View style={styles.sizeSelect} >
                                    <Subtitle>{size}</Subtitle>
                                </View>)
                            )}
                        </View>
                    </ScrollView>
                </View>
                <Button styleName='full-width' style={styles.bottombtn}>
                    <Title style={{color: '#ffffff'}}>BUY NOW</Title>
                </Button>
            </View>
        )
    }

    return (
        <View style={styles.loading}>
            <Spinner size='large' />
        </View>
    )
}

DetailsScreen.navigationOptions = {
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
        flex: 1,
        backgroundColor: '#ffffff'
    },
    carousel: {
        flex: 3,
        marginHorizontal: 20,
        backgroundColor: 'transparent'
    },
    title: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 5,
        backgroundColor: 'transparent'
    },
    mainContent: {
        flex: 5,
        backgroundColor: '#ffffff'
    },
    bottombtn: {
        flex: 1,
        backgroundColor: '#6666ff',
    },
    // sub elements
    reviews: {
        height: 50,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    description_container: {
        marginHorizontal: 20,
        marginVertical: 10,
        maxHeight: 170,
        backgroundColor: 'transparent'
    },
    description_text: {
        lineHeight: 22,
        letterSpacing: 1,
        textAlign: 'justify'
    },
    selection: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent'
    },
    sizes: {
        height: 100,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    rating: {
        borderRadius: 6,
        paddingHorizontal: 13,
        paddingVertical: 8,
        marginRight: 20,
        backgroundColor: '#6666ff'
    },
    sizeSelect: {
        borderRadius: 6,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
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
});

export default DetailsScreen;