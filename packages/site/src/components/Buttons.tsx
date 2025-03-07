import type { ComponentProps } from 'react';
import styled from 'styled-components';
import React from 'react';
import { ReactComponent as FlaskFox } from '../assets/flask_fox.svg';
import { useMetaMask, useRequestSnap } from '../hooks';
import { shouldDisplayReconnectButton } from '../utils';

export const QubicSendButton = styled.button`
  border: none;
  height: 55px;
  min-width: 130px;
  font-size: 19px;
  font-weight: 600;
  line-height: 22.29px;
  letter-spacing: -2%;
  background-color: #ccfcff;
  color: #111927;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  :disabled {
    border: none !important;
    background: rgb(216, 220, 220);
    color: black;
    &:hover {
      background: rgb(216, 220, 220);
      color: black;
    }
  }

  &:hover {
    border-color: none;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 425px) {
    height: 35px;
    min-width: 100px;
    font-size: 14px;
    line-height: 14.29px;
  }
`;

export const MetaMaskIndicatorButton = styled.button`
  border: 1px solid #ff5c16 !important;
  background-color: white;
  color: #ff5c16;
  font-weight: 450;
  border-radius: 50px;
  min-width: 230px;

  &:hover {
    :disabled {
      background: #ff5c16;
    }

    border-color: #ff5c16 !important;
    transform: scale(1.05) !important;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3) !important;
  }
`;


export const LoadingButton = ({ onClick, loading=false, children, disabled  }:any) => {
 return (
   <QubicSendButton disabled={loading || disabled} onClick={onClick}>
     <div
       style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
       }}
     >
       {loading ? <div className="spinner" /> : null}
       <div>{children}</div>
     </div>
   </QubicSendButton>
 );
};

export const QubicBorderedtButton = styled.button`
  border: none !important;
  height: 55px;
  min-width: 127px;
  font-size: 19px;
  font-weight: 600;
  line-height: 22.29px;
  letter-spacing: -2%;
  color: #111927;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  background-color: white !important;
  :disabled {
    background: rgb(216, 220, 220) !important;
    color: black;
    &:hover {
      background: rgb(216, 220, 220);
      color: black;
    }
  }

  @media (max-width: 425px) {
    height: 35px;
    min-width: 100px;
    font-size: 14px;
    line-height: 14.29px;
  }
`;

const Link = styled.a`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius: ${(props) => props.theme.radii.button};
  border: 1px solid ${(props) => props.theme.colors.background?.inverse};
  background-color: ${(props) => props.theme.colors.background?.inverse};
  color: ${(props) => props.theme.colors.text?.inverse};
  text-decoration: none;
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.background?.inverse};
    color: ${(props) => props.theme.colors.text?.default};
  }

  ${({ theme }) => theme.mediaQueries.small} {
    width: 100%;
    box-sizing: border-box;
  }

`;

const Button = styled.button`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  ${({ theme }) => theme.mediaQueries.small} {
    width: 100%;
  }
`;

const ButtonText = styled.span`
  margin-left: 1rem;
`;

const ConnectedContainer = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius: ${(props) => props.theme.radii.button};
  border: 1px solid ${(props) => props.theme.colors.background?.inverse};
  background-color: ${(props) => props.theme.colors.background?.inverse};
  color: ${(props) => props.theme.colors.text?.inverse};
  font-weight: bold;
  padding: 1.2rem;
`;

const ConnectedIndicator = styled.div`
  content: ' ';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
`;

export const InstallFlaskButton = () => (
  <Link href="https://metamask.io/flask/" target="_blank">
    <FlaskFox />
    <ButtonText>Install MetaMask Flask</ButtonText>
  </Link>
);

export const ConnectButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button {...props}>
      <FlaskFox />
      <ButtonText>Connect</ButtonText>
    </Button>
  );
};

export const ReconnectButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button {...props}>
      <FlaskFox />
      <ButtonText>Reconnect</ButtonText>
    </Button>
  );
};

export const SendHelloButton = (props: ComponentProps<typeof Button>) => {
  return <Button {...props}>Send message</Button>;
};

export const HeaderButtons = () => {
  const requestSnap = useRequestSnap();
  const { isFlask, installedSnap } = useMetaMask();

  if (!isFlask && !installedSnap) {
    return <InstallFlaskButton />;
  }

  if (!installedSnap) {
    return <ConnectButton onClick={requestSnap} />;
  }

  if (shouldDisplayReconnectButton(installedSnap)) {
    return <ReconnectButton onClick={requestSnap} />;
  }

  return (
    <ConnectedContainer>
      <ConnectedIndicator />
      <ButtonText>Connected</ButtonText>
    </ConnectedContainer>
  );
};
