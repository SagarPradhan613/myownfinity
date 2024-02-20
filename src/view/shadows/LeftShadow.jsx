/* eslint-disable react/prop-types */
import styled from "styled-components";
import Image from "../../components/Image";
import { IMAGE_COLLECTIONS } from "../../utils/images";

const ShadowWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top || "0px"};
  left: ${({ left }) => left || "0px"};
  z-index: 1;
  width: ${({ width }) => width || "1000px"};
  @media screen and (max-width: 720px) {
    width: 350px;
  }
  @media only screen and (max-width: 1300px) and (min-width: 720px) {
    width: 400px;
  }
`;

const LeftShadow = ({ top, left, width }) => {
  return (
    <ShadowWrapper top={top} left={left} width={width}>
      <Image src={IMAGE_COLLECTIONS.leftShadow} width="100%" />
    </ShadowWrapper>
  );
};

export default LeftShadow;
