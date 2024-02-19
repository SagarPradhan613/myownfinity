/* eslint-disable react/prop-types */
import styled from "styled-components";

const StylesImage = styled.div`
  width: ${({ width }) => width || "100px"};
  @media screen and (max-width: 720px) {
    width: ${({ mobileWidth }) => mobileWidth || "100px"};
  }
`;

function Image({ width, mobileWidth, src }) {
  return (
    <StylesImage width={width} mobileWidth={mobileWidth}>
      <img src={src} width="100%" alt="image" />
    </StylesImage>
  );
}

export default Image;
