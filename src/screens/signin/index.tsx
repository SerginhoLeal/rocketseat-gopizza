import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { Input } from '@common';

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
    </Styles.Container>
  );
}

export default Signin;