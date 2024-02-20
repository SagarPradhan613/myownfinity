/* eslint-disable react/prop-types */
import styled from "styled-components";
import Image from "../../components/Image";
import { IMAGE_COLLECTIONS } from "../../utils/images";

const ShadowWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top || "0px"};
  left: ${({ left }) => left || "0px"};
  z-index: 1;
`;

const LeftShadow = ({ top, left, width = "1000px" }) => {
  return (
    <ShadowWrapper top={top} left={left}>
      <Image
        src={IMAGE_COLLECTIONS.leftShadow}
        width={width}
        mobileWidth="300px"
      />
    </ShadowWrapper>
  );
};

export default LeftShadow;
