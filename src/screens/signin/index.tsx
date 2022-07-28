import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { Input, Button } from '@common';

const Signin: React.FC = () => {
  return (
    <Styles.Container>
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
      <Button
        title='Entrar'
        type='secondary'
        isLoading={false}
      />
    </Styles.Container>
  );
}

export default Signin;