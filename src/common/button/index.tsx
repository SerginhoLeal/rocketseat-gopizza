import * as React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
  title: string;
  type?: Styles.TypeProps;
  isLoading?: boolean;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ 
  title,
  type = 'primary',
  isLoading = false,
  onPress,
  ...rest
}: Props) => {
  return (
    <Styles.Container type={type} disabled={isLoading} onPress={onPress}>
      {isLoading ? <Styles.Load /> : <Styles.Title>{title}</Styles.Title>}
    </Styles.Container>
  );
};