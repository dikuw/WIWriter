import React from 'react';
import styled from 'styled-components';

//  TODO
// import logo from '../../logo.svg';

const LogoImage = styled.img`
  display: block;
  width: 500px;
  margin: auto;
  padding: 15px;
`;

export default function Logo() {
  return (
    <a href="/">
      <LogoImage src={null} alt="WI Writer dot com" />
    </a>
  );
};