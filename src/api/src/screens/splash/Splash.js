import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-paper';
import { styles } from '../Styles';
export default class Splash extends Component {
      state = {
            loading: false,
          };
      render() {
            return (
                  <SafeAreaView style={styles.container}>
                        <View style={styles.container}>
                              <View style={styles.button_wrap}>
                              <Button                              
                               mode="outlined" onPress={() => (
                                    this.setState({loading: true}),
                                    this.props.navigation.navigate('Login'))}>
                                    Click me
                              </Button>
                              </View>
                        </View>
                  </SafeAreaView>
            )
      }
}
