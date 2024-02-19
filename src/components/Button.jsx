/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  background: ${({ bg }) => bg || COLORS.gradient};
  color: ${({ color }) => color || "white"};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "")};
  border: none;
  border-radius: 30px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-family: "poppins";
`;

function Button({ children, bg, color, fullWidth }) {
  return (
    <StyledButton bg={bg} color={color} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
}

export default Button;
