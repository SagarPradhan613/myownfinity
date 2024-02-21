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
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border: 1px solid white;
  border-radius: 30px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-family: "poppins";
  transition: all 0.4s ease-in-out; // Removed extra dot before ".5s"
  &:hover {
    border: 1px solid #24FFA3;
    background: ${COLORS.white};
    color: ${COLORS.black};
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
