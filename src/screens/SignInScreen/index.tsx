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

const SignInScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const handleSignIn = useCallback(() => {
    signIn(email, password);
  }, [email, password]);

  const goToSignUp = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: ERouteNames.SIGN_UP_SCREEN }],
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text>Sign In Screen</Text>
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
              hint="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.textInput}
            />
          </View>
        </View>
        <CustomButton onPress={handleSignIn}>Log in</CustomButton>
        <CustomButton onPress={goToSignUp}>Go to Sign Up</CustomButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
