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

  @media screen and (max-width: 720px) {
    animation: ${SlideAnimation} 20s linear infinite;
  }
`;

const Scroller = () => {
  const isMobile = useIsMobile();
  return (
    <ScrollerWrapper>
      <Flex>
        <PartnerWrap>
          <ScrollContent>
            <Flex
              gap={isMobile ? "2rem" : "6rem"}
              width={isMobile ? "" : "500px"}
            >
              <Image
                src={IMAGE_COLLECTIONS.etherium}
                width="150px"
                mobileWidth="250px"
                hover
              />
              <Image
                src={IMAGE_COLLECTIONS.chainlink}
                width="150px"
                mobileWidth="250px"
                hover
              />
            </Flex>
          </ScrollContent>
        </PartnerWrap>
      </Flex>
    </ScrollerWrapper>
  );
};

export default Scroller;
