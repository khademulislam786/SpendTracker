import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../../constants/commonStyle';
import * as StaticText from '../../constants/staticText';
import {useSelector, useDispatch} from 'react-redux';
import * as UserLoginAction from '../../store/action/auth-action';

const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch();

    const {
        email,
        password
    } = useSelector(state => state.userLogin);

    const [enterEmail, setEnterEmail] = useState('');
    const [enterPassword, setEnterPassword] = useState('')

    const [checkValidEmail, setValidEmail] = useState(false);
    const [checkEmailField, setCheckEmailField] = useState(false)
    const [checkPasswordField, setPasswordField] = useState(false)
    
    const enterAndValidateEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(enterEmail) === false) {
            setValidEmail(true)
            return false;
        }
        else {
            setValidEmail(false)
        }
    }

    const onEmailEnter = (text) => {
        setEnterEmail(text);
        setCheckEmailField(false)
    }
    
    const onPasswordEnter = (text) => {
        setEnterPassword(text);
        setPasswordField(false)
    }
    
    const onPressLogin = () => {
        if(enterEmail === '' && enterPassword === '') {
            setCheckEmailField(true);
            setPasswordField(true);
        }else if(enterEmail === '' || checkValidEmail === true) {
            setCheckEmailField(true)
        } else if(enterPassword === '') {
            setPasswordField(true)
        } else {
            const data = {
                email: enterEmail,
                password: enterPassword,
            }
            dispatch(UserLoginAction.onUserLogin(data))
            navigation.navigate('SpendTracker');
        }
    };
    
    const onPressForgotPassword = () => {
        // Forgot Password Action Code
    };
      
    const onPressSignUp = () => {
        // Signup Action Code
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Login Screen`}</Text>
            <View style={checkEmailField || checkValidEmail ? [styles.inputView, styles.errorView]: [styles.inputView]}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    onChangeText={onEmailEnter}
                    onEndEditing={enterAndValidateEmail}
                    onFocus={() => setValidEmail(false)}
                    value={enterEmail}
                    keyboardType={'email-address'}
                />
            </View>
            <View style={checkPasswordField ? [styles.inputView, styles.errorView]: [styles.inputView]}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={onPasswordEnter}
                    value={enterPassword}
                    keyboardType={'default'}
                />
            </View>
            {checkValidEmail && <Text style={[styles.forgotAndSignUpText,{color: 'red', marginBottom: 15}]}>{StaticText.VALID_EMAIL_MESSAGE}</Text>}
            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>{StaticText.LOGIN_TEXT} </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', gap: 110}}>
                <TouchableOpacity onPress={onPressForgotPassword}>
                    <Text style={styles.forgotAndSignUpText}>{StaticText.FORGOT_PASSWORD_TEXT}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSignUp}>
                    <Text style={styles.forgotAndSignUpText}>{StaticText.SIGNUP_TEXT}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;

