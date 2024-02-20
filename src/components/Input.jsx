/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";

const StyledInput = styled.input`
  padding: 0.6rem 1rem;
  border: 2px solid ${COLORS.light};
  border-radius: 25px;
  color: ${COLORS.black};
  font-family: "poppins";
  width: ${({ width }) => width || "auto"};
  &:focus {
    outline: none;
  }
`;

const Input = ({ placeholder, width, type = "text" }) => {
  return <StyledInput placeholder={placeholder} width={width} type={type} />;
};

export default Input;
