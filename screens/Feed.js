import *as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image
} from 'react-native';
// import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Feed extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text>Feed</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    containerLight: {
        flex: 1,
        backgroundColor: "white"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
    },
    appTitleTextLight: {
        color: "black",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    },
    noPosts: {
        flex: 0.85,
        justifyContent: "center",
        alignItems: "center"
    },
    noPostsTextLight: {
        fontSize: RFValue(20),
    },
    noPostsText: {
        color: "white",
        fontSize: RFValue(20),
    }
})