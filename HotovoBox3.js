import React from 'react';
import styled from 'styled-components';

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: #ccc;
  border: none;
  border-radius: 3px;
`;


const HotovoBox3 = () => (
  <div>
    <Input placeholder="name" type="text" />
    <Input value="email" type="text" />
  </div>
)

export default HotovoBox3;