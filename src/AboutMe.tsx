import React from 'react';
import styled from 'styled-components';
import { textColor } from './theme';

const Root = styled.div``;

const Paragraph = styled.p`
  font-size: 24px;
  color: ${textColor};
  line-height: 40px;
`;

export const AboutMe = () => (
  <Root>
    <Paragraph>Fancy meeting you here 👋</Paragraph>
    <Paragraph>
      I&apos;m a happy/quite/dad engineer living in beautiful Munich, Germany
    </Paragraph>
    <Paragraph>My hobbies include ⌨️ 💻 🤖 🚀 🎮 ⚽️ 🏃‍♂️ 🚴‍♂️ 📚 🎹 😄</Paragraph>
    <Paragraph>
      I like to build software that people can use to collaborate, enjoy and
      grow
    </Paragraph>
  </Root>
);
