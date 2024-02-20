/* eslint-disable react/prop-types */
import styled from "styled-components";
import Image from "../../components/Image";
import { IMAGE_COLLECTIONS } from "../../utils/images";

const ShadowWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top || "0px"};
  right: ${({ right }) => right || "0px"};
  z-index: 1;
  width: ${({ width }) => width || "1000px"};
  @media only screen and (max-width: 1300px) and (min-width: 720px) {
    width: 400px;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const RightShadow = ({ top, right, width }) => {
  return (
    <ShadowWrapper top={top} right={right} width={width}>
      <Image src={IMAGE_COLLECTIONS.rightShadow} width="100%" mobileWidth="100%" />
    </ShadowWrapper>
  );
};

export default RightShadow;
