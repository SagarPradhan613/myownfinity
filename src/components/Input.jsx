/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";

const StyledInput = styled.input`
  padding: 0.4rem 1rem;
  border: 2px solid ${COLORS.light};
  border-radius: 25px;
  color: ${COLORS.black};
  font-family: "poppins";
  &:focus {
    outline: none;
  }
`;

const Input = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};

export default Input;
