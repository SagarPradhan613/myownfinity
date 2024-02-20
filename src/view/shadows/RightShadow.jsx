/* eslint-disable react/prop-types */
import styled from "styled-components";
import Image from "../../components/Image";
import { IMAGE_COLLECTIONS } from "../../utils/images";

const ShadowWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top || "0px"};
  right: ${({ right }) => right || "0px"};
  z-index: 1;
`;

const LeftShadow = ({ top, right ,width="1000px"}) => {
  return (
    <ShadowWrapper top={top} right={right}>
      <Image
        src={IMAGE_COLLECTIONS.rightShadow}
        width={width}
        mobileWidth="300px"
      />
    </ShadowWrapper>
  );
};

export default LeftShadow;
