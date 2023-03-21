import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
const { height, width } = Dimensions.get('window')
import GlobalDefines from '../Utils/GlobalDefines'
const DrawerStack = createDrawerNavigator();

import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../screens/Dashboard/Dashboard';
import Main from '../screens/Index/Main';

const DrawerNavigator = () => {

      // ****** Custom Drawer Routes ******
      function customerDrawerContent(props) {
            return (
                  <SafeAreaView>
                        <View style={styles.container}>
                              <DrawerContentScrollView {...props}>
                                    <View style={styles.logovw}>
                                          <View style={styles.menu_profle}>
                                                <TouchableOpacity>
                                                      <Icon name="face" size={30} color='#999' />
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                      <Text style={styles.name_text}>Arzoo Duddy</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                      <Icon name="arrow-drop-down" size={30} color='#000' />
                                                </TouchableOpacity>
                                          </View>
                                          <View style={styles.profile_settingicon_vw}>
                                                <Icon name="settings" size={23} color='#000' />
                                          </View>
                                    </View>
                                    <DrawerItemList  {...props} />
                              </DrawerContentScrollView>
                        </View>
                  </SafeAreaView>
            )
      }

      return (
            <DrawerStack.Navigator
                  screenOptions={{
                        headerShown: false,
                        drawerStyle: { width: width * 0.8 },
                        drawerActiveBackgroundColor: 'lightgray',
                        drawerActiveTintColor: '#000',
                        drawerInactiveTintColor: '#000',
                        drawerLabelStyle: { marginLeft: -10, fontSize: height / 50 }
                        // drawerPosition:"right
                  }}
                  drawerContent={(props) => customerDrawerContent(props)}
            >
                  <DrawerStack.Screen name="Chats" component={Dashboard}
                        options={{

                              drawerIcon: () => (
                                    <Icon name="message" size={20} color='#000' />),
                        }}
                  />
                  <DrawerStack.Screen name="Marketplace" component={Main}
                        options={{
                              drawerIcon: () => (
                                    <Icon name="shopping-bag" size={20} color='#000'/>),
                        }} />
                  <DrawerStack.Screen name="Message Request" component={Main}
                        options={{
                              drawerIcon: () => (
                                    <Icon name="message" size={20} color='#000' />),
                        }} />
                        <DrawerStack.Screen name="Archive" component={Main}
                        options={{
                              drawerIcon: () => (
                                    <Icon name="archive" size={20} color='#000' />),
                        }} />

            </DrawerStack.Navigator>
      )
}
export default DrawerNavigator;
const styles = StyleSheet.create({
      container: {
            width: width * 0.75,
            height: height,
      },
      side_icon: {
            height: 30,
            width: 30,
            borderRadius: 10
      },
      logovw: {
            height: height * 0.09,
            width: width * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: "center",
            flexDirection:'row'
      },
      logo_icon: {
            height: 100,
            width: 100,
            borderRadius: 200
      },
      menu_profle:{
            flexDirection:'row',
            width:width*0.6,
            height:height*0.06,
            justifyContent:'space-evenly',
            alignItems:'center',
      },
      name_text:{
            fontSize:height/50,
            fontWeight:'700',
            color:'#000'
      },
      profile_settingicon_vw:{
            height:height*0.06,
            width:width*0.2,
            alignItems:'center',
            justifyContent:'center'
      }

})