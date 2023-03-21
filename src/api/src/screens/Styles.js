import { Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor:'#ffffff'
      },
      wrap: {
            height: height * 0.3,
            width: width,
            justifyContent: 'center'
      },
      header_wrap: {
            flex: 1,
      },
      header: {
            flex: 2,
            justifyContent:'center',
            alignItems:'center'
      },
      Login: {
            flex: 3,
            justifyContent:'center',
            
      },
      Login_wrap:{
            height:height*0.22,
            width:width*0.9,
            justifyContent:'space-between',
            alignSelf:'center',
      },
      bottom:{
            flex:4,
      },
      button_wrap:{
            height:height*0.2,
            width:width*0.9,
            alignSelf:'center',
            justifyContent:'center',
      }
})

export { styles }