import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

type Props = Native.TextInputProps & {
  type?: Styles.TypeProps
};

export const Input: React.FC<Props> = ({ type = 'primary', ...rest }: Props) => {
  return <Styles.Container type={type} {...rest} />;
};