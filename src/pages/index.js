import React from 'react';
import styled from 'styled-components';
import { HEADER_FONT_FAMILY, BIG_SCREEN_MEDIA } from '../config/styles';
import AboutLinks from '../components/AboutLinks';

const About = styled.section`
  position: relative;
  z-index: 10;
  margin: 50px 20px;
  font-family: ${HEADER_FONT_FAMILY};
  color: black;
  text-align: center;
  -webkit-font-smoothing: antialiased;

  @media (${BIG_SCREEN_MEDIA}) {
  	 width: 100%;
    height: 100vh;
    margin: 0;
    text-align: left;
    display: flex;
    align-items: center;
  }
}`;

const AboutSection = styled.section`
  @media (${BIG_SCREEN_MEDIA}) {
    box-sizing: border-box;
    flex: 1 2 auto;
    height: 100px;
    padding: 20px;
  }
`;

const Name = styled.h1`
  margin: 0 0 20px;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  vertical-align: baseline;

  @media (${BIG_SCREEN_MEDIA}) {
    text-align: right;
  }
`;

const Occupation = styled.small`
  display: block;
  font-size: 14px;
  line-height: 16px;
`;

const IndexPage = () => (
  <About>
    <AboutSection>
      <Name>
        Alexander Madyankin
        <Occupation>software developer</Occupation>
      </Name>
    </AboutSection>

    <AboutSection>
      <AboutLinks
        links={[
          ['mailto:alexander@madyankin.name', 'E-mail'],
          ['https://github.com/outpunk', 'Github'],
          ['http://500px.com/madyankin', '500px'],
          ['https://instagram.com/madyankin/', 'Instagram'],
        ]}
      />
    </AboutSection>
  </About>
);

export default IndexPage;
