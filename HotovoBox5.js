import React from 'react';
import styled from 'styled-components';

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
)

const StyledLink = styled(Link)`
  color: LightSeaGreen;
  font-weight: bold;
`;



const HotovoBox4 = () => (
  <div>
    <Link>Boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
)

export default HotovoBox4;