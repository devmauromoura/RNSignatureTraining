import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.View`
    flex: 1;
    padding: 5px;
`;
export const Header = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
`;
export const Title = styled.Text`
    font-size: 35px;
    font-weight: bold;
    font-family: cursive;
    color: ${colors.text_light};
`;
export const SubTitle = styled.Text`
    font-size: 18px;
    font-family: sans-serif;
    color: ${colors.text_light};
`;

export const Body = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const ButtonContainer = styled.View`
    width: 100%;
`;
export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: ${colors.button_dark};
    height: 150px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    font-family: sans-serif;
    color: ${colors.text_light};    
`;

export const Footer = styled.View`
    position: absolute;
    bottom: 2px;    
    width: 100%;
    align-items: center;
`;
export const TextFooter = styled.Text`
    font-size: 18px;
    font-weight: bold;
    font-family: sans-serif;
    color: ${colors.text_light}; 
`;