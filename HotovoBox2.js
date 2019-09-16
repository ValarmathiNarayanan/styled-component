import React from 'react';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: Aquamarine;
  border-radius: 5px;
`;

// Use Title and Wrapper like any other React component – except they're styled!

class HotovoBox2 extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          styled h1
        </Title>
      </Wrapper>
    );
  }
}


export default HotovoBox2;