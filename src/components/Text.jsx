/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";

const StyledText = styled.p`
  font-family: "poppins";
  font-size: ${({ size }) => size || "18px"};
  font-weight: ${({ weight }) => weight || 400};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  color: ${({ color }) => color || COLORS.black};
  text-align: ${({ align }) => align || "start"};
  white-space: ${({ overflow }) => (overflow ? "nowrap" : "normal")};
  @media only screen and (max-width: 1300px) and (min-width: 720px) {
    font-size: ${({ size }) => size || "15px"};
  }
  @media screen and (max-width: 720px) {
    font-size: 13px;
  }
  &:hover {
    ${({ hover }) =>
      hover &&
      `
      background: -webkit-linear-gradient(${COLORS.gradientText});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
  }
`;

function Text({
  children,
  size,
  weight,
  maxWidth,
  color,
  align,
  hover = false,
  overflow = false,
}) {
  return (
    <StyledText
      size={size}
      weight={weight}
      maxWidth={maxWidth}
      color={color}
      align={align}
      hover={hover}
      overflow={overflow}
    >
      {children}
    </StyledText>
  );
}

export default Text;
