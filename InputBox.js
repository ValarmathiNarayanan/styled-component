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


const ImputBox = () => (
  <div>
    <Input placeholder="Name" type="text" />
    <Input placeholder="Email" type="text" />
  </div>
)

export default ImputBox;