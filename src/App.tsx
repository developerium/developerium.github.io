import React from 'react';
import styled from 'styled-components';
import { AppStyle } from './AppStyle';
import { Header } from './Header';
import { appColor, maxWidth } from './theme';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 900px;

  padding: 16px;
  margin: auto;

  border-radius: 8px;
  background-color: ${appColor};

  @media (max-width: ${maxWidth}px) {
    width: 85%;
    height: 85%;
  }
`;

function App() {
  return (
    <Root>
      <AppStyle />
      <Header />
    </Root>
  );
}

export default App;
