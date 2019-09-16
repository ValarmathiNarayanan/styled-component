import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import HotovoBox2 from './HotovoBox2';
import HotovoBox3 from './HotovoBox3';
import HotovoBox4 from './HotovoBox4';
import HotovoBox5 from './HotovoBox5';

import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  border: 5px outset gold;
  &:hover {
   background-color: yellow;
 }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const HotovoBox = () => (
    <div>
      <Div>
        <Paragraph>Hotovo means done 💅</Paragraph>
      </Div>
      <HotovoBox2 />
      <HotovoBox3 />
      <HotovoBox4 />
      <HotovoBox5 />
    </div>
)

render(<HotovoBox/>, document.getElementById('root'));
