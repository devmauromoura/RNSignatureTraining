import React from 'react';
import colors from '../../assets/colors';
import {Safe, StatusB, Background} from '../../generalStyles';
import { Body, Button, ButtonContainer, ButtonText, Container, Footer, Header, SubTitle, TextFooter, Title } from './styles';

const InitialScreen = () => {
    return(
        <Safe>
            <StatusB backgroundColor={colors.background_dark}/>
            <Background>
                <Container>
                    <Header>
                        <Title>RNSignatureTraining</Title>
                        <SubTitle>Application to signature and picture collect for training.</SubTitle>
                    </Header>
                    <Body>
                        <ButtonContainer>
                            <Button>
                                <ButtonText>Collect only Signature</ButtonText>
                            </Button>
                            <Button>
                                <ButtonText>Collect Signature with Selfie Picture</ButtonText>
                            </Button>
                        </ButtonContainer>
                    </Body>
                    <Footer>
                        <TextFooter>Developed by devmauromoura</TextFooter>
                    </Footer>
                </Container>
            </Background>
        </Safe>
    );
}

export default InitialScreen;   