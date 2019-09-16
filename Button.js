import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'DeepSkyBlue  ' : 'white'};
  color: ${props => props.primary ? 'white' : 'DeepSkyBlue  '};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid DeepSkyBlue  ;
  border-radius: 3px;
`;


const HotovoBox4 = () => (
  <div>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </div>
)

export default HotovoBox4;