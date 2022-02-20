import React from 'react';
import styled from 'styled-components';
import { AppStyle } from './AppStyle';
import { AppVersion } from './AppVersion';
import { DiceWrapper } from './DiceWrapper';
import { appColor, maxMobileWidth, maxTabletWidth } from './theme';

const Root = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  margin: auto;

  border-radius: 8px;
  background-color: ${appColor};

  width: 900px;

  @media (max-width: ${maxMobileWidth}px) {
    width: 100%;
  }

  @media (max-width: ${maxTabletWidth}px) {
    width: 700px;
  }
`;

function App() {
  return (
    <Root>
      <AppStyle />
      <DiceWrapper />
      <AppVersion />
    </Root>
  );
}

export default App;
