import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from './styles/style';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top} >
        <Text style={styles.textTop}>LOGIN</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput style={styles.input} placeholder='Email' />
      </View>
      <View style={styles.inputs}>
        <TextInput style={styles.input} secureTextEntry={true} placeholder='PassWord' />
        <Image style={styles.inputImg} source={require('./assets/eye.png')} />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>When you agree to terms and conditions</Text>
        <Text style={[styles.textTitle, styles.colorT]}>For got your password?</Text>
        <Text style={styles.textTitle}>Or login with</Text>
      </View>
      <View style={styles.logo}>
        <TouchableOpacity>
          <Image source={require('./assets/facebook.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/zalo.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/google.png')} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efdf',
    alignItems: 'center',
  },
  top: {
    margin: 52
  },
  textTop: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  inputs: {
    backgroundColor: '#cae1d1',
    width: width * 0.9,
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
    paddingLeft: 12,
  },
  input: {
    width: width * 0.3,
    height: 50,
    fontSize: 18,
  },
  inputImg: {

  },
  buttons: {
    marginTop: 24,
  },
  button: {
    backgroundColor: '#c34e3c',
    width: width * 0.9,
    padding: 15,
    borderRadius: 2,
    alignItems: 'center',
    marginTop: 12
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  title: {
    marginTop: 32,
    alignItems: 'center',
  },
  textTitle: {
    padding: 8,
    fontSize: 14,
    fontStyle: 'normal',
  },
  colorT: {
    color: "#5D25FA"
  },
  logo: {
    marginTop: 8,
    flexDirection: 'row',
  }
});