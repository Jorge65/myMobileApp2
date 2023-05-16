import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import Text from './Text';
import theme from "../theme";

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    form: {
      backgroundColor: theme.backgroundColors.repositoryItem,
      padding: 15,
    },
    button: {
      backgroundColor: theme.backgroundColors.button,
      color: "white",
      padding: 15,
      marginTop: 15,
      textAlign: "center",
    },
  });
  
  // console.log("onSubmit)")
  return (
    <View style={styles.form}>
      <FormikTextInput 
        name="username" 
        placeholder="Username" />
      <FormikTextInput 
        name="password" 
        placeholder="Password"
        secureTextEntry={true} />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}> 
          Sign in
        </Text>
      </Pressable>

    </View>
  );
};


const SignIn = () => {
  const onSubmit = (values) => {
    console.log("..SignIn, values...", values);
  };
  
//  return 
// <Text>The sign-in view</Text>;
  return (
    <Formik 
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>    
  )
};

export default SignIn;

