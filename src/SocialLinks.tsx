import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from './Link';

const Root = styled.div``;

export const SocialLinks: FC = () => (
  <Root>
    <Link title="linkedin" url="https://www.linkedin.com/in/developerium/" />
    <Link title="github" url="https://github.com/developerium/" />
    <Link title="email" url="mailto:kheradmand.v1@gmail.com" />
  </Root>
);
