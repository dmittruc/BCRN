import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import TextInputWithHint from '../../components/TextInputWithHint';
import useAuth from '../../hooks/useAuth';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AuthStackParamList } from '../../interfaces/navigation/routeParams';
import styles from './styles';

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const { signUp } = useAuth();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const handleSignUp = useCallback(() => {
    signUp(email, name, password, repeatPassword);
  }, [email, name, password, repeatPassword]);

  const goToSignIn = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.SIGN_IN_SCREEN }],
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Text>BuddyCloud</Text>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.textInputsContainer}>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Name"
              value={name}
              onChangeText={setName}
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Repeat Password"
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              secureTextEntry
              style={styles.textInput}
            />
          </View>
        </View>
        <CustomButton onPress={handleSignUp}>Sign Up</CustomButton>
        <CustomButton onPress={goToSignIn}>Go to Sign In</CustomButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
