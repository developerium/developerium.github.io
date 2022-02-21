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

  width: 90vw;
  height: 90vh;
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
