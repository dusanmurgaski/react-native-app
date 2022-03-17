import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {authentication} from '../Firebase/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {validateCallback} from '@firebase/util';
import {Overlay} from 'react-native-elements';

Icon.loadFont();
const SignUp = ({navigation}) => {
  const createUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log(re);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = () => {
    navigation.navigate('signIn');
  };

  const fullNameChange = value => {
    setFullname(value);
  };
  const emailChange = value => {
    setEmail(value);
  };
  const mobileChange = value => {
    setMobile(value);
  };
  const passwordChange = value => {
    setPassword(value);
  };
  const confirmPasswordChange = value => {
    setConfirmPassword(value);
  };

  const validateForm = () => {
    let formInputs = [fullName, email, password, mobile, confirmPassword];
    let passwordsMatch = password == confirmPassword;
    if (formInputs.includes('') || formInputs.includes(undefined)) return;
    if (!passwordsMatch) return console.log('passwords do not match');
    if (passwordsMatch) createUser();
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
        <Icon onPress={navigate} name="chevron-left" size={50} color={'#fff'} />
        <Text style={styles.heading}>Create Account</Text>
        <View style={styles.formView}>
          <TextInput
            onChangeText={fullNameChange}
            value={fullName}
            placeholder="Full Name*"
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <TextInput
            onChangeText={emailChange}
            value={email}
            placeholder="Email adress*"
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <TextInput
            onChangeText={mobileChange}
            value={mobile}
            placeholder="Mobile*"
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <TextInput
            onChangeText={passwordChange}
            value={password}
            placeholder="Password*"
            placeholderTextColor="white"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <TextInput
            onChangeText={confirmPasswordChange}
            value={confirmPassword}
            placeholder="Confirm password*"
            placeholderTextColor="white"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={validateForm} style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Overlay isVisible={true} onBackdropPress={toogleOverlay}>
        <Text>HELLO OVERLAY</Text>
      </Overlay>
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
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '85%',
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  imgStyle: {
    width: '50%',
    resizeMode: 'contain',
  },
  heading: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 20,
  },
  formView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
export default SignUp;
