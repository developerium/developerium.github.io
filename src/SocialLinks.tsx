import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from './Link';
import { maxWidth } from './theme';

const Root = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${maxWidth}px) {
    justify-content: center;
  }
`;

export const SocialLinks: FC = () => (
  <Root>
    <Link title="linkedin" url="https://www.linkedin.com/in/developerium/" />
    <Link title="github" url="https://github.com/developerium/" />
    <Link title="email" url="mailto:kheradmand.v1@gmail.com" />
  </Root>
);
