import React from 'react';
import styled from 'styled-components';
import packageInfo from '../package.json';
import { textColor } from './theme';

const { version } = packageInfo;

const Root = styled.div`
  text-align: center;
  margin-top: 24px;
  color: ${textColor};
`;

export const AppVersion = () => <Root>v-{version}</Root>;
