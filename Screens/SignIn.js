import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignIn = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('signUp');
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/images/transparentLogo.png')}
        />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.heading}>
          Welcome {`\n`}
          back
        </Text>
        <View style={styles.formView}>
          <TextInput
            placeholder="Email adress*"
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password*"
            placeholderTextColor="white"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.textButton} onPress={navigate}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '70%',
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  imgStyle: {
    width: '60%',
    resizeMode: 'contain',
  },
  heading: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 60,
  },
  formView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textInput: {
    color: '#fff',
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    height: 52,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
  },
  button: {
    width: '90%',
    color: '#000',
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'gray',
  },
  textButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});
export default SignIn;
