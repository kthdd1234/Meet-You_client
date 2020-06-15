import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as RootNavigation from '../RootNavigation';
class LogInScreen extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Meet-you</Text>
        </View>
        <View style={styles.formArea}>
          <TextInput style={styles.textForm} placeholder={'ID'} />
          <TextInput
            style={styles.textForm}
            placeholder={'Password'}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => RootNavigation.navigate('MainStack', {})}
          >
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonTitle}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: wp('10%'),
    paddingRight: wp('10%'),
    justifyContent: 'center',
  },
  titleArea: {
    width: '100%',
    padding: wp('10%'),
    alignItems: 'center',
  },
  title: {
    fontSize: wp('10%'),
  },
  formArea: {
    width: '100%',
    paddingBottom: wp('10%'),
  },
  textForm: {
    borderWidth: 0.5,
    borderColor: '#888',
    width: '100%',
    height: hp('5%'),
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
  buttonArea: {
    width: '100%',
    height: hp('5%'),
  },
  button: {
    backgroundColor: '#46c3ad',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'white',
  },
});
