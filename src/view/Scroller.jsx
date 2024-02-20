import styled from "styled-components";
import { COLORS } from "../utils/colors";
import Flex from "../components/Flex";
import Image from "../components/Image";
import { IMAGE_COLLECTIONS } from "../utils/images";
import useIsMobile from "../hooks/IsMobile";

const ScrollerWrapper = styled.div`
  width: 100%;
  background: ${COLORS.faded};
  padding: 3rem 0rem;
  margin-top: 2rem;
  position: relative;
  z-index: 100;
`;

const PartnerWrapp = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: auto;
`;

const Scroller = () => {
  const isMobile = useIsMobile();
  return (
    <ScrollerWrapper>
      <PartnerWrapp>
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
          <Image src={IMAGE_COLLECTIONS.partner3} width="60px" mobileWidth="" />
          <Image src={IMAGE_COLLECTIONS.partner4} width="60px" mobileWidth="" />
          <Image src={IMAGE_COLLECTIONS.partner5} width="50px" mobileWidth="" />
        </Flex>
      </PartnerWrapp>
    </ScrollerWrapper>
  );
};

export default Scroller;
