/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";

const StyledText = styled.h1`
  font-family: "poppins";
  font-size: ${({ size }) => size || "65px"};
  font-weight: ${({ weight }) => weight || 600};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  text-align: ${({ align }) => align || "start"};
  background: -webkit-linear-gradient(${COLORS.gradientText});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 1300px) and (min-width: 720px) {
    font-size: 50px;
  }
  @media screen and (max-width: 720px) {
    font-size: 30px;
  }
`;

function Heading({ children, size, weight, maxWidth, align }) {
  return (
    <StyledText size={size} weight={weight} maxWidth={maxWidth} align={align}>
      {children}
    </StyledText>
  );
}

export default Heading;
