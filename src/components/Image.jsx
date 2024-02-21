/* eslint-disable react/prop-types */
import styled from "styled-components";

const StylesImage = styled.div`
  width: ${({ width }) => width || "100px"};
  position: ${({ position }) => position};
  opacity: ${({ opacity }) => opacity || 1};
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 720px) {
    width: ${({ mobileWidth }) => mobileWidth || "100px"};
  }
  &:hover {
    ${({ hover }) =>
      hover &&
      `transform: scale(1.1);
      cursor: pointer;
    `}
  }
`;

function Image({ width, mobileWidth, src, position, opacity, hover }) {
  return (
    <StylesImage
      width={width}
      mobileWidth={mobileWidth}
      position={position}
      opacity={opacity}
      hover={hover}
    >
      <img src={src} width="100%" alt="image" />
    </StylesImage>
  );
}

export default Image;
