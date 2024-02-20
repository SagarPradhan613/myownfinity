/* eslint-disable react/prop-types */
import styled, { keyframes } from "styled-components";
import Image from "../components/Image";

const bounceAnimation = keyframes`

  0% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-20px);
  }

`;

const StyledContentWrapp = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  display: block;
  z-index: 50;
  animation: ${bounceAnimation} 5s ease-in-out infinite;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const FloatingContent = ({ top, left, right, bottom, image, width }) => {
  return (
    <StyledContentWrapp top={top} left={left} right={right} bottom={bottom}>
      <Image src={image} width={width} />
    </StyledContentWrapp>
  );
};

export default FloatingContent;
