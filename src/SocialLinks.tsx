import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from './Link';

const Root = styled.div``;

export const SocialLinks: FC = () => (
  <Root>
    <Link title="LinkedIn" url="https://www.linkedin.com/in/developerium/" />
    <Link title="Github" url="https://github.com/developerium/" />
  </Root>
);
