import React from 'react';
import { Text, View, StyleSheet, Image, Platform, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { WebView } from 'react-native-webview';
import { FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';

const images = [
    require('./assets/images/impact1.webp'),
    require('./assets/images/impact2.webp'),
    require('./assets/images/impact3.webp'),
];

const defaultDataWith6Colors = [
    "#B0604D",
    "#899F9C",
    "#B3C680",
    "#5C6265",
    "#F5D399",
    "#F1F1F1",
];

export default function Index() {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const renderItem = ({ item}: { item: any; index: number }) => (
        <Image source={item} style={styles.slide} />
    );

    const width = Dimensions.get('window').width;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.navbar}>
                <Image source={require('./assets/images/logo.png')} style={styles.logo} />
                <View style={styles.navItemContainer}><Text style={styles.navItem}>About Us</Text></View>
                <View style={styles.navItemContainer}><Text style={styles.navItem}>Register</Text></View>
                <View style={styles.navItemContainer}><Text style={styles.navItem}>Programs</Text></View>
                <View style={styles.navItemContainer}><Text style={styles.navItem}>Events</Text></View>
                <View style={styles.navItemContainer}><Text style={styles.navItem}>Publicity</Text></View>
                <View style={styles.navItemContainer}><Text style={styles.navItem}>Donate</Text></View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.hugeText}>Language Virtual</Text>
                    <Text style={styles.subtitle}>501(c)3 Nonprofit Organization</Text>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name="book" size={30} color="white" />
                        <Text style={styles.additionalText}>Teach or Learn English</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name="globe" size={30} color="white" />
                        <Text style={styles.additionalText}>Connecting our world through English</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name="users" size={30} color="white" />
                        <Text style={styles.additionalText}>Creating a Global Community of Students</Text>
                    </View>
                </View>
                {Platform.OS === 'web' ? (
                    <iframe
                        style={styles.video}
                        src="https://www.youtube.com/embed/41e108JdB-c?si=e-LVIrssmrsLl_F5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <WebView
                        style={styles.video}
                        source={{ uri: 'https://youtu.be/41e108JdB-c?si=7GB2jowFIvmitRIk' }}
                    />
                )}
            </View>
            <View style={styles.divider} />
            <View style={styles.impactContainer}>
                <View style={styles.impactTextContainer}>
                    <Text style={styles.impactTitle}>Our Impact</Text>
                    <Text style={styles.bulletPoint}>• 100+ teachers</Text>
                    <Text style={styles.bulletPoint}>• 700+ students</Text>
                    <Text style={styles.bulletPoint}>• 20+ countries</Text>
                </View>
                <View
                    id="carousel-component"
                    dataSet={{ kind: "basic-layouts", name: "stack" }}
                >
                <Carousel
                    loop
                    width={650}
                    height={400}
                    autoPlay={true}
                    scrollAnimationDuration={1000}
                    autoPlayInterval={1000}
                    data={images}
                    renderItem={renderItem}
                    mode={"horizontal-stack"}
                    modeConfig={{
                        snapDirection: "left",
                        stackInterval: 18,
                    }}
                    style={styles.slideshow}
                />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#01ADBF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        backgroundColor: '#FAE179',
        position: 'absolute',
        top: 0,
    },
    navItemContainer: {
        marginRight: 50,
    },
    navItem: {
        fontSize: 20,
        color: '#000000',
        fontFamily: 'Poppins-Bold',
        marginRight: 20,
    },
    logo: {
        width: 128,
        height: 128,
        marginRight: 'auto'
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 200,
    },
    textContainer: {
        alignItems: 'flex-start',
        marginRight: 20,
    },
    hugeText: {
        fontSize: 50,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
        marginBottom: 50,
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    additionalText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
    },
    video: {
        width: 600,
        height: 400,
        marginLeft: 100,
        borderWidth: 0
    },
    divider: {
        width: '90%',
        height: 2,
        backgroundColor: '#FFFFFF',
        marginVertical: 80,
    },
    impactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    impactTextContainer: {
        alignItems: 'flex-start',
        marginRight: 20,
    },
    impactTitle: {
        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
        marginBottom: 10,
    },
    bulletPoint: {
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
        marginBottom: 5,
    },
    slide: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    slideshow: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 50
    }
});