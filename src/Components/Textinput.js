import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
const { height, width } = Dimensions.get('window');

const Textinput = (props) => {
      return (
            <View style={styles.email}>
                  <TextInput
                        label={props.label}
                        mode='outlined'
                        underlineColor='transparent'
                        numberOfLines={1}
                        keyboardType='default'
                        maxLength={10}
                        theme={{ colors: { text: 'white', primary: '#355096' } }}
                        style={styles.textinput_email}
                  />
            </View>
      )
}

export default Textinput

const styles = StyleSheet.create({
      email: {
            height: height * 0.08,
            width: width * 0.8,
            alignSelf: 'center',
      },
      textinput_email: {
            backgroundColor: '#fff'
      },
})