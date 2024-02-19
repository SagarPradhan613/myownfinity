/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`;

function IconButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default IconButton;
