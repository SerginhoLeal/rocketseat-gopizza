import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { usePizzaContext } from '@context';

import { Input, Button } from '@common';

import BrandImg from '@assets/brand.png';

const Signin: React.FC = () => {
  const { signin, isLoggin, forgotPassword, signOut } = usePizzaContext();

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  
  const handleSignIn = () => {
    signin(email, password)
  };

  const handleForgotPassword = () => {
    forgotPassword(email)
  };

  return (
    <Styles.Container>
      <Native.KeyboardAvoidingView behavior={Native.Platform.OS === 'ios' ? 'padding' : undefined}>
        <Styles.Content>

          <Styles.Brand source={BrandImg} />

          <Styles.Title>Login</Styles.Title>

          <Input
            placeholder='E-mail'
            type='secondary'
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Input
            placeholder='Senha'
            type='secondary'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Styles.ForgotPasswordButton onPress={handleForgotPassword}>
            <Styles.ForgotPasswordLabel>
              Esqueci minha senha
            </Styles.ForgotPasswordLabel>
          </Styles.ForgotPasswordButton>

          <Button
            title='Entrar'
            type='secondary'
            isLoading={isLoggin}
            onPress={handleSignIn}
          />

        </Styles.Content>
      </Native.KeyboardAvoidingView>
    </Styles.Container>
  );
}

export default Signin;