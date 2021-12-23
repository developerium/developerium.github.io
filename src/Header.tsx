import React, { FC } from 'react';
import styled from 'styled-components';

import myImage from './assets/me-01.jpg';
import { bodyColor, maxWidth, textColor } from './theme';

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${maxWidth}px) {
    flex-direction: column-reverse;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  color: ${textColor};
  font-size: 52px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  color: ${textColor};
  padding-top: 8px;
  font-size: 28px;
`;

const Image = styled.img`
  width: 300px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid ${bodyColor};
  margin: auto;

  @media (max-width: ${maxWidth}px) {
    width: 250px;
  }
`;

export const Header: FC = () => (
  <Root>
    <ColumnWrapper>
      <Title>Vahid Kheradmand</Title>
      <Subtitle>Software Engineer in Munich</Subtitle>
    </ColumnWrapper>

    <ColumnWrapper>
      <Image src={myImage} />
    </ColumnWrapper>
  </Root>
);
