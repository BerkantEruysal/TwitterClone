import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <View>
      <Image
        style={styles.twitterLogo}
        source={require('../assets/images/TwitterLogo.png')}></Image>
      <Text style={styles.welcomeText}>See whats happening on earth now.</Text>
      <View style={styles.regLogOptions}>
        <TouchableOpacity style={styles.registerOption}>
          <Image
            style={styles.googleLogo}
            source={require('../assets/images/googleLogo.png')}></Image>
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.orLine}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.orLine}></View>
        </View>

        <TouchableOpacity style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginTextContainer}>
        <Text >Do you have an account already? </Text>
        <TouchableOpacity>
          <Text style={styles.loginText} >Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;
const vh = function (payload) {
  return (screenHeight * payload) / 100;
};
const vw = function (payload) {
  return (screenWidth * payload) / 100;
};

const styles = StyleSheet.create({
  twitterLogo: {
    alignSelf: 'center',
    width: vw(7),
    height: vw((7 * 22) / 27),
    marginTop: 25,
  },
  googleLogo: {
    width: vw(7),
    height: vw(7),
  },
  welcomeText: {
    fontSize: vw(10),
    color: '#000000',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: vh(20),
    paddingHorizontal: 10,
  },
  backgroundImage: {
    width: 800,
    height: 800,
  },
  registerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    height: vh(6),
    justifyContent: 'space-between',
    paddingHorizontal: '22%',
    borderWidth: 1,
    width: vw(80),
  },
  regLogOptions: {
    paddingHorizontal: vw(10),
    marginTop: vh(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
  orContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  createAccountContainer: {
    backgroundColor: '#1DA1F2',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    height: vh(6),
    justifyContent: 'center',
    paddingHorizontal: '22%',

    width: vw(80),
  },
  createAccountText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    fontSize: 15,
  },
  googleText: {
    fontWeight: '900',
    color: '#000000',
    fontSize: 14,
  },
  loginText: {
    alignItems: 'center',
    color : '#1DA1F2'

  },
  loginTextContainer : {
    flexDirection : "row",
    marginHorizontal : vw(10),
    marginTop : 30,
    justifyContent : "center" 
  }
});
