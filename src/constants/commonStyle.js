import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 40,
  },

  inputView: {
    width: "80%",
    justifyContent: "center",
    backgroundColor: "#d5d5d5",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    padding: 20
  },

  inputText: {
    height: 50,
    color: "#000"
  },

  forgotAndSignUpText: {
    color: "#000",
    fontSize: 12
  },

  loginBtnText: {
    color: "white",
    fontSize: 12,
    fontWeight: 'bold'
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "black",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },

  backIconContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },

  backIcon: {
    height: 26,
    width: 26,
    borderRadius: 8,
    backgroundColor: '#d5d5d5',
    justifyContent: 'center'
  },

  errorView : {
    borderColor: 'red',
    borderWidth: 1
  }
});

export default styles;