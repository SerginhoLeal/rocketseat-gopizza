import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({ colors: theme.colors.gradient, start: {x: 0, y: 1}, end: {x: 0.5, y: 0.5} }))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyles: {
    paddingBottom: getBottomSpace() + 48
  }
})`
  width: 100%;
  padding: 0 32px;
`;

export const Title = styled.Text`
  margin-bottom: 24px;
  align-self: flex-start;

  ${({ theme }) => css`
    font-size: ${theme.fonts.size.title};
    font-family: ${theme.fonts.title};
    color: ${theme.colors.title};
  `};
`;

// melhorar esse brand
export const Brand = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 250px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.text};
    color: ${theme.colors.title};
  `};
`;