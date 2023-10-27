import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from"../screens/Feed";
import CreatePost from "../screens/CreatePost";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () =>{
 return(
    <Tab.Navigator 
     barStyle = {styles.bottomTabStyle}
    >
        <Tab.Screen name = 'Feed' component={Feed}/>
        <Tab.Screen name = 'CreatePost' component = {CreatePost}/>
    </Tab.Navigator>
 );
}

const styles = StyleSheet.create({
   bottomTabStyle: {
      backgroundColor: "#2a2a2a",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
  },
  bottomTabStyleLight: {
      backgroundColor: "#eaeaea",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
  },
  icons: {
      width: RFValue(30),
      height: RFValue(30)
  }
})

export default BottomTabNavigator;
