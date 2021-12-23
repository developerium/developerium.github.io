import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Root = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  padding-top: 32px;
  width: 800px;
  margin: auto;
`;

function App() {
  return (
    <Root>
      <Header />
    </Root>
  );
}

export default App;
