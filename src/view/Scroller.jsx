import styled, { keyframes } from "styled-components";
import { COLORS } from "../utils/colors";
import Flex from "../components/Flex";
import Image from "../components/Image";
import { IMAGE_COLLECTIONS } from "../utils/images";
import useIsMobile from "../hooks/IsMobile";

const SlideAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ScrollerWrapper = styled.div`
  width: 100%;
  background: ${COLORS.faded};
  padding: 3rem 0rem;
  margin-top: 2rem;
  position: relative;
  z-index: 100;
`;

const PartnerWrap = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

const ScrollContent = styled.div`
  display: inline-block;
  animation: ${SlideAnimation} 20s linear infinite;
  
`;

const Scroller = () => {
  const isMobile = useIsMobile();
  return (
    <ScrollerWrapper>
      <Flex>
        <PartnerWrap>
          <ScrollContent>
            <Flex gap={isMobile ? "2rem" : "6rem"}>
              <Image
                src={IMAGE_COLLECTIONS.partner1}
                width="150px"
                mobileWidth="250px"
              />
              <Image
                src={IMAGE_COLLECTIONS.partner2}
                width="150px"
                mobileWidth="250px"
              />
              <Image
                src={IMAGE_COLLECTIONS.partner3}
                width="60px"
                mobileWidth="100px"
              />
              <Image
                src={IMAGE_COLLECTIONS.partner4}
                width="60px"
                mobileWidth="60px"
              />
              <Image
                src={IMAGE_COLLECTIONS.partner5}
                width="50px"
                mobileWidth="60px"
              />
            </Flex>
          </ScrollContent>
        </PartnerWrap>
      </Flex>
    </ScrollerWrapper>
  );
};

export default Scroller;
