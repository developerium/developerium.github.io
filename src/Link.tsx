import React, { FC } from 'react';
import styled from 'styled-components';

interface LinkProps {
  title: string;
  url: string;
}

// deep purple
// https://htmlcolorcodes.com/color-chart/material-design-color-chart/
const linkColor = '#311B92';
const linkHoverColor = '#6200EA';

const StyledA = styled.a`
  padding-right: 16px;

  color: ${linkColor};
  &:active,
  &:visited,
  &:link {
    color: ${linkColor};
  }
  &:hover {
    color: ${linkHoverColor};
  }
`;

// a:link - a normal, unvisited link
// a:visited - a link the user has visited
// a:hover - a link when the user mouses over it
// a:active - a link the moment it is clicked

export const Link: FC<LinkProps> = ({ title, url }) => (
  <StyledA href={url} target="_blank" rel="noreferrer">
    {title}
  </StyledA>
);
