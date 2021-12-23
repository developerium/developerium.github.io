import React, { FC } from 'react';
import styled from 'styled-components';

import myImage from './assets/me-01.jpg';
import { textColor } from './theme';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 52px;
  color: ${textColor};
`;

const Subtitle = styled.div`
  padding-top: 8px;
  font-size: 28px;
  color: ${textColor};
`;

const Image = styled.img`
  width: 300px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid ${textColor};
`;

export const Header: FC = () => (
  <Root>
    <TitleWrapper>
      <Title>Vahid Kheradmand</Title>
      <Subtitle>Software Engineer in Munich</Subtitle>
    </TitleWrapper>

    <Image src={myImage} />
  </Root>
);
