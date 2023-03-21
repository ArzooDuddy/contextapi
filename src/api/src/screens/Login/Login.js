import { View ,Alert,SafeAreaView} from 'react-native'
import { Text, TextInput,Button } from 'react-native-paper'
import React, { Component } from 'react'
import { styles } from '../Styles'

export default class Login extends Component {
  state = {
    password: '',
    name: '',
    loading: false,
  };
 saveEmail = async()=>{
  try{
    await AsyncStorage.setItem('name',name)
    await AsyncStorage.setItem('password',password)

  }catch(e){
    console.log('error',e)
  }
 }

  submit=()=>{
    if (this.state.name == '' ) {
        Alert.alert('please enter name');    
    }else if(this.state.password == '') 
      Alert.alert('please enter password')
    else{
      this.props.navigation.navigate('Home')
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header_wrap}>
          <View style={styles.header}>
            <Text variant="headlineLarge">Welcome !</Text>
          </View>
          <View style={styles.Login}>
            <View style={styles.Login_wrap}>
              <Text variant="labelMedium">Name</Text>
              <TextInput
                mode="outlined"
                label="Enter Name here"
                placeholder="Type"
                maxLength={10}
                value={this.state.name}
                onChangeText={txt=>this.setState({name: txt})}
              />
              <Text variant="labelMedium">Password</Text>
              <TextInput
                mode="outlined"
                label="Password"
                placeholder="Type"
                maxLength={10}
                secureTextEntry
                value={this.state.password}
                onChangeText={txt=>this.setState({password: txt})}
              />
            </View></View>
          <View style={styles.bottom}>
            <View style={styles.button_wrap}>
            <Button
              mode="outlined" onPress={() => (
                this.setState({ loading: true }),
                this.submit())}>
              Login
            </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>

    )
  }
}
