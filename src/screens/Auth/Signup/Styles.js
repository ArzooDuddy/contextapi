import { StyleSheet,Dimensions} from 'react-native'
import GlobalDefines from '../../../Utils/GlobalDefines'
const{height,width}=Dimensions.get('window')
const styles = StyleSheet.create({
      main_container: {
            height: height,
            width: width,
            backgroundColor: '#fff'
      },
      header: {
            alignItems: 'center',
            justifyContent: 'center',
            height: height * 0.3
      },
      textinput: {
            height: height * 0.5,
      },
      button_vw: {
            height: height * 0.2
      },
      header_img: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
      },
      img: {
            height: 80,
            width: 80
      },
      title_textvw: {
            height: height * 0.1,
            width: width,
            alignItems: 'center',
            justifyContent: 'center'
      },
      title_text: {
            fontSize: height / 30,
            fontFamily: 'Genos-Regular',
            color: '#000'
      },

      button_wrap: {
            height: height * 0.15,
            width: width
      },
      button: {
            height: height * 0.07,
            width: width * 0.75,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#144bd9',
            borderRadius: 30
      },
      button_text: {
            fontSize: height / 40,
            fontFamily: GlobalDefines._fontFamilymedium,
            color: '#fff'
      },
      social_icons: {
            height: height * 0.08,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
      },
      login_vw: {
            height: height * 0.05,
            width: width * 0.7,
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center'
      },
      small_text: {
            fontSize: height / 60,
            color: '#000'
      }
})
export { styles }
