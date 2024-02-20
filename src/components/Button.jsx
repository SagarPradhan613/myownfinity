/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  background: ${({ bg }) => bg || COLORS.gradient};
  color: ${({ color }) => color || COLORS.white};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "")};
  border: none;
  border-radius: 30px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-family: "poppins";
  transition: all .5s ease-in-out;
  &:hover {
    background: ${COLORS.gradientReverse};
    transform: translateY(-5px);
    color: ${COLORS.white}
  }
`;

function Button({ children, bg, color, fullWidth }) {
  return (
    <StyledButton bg={bg} color={color} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
}

export default Button;
