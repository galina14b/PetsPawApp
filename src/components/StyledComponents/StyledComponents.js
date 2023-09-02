import styled from "styled-components";
import { NavLink } from "react-router-dom";


const StyledLayOutLink = styled(NavLink)`
  
  &.active {
    background: #FF868E;
    color: #FFF;
  }

`;

const StyledLayOutImage = styled(NavLink)`

  &.active {
    border: 4px solid #FBE0DC;
  }
` ;

const StyledTopLinkBlockLinks = styled(NavLink)`

    &.active {
      background-color: #FF868E;
    }

    &.active svg {
      fill: #FFF;
    }
  `

export { StyledLayOutImage, StyledLayOutLink, StyledTopLinkBlockLinks };