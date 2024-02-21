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
    top: ${({ mobTop }) => mobTop};
    left: ${({ mobLeft }) => mobLeft};
    right: ${({ mobRight }) => mobRight};
    bottom: ${({ mobBottom }) => mobBottom};
    width: 40px;
  }
`;

const FloatingContent = ({
  top,
  left,
  right,
  bottom,
  image,
  width,
  mobTop,
  mobLeft,
  mobRight,
  mobBottom
}) => {
  return (
    <StyledContentWrapp
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      mobBottom={mobBottom}
      mobTop={mobTop}
      mobLeft={mobLeft}
      mobRight={mobRight}
    >
      <Image src={image} width={width} />
    </StyledContentWrapp>
  );
};

export default FloatingContent;
