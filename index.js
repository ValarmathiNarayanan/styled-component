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
 &:active {
   background-color: blue;
 }
 &:onClick {
   background-color: orange;
 }
`;

const Span = styled.p`
  font-size: 15px;
  text-align: center;
`;

const App = () => (
    <div>
      <Div>
        <Span>Check Hover Color 💅💅💅💅💅</Span>
      </Div>
      <Button />
      <Content />
      <InputBox />
     
    </div>
)

render(<App/>, document.getElementById('root'));
