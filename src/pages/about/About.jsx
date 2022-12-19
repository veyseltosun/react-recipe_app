import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

function About(){
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Veysel Tosun</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h1>I'm Veysel.</h1>
        <h2>I'm currently learning Full-Stack Development Languages.</h2>
        <h2>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB, SQL,
          Python, Django.
        </h2>
        <h2>
          <a href="mailto:postalarim1923@gmail.com">Send email</a> :
          postalarim1923@gmail
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;