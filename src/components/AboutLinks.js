import React from 'react';
import styled from 'styled-components';
import { HEADER_FONT_FAMILY, BIG_SCREEN_MEDIA } from '../config/styles';

const LinksList = styled.ul`
  margin: 0;
  padding: 0 0;
  font-size: 14px;
  line-height: 32px;
  vertical-align: baseline;
  font-weight: lighter;
  list-style: none;
`;

const LinkListItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const Link = styled.a`
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  z-index: 10;

  &,
  &:visited {
    display: inline-block;
    text-decoration: none;
    line-height: 24px;
    color: black;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: 9;
    left: 50%;
    right: 50%;
    bottom: 0;
    background: black;
    height: 2px;
    transition-property: left, right;
    transition-duration: 200ms;
    transition-timing-function: easeInOutQuart;
  }

  &:hover:before {
    left: 0;
    right: 0;
  }
`;

const Item = ({ href, children }) => (
  <LinkListItem>
    <Link href={href}>{children}</Link>
  </LinkListItem>
);

const AboutLinks = ({ links }) => (
  <LinksList>
    {links.map(([href, title]) => (
      <Item key={title} href={href}>
        {title}
      </Item>
    ))}
  </LinksList>
);

export default AboutLinks;
