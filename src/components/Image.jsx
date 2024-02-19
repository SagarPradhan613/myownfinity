/* eslint-disable react/prop-types */
import styled from "styled-components";

const StylesImage = styled.div`
  width: ${({ width }) => width || "100px"};
`;

function Image({ width, src }) {
  return (
    <StylesImage width={width}>
      <img src={src} width="100%" alt="image" />
    </StylesImage>
  );
}

export default Image;
