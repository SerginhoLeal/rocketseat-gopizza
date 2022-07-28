import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
  title: string;
  type?: Styles.TypeProps;
  isLoading?: boolean;
}

export const Button: React.FC<Props> = ({ 
  title,
  type = 'primary',
  isLoading = false,
  ...rest
}: Props) => {
  return (
    <Styles.Container type={type} enabled={!isLoading} {...rest}>
      {isLoading ? <Styles.Load /> : <Styles.Title>{title}</Styles.Title>}
    </Styles.Container>
  );
};