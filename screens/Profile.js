import *as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    Switch
} from 'react-native';
// import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Profile extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text>Profile</Text>
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
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
    },
    appTitleTextLight: {
        color: "black",
        fontSize: RFValue(28),
    },
    screenContainer: {
        flex: 0.85
    },
    profileImageContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: RFValue(140),
        height: RFValue(140),
        borderRadius: RFValue(70)
    },

    nameText: {
        color: "white",
        fontSize: RFValue(40),
        marginTop: RFValue(10)
    },
    nameTextLight: {
        color: "black",
        fontSize: RFValue(40),
        marginTop: RFValue(10)
    },
    themeContainer: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: RFValue(20)
    },
    themeText: {
        color: "white",
        fontSize: RFValue(20),
        marginRight: RFValue(15)
    },
    themeTextLight: {
        color: "black",
        fontSize: RFValue(20),
        marginRight: RFValue(15)
    }
})