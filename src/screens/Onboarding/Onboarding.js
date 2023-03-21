import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Swiper,
  Platform,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const { height, width } = Dimensions.get('window');
const slides = [
  {
    key: 1,
    backgroundColor: '#000',
    textColor: '#fff',
    image: require('../../assets/images/facebook-messenger-icon.png'),
    text: 'Welcome to the ',
    txt1: 'safest ',
    title: 'Messaging',
    txt: ' App',
    mWidth: 2.5,
    mColor: 'rgb(252,175,220)',
  },
  {
    key: 2,
    backgroundColor: '#000',
    textColor: '#fff',
    image: require('../../assets/images/facebook-messenger-icon.png'),
    text: 'Welcome to the ',
    txt1: 'safest ',
    title: 'Messaging',
    txt: ' App',
    mWidth: 2.5,
    mColor: 'rgb(252,175,220)',
  },
  {
    key: 3,
    backgroundColor: '#000',
    textColor: '#fff',
    image: require('../../assets/images/facebook-messenger-icon.png'),
    text: 'Welcome to the ',
    txt1: 'safest ',
    title: 'Messaging',
    txt: ' App',
    mWidth: 2.5,
    mColor: 'rgb(252,175,220)',
  },
  {
    key: 4,
    backgroundColor: '#000',
    textColor: '#fff',
    image: require('../../assets/images/facebook-messenger-icon.png'),
    text: 'Welcome to the ',
    txt1: 'safest ',
    title: 'Messaging',
    txt: ' App',
    mWidth: 2.5,
    mColor: 'rgb(252,175,220)',
  },
];
const Onboarding = props => {
  const [showRealApp, setShowRealApp] = useState(false);
  const _onDone = () => {
    setShowRealApp(true);
    props.navigation.navigate('Signup');
  };
  const _onSkip = () => {
    setShowRealApp(true);
    props.navigation.navigate('Signup');
  };

  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.main, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.vw}>
          <View style={styles.vw1}>
            <View>
              <Text style={[styles.text1, { color: item.textColor }]}>
                {item.text}
              </Text>
            </View>
            <View style={[styles.flex]}>
              <View>
                <Text style={[styles.txt1, { color: item.textColor }]}>
                  {item.txt1}
                </Text>
              </View>
              <View
                style={[
                  {
                    borderBottomWidth: item.mWidth,
                  },
                  {
                    borderBottomColor: item.mColor,
                  },
                ]}>
                <Text
                  style={[
                    styles.txt2,
                    {
                      color: item.textColor,
                    },
                  ]}>
                  {item.title}
                </Text>
              </View>
            </View>
            <View>
              <Text style={[styles.text3, { color: item.textColor }]}>
                {item.txt}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.img_vw}>
          <Image style={styles.img} source={item.image} />
        </View>
        <View></View>
        <View></View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          onDone={_onDone}
          onSkip={_onSkip}
          showSkipButton={true}
          showNextButton={true}
          dotStyle={{
            backgroundColor: '#4a4849',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    dotColor: 'white',
    height: Platform.OS === 'android' ? height * 1 : height * 0.9,
    width: width * 1,
  },

  vw1: {
    height: height * 0.29,
    width: width * 0.79,
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  img: {
    height: 60,
    width: 60,
  },
  main: {
    height: Platform.OS === 'android' ? height * 1 : height * 0.9,
    width: width * 1,
    backgroundColor: 'rgb(0,0,0)',
  },
  vw: {
    height: height * 0.3,
    width: width * 1,

    alignItems: 'center',
  },
  text1: {
    fontSize: 40,
    fontWeight: '400',
  },
  txt2: {
    fontSize: 38,
    fontWeight: '400',
  },
  txt1: {
    fontSize: 40,
    fontWeight: '400',
  },
  text3: {
    fontSize: 40,
    fontWeight: '400',
  },
  flex: {
    width: width * 0.55,
    flexDirection: 'row',
  },
  onSkip: {
    height: 80,
    width: 90,
    backgroundColor: 'red',
  },
  img_vw:{
    height:height*0.3,
    width:width,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default Onboarding;
