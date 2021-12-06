import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Linking,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Button1 from "../components/Button1";
import logo from '../assets/images/KISLAlogo.jpg';
import Feather from 'react-native-vector-icons/Feather';
import {SocialIcon} from 'react-native-elements';

const height = Dimensions.get('window').height;



function Linkit(props) {
  return (
    <View style={styles.container}>
      {/* Rullausmetodi */}
      <ScrollView>
         {/* Yläosa */}
         <SafeAreaView>
          <View style={styles.menuWrapper}>

            {/* Ei käytössä, mustana */}
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
              
            />
            <Image source={logo} style={styles.logoImage} />
          </View>
        </SafeAreaView>

      <View style={styles.etusivuStack}>
        <Text style={styles.etusivu}>Etusivu</Text>
        <View style={styles.rect10}>
          <Text style={styles.kotihalli}
          onPress={() => Linking.openURL('https://jooarena.fi/yhteystiedot/')}>
          Kotihalli</Text>
        </View>
      </View>
      <Text style={styles.tulevatPelit}>Korttilinkki</Text>
      <View style={styles.button1Row}>
      </View>
      <View style={styles.group9Row}>
        <View style={styles.group9}>
          <View style={styles.rect3}>
            <Text style={styles.jasenkortti}>Jäsenkortti</Text>
          </View>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.tulospalvelu}
          onPress={() => Linking.openURL('https://salibandy.fi/tulospalvelu/')}>
          Tulospalvelu</Text>
        </View>
      </View>
      <View style={styles.rect5}>
        <Text style={styles.kisla1Tulokset} 
        onPress={() => Linking.openURL('http://2005542mb.azurewebsites.net/kisla_login.php')}>
        Kortti</Text>
      </View>




      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  etusivu: {
    top: 24,
    left: 6,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212"
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rect10: {
    top: 0,
    left: 0,
    width: 248,
    height: 41,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 36
  },
  kotihalli: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 12,
    marginLeft: 20
  },
  etusivuStack: {
    width: 248,
    height: 41,
    marginTop: 443,
    marginLeft: 23
  },
  tulevatPelit: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: -400,
    marginLeft: 30
  },
  button1: {
    height: 44,
    width: 40
  },
  image: {
    width: 132,
    height: 122,
    borderRadius: 100,
    marginLeft: 186,
    marginTop: 2
  },
  button1Row: {
    height: 124,
    flexDirection: "row",
    marginTop: -147,
    marginLeft: 17
  },
  group9: {
    width: 165,
    height: 69
  },
  rect3: {
    width: 165,
    height: 69,
    backgroundColor: "#E6E6E6",
    borderRadius: 100
  },
  jasenkortti: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 25,
    marginLeft: 48
  },
  rect4: {
    width: 165,
    height: 69,
    backgroundColor: "#E6E6E6",
    borderRadius: 100
  },
  tulospalvelu: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 26,
    marginLeft: 48
  },
  group9Row: {
    height: 69,
    flexDirection: "row",
    marginTop: 533,
    marginLeft: 23,
    marginRight: 22
  },
  rect5: {
    width: 248,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: -567,
    marginLeft: 23
  },
  kisla1Tulokset: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 11,
    marginLeft: 25
  },
  rect6: {
    width: 248,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: 7,
    marginLeft: 23
  },
  kisla2Tulokset: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 11,
    marginLeft: 23
  },
  rect7: {
    width: 248,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: 7,
    marginLeft: 23
  },
  kisla3: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 11,
    marginLeft: 23
  },
  rect8: {
    width: 248,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: 5,
    marginLeft: 23
  },
  kotisivut: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 12,
    marginLeft: 23
  },
  rect9: {
    width: 248,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: 7,
    marginLeft: 23
  },
  nimenhuuto: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 12,
    marginLeft: 20
  },
  rect11: {
    width: 248,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: 55,
    marginLeft: 23
  },
  jasenkortti2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 12,
    marginLeft: 19
  },
  rect12: {
    width: 248,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: 7,
    marginLeft: 23
  },
  etusivu2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 12,
    marginLeft: 20
  }
});

export default Linkit;
