import { Dimensions, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React ,{useEffect}from 'react'
const { height, width } = Dimensions.get('window')
const Splash = (props) => {
      useEffect(() => {
            setTimeout(() => {
              props.navigation.navigate('Onboarding');
            }, 1000);
          }, []);
      return (
            <SafeAreaView style={styles.Main_container}>
                  <View style={styles.Main_container}>
                        <View style={styles.Splash_container}>
                              <Image style={styles.logo_img} source={require('../../assets/images/facebook-messenger-icon.png')} />
                        </View>
                        <View style={styles.bottom}>
                              <View style={styles.bottom_text_vw}>
                                    <Text style={styles.small_text}>from</Text>
                              </View>
                              <View style={styles.name_vw}>
                                    <View style={styles.name_logo_vw}>
                                          <Text style={styles.gradient_Text}>Meta</Text>
                                    </View>
                              </View>

                        </View>
                  </View>
            </SafeAreaView>
      )
}

export default Splash

const styles = StyleSheet.create({
      Main_container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
      },
      Splash_container: {
            flex: 7,
            width: width * 0.9,
            alignItems: 'center',
            justifyContent: 'center',
      },
      logo_img: {
            height: 60,
            width: 60
      },
      bottom: {
            flex: 1.3,
            width: width,
            alignItems: 'center',
      },
      bottom_text_vw: {
            flex: 1,
            width: width * 0.5,
            alignItems: 'center',
      },
      name_vw: {
            flex: 3,
            width: width * 0.5,
            alignItems: 'center'
      },
      small_text: {
            fontSize: height / 50,
            color: '#999',
            fontFamily:'Genos-Light',

      },
      gradient_Text: {
            fontSize: height / 37,
            color: '#00ff',
            fontFamily:'Genos-Regular',
            // textShadowColor: '#803596',
            // textShadowOffset: { width: 1, height: -1 },
            // textShadowRadius: 5,
      }

})