/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";

const StyledText = styled.p`
  font-family: "poppins";
  font-size: ${({ size }) => size || "15px"};
  font-weight: ${({ weight }) => weight || 400};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  color: ${({ color }) => color || COLORS.black};
  text-align: ${({ align }) => align || "start"};
  @media screen and (max-width: 720px) {
    font-size: 13px;
  }
`;

function Text({ children, size, weight, maxWidth, color, align }) {
  return (
    <StyledText
      size={size}
      weight={weight}
      maxWidth={maxWidth}
      color={color}
      align={align}
    >
      {children}
    </StyledText>
  );
}

export default Text;
