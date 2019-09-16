import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Content from './Content';
import InputBox from './InputBox';
import Button from './Button';

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

const App = () => (
    <div>
      <Div>
        <Paragraph>Check Hover Color 💅</Paragraph>
      </Div>
      <Content />
      <InputBox />
      <Button />
    </div>
)

render(<App/>, document.getElementById('root'));
