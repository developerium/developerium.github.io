import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { SocialLinks } from './SocialLinks';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 900px;
  padding: 16px;
  margin: auto;

  border-radius: 8px;
  background-color: #ede7f6;
`;

function App() {
  return (
    <Root>
      <Header />
      <SocialLinks />
    </Root>
  );
}

export default App;
