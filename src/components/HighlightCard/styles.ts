import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}



export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secundary : theme.colors.shape};

  width: ${RFValue(300)}px;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(22)}px;
  margin-right: ${RFValue(22)}px;

`;


export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;


export const Icon = styled(Feather) <TypeProps>`
  ${(props) => props.type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `};
  ${(props) => props.type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `};
  ${(props) => props.type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `};
  font-size: ${RFValue(30)}px;  
`;


export const Footer = styled.View`
  height: ${RFValue(140)}px;
  justify-content: center;

`;


export const Amount = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
`;


export const LastTranscition = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
  
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
