import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import Textinput from '../../../Components/Textinput';
import { styles } from './Styles';
const Signup = (props) => {
      return (
            <SafeAreaView style={styles.main_container}>
                  <View style={styles.main_container}>
                        <View style={styles.header}>
                              <View style={styles.header_img}>
                                    <Image style={styles.img} source={require('../../../assets/images/facebook-messenger-icon.png')} />
                              </View>
                              <View style={styles.title_textvw}>
                                    <Text style={styles.title_text}>Create New Account</Text>
                              </View>
                        </View>
                        <View style={styles.textinput}>
                              <Textinput label='First Name' />
                              <Textinput label='Last Name' />
                              <Textinput label='Phone no.' />
                              <Textinput label='Email' />
                              <Textinput label='Password' />
                        </View>
                        <View style={styles.button_vw}>
                              <View style={styles.button_wrap}>
                                    <TouchableOpacity onPress={()=>{
                                          props.navigation.navigate('Dashboard')
                                    }} style={styles.button} 
                                    >
                                          <Text style={styles.button_text}>Create New Account</Text>
                                    </TouchableOpacity>
                                    <View style={styles.login_vw}>
                                          <Text style={styles.small_text}>Already have an account ? </Text>
                                          <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                                                <Text style={[styles.small_text, { color: '#355090', textDecorationLine: 'underline' }]}>Login</Text>
                                          </TouchableOpacity>
                                    </View>
                              </View>
                              <View style={styles.social_icons}>
                                    <Text style={styles.small_text}>Or Continue with </Text>
                                    <TouchableOpacity>
                                          <Icon name="sc-google-plus" size={30} color='#355096' />
                                    </TouchableOpacity>

                              </View>
                        </View>
                  </View>
            </SafeAreaView >
      )
}

export default Signup

