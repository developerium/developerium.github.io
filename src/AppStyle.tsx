import { createGlobalStyle } from 'styled-components';

import { bodyColor } from './theme';

export const AppStyle = createGlobalStyle`
  body {
    background-color: ${bodyColor};
    user-select: none;
  }

  #root {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
