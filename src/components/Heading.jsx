/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";

const StyledText = styled.h1`
  font-family: "poppins";
  font-size: ${({ size }) => size || "40px"};
  font-weight: ${({ weight }) => weight || 800};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  background: -webkit-linear-gradient(${COLORS.gradientText});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Heading({ children, size, weight, maxWidth}) {
  return (
    <StyledText size={size} weight={weight} maxWidth={maxWidth} >
      {children}
    </StyledText>
  );
}

export default Heading;
