import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { Input, Button } from '@common';

import BrandImg from '@assets/brand.png';

const Signin: React.FC = () => {
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
          />
          <Input
            placeholder='Senha'
            type='secondary'
            secureTextEntry
          />

          <Styles.ForgotPasswordButton>
            <Styles.ForgotPasswordLabel>
              Esqueci minha senha
            </Styles.ForgotPasswordLabel>
          </Styles.ForgotPasswordButton>

          <Button
            title='Entrar'
            type='secondary'
            isLoading={false}
          />
        </Styles.Content>
      </Native.KeyboardAvoidingView>
    </Styles.Container>
  );
}

export default Signin;