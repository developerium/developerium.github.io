import React from 'react';
import styled from 'styled-components';
import { AppStyle } from './AppStyle';
import { Header } from './Header';
import { SocialLinks } from './SocialLinks';
import { appColor } from './theme';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 900px;
  padding: 16px;
  margin: auto;

  border-radius: 8px;
  background-color: ${appColor};
`;

function App() {
  return (
    <Root>
      <AppStyle />
      <Header />
      <SocialLinks />
    </Root>
  );
}

export default App;
