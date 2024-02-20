import styled from "styled-components";
import Flex from "../components/Flex";
import useIsMobile from "../hooks/IsMobile";
import { COLORS } from "../utils/colors";
import { Container } from "react-awesome-styled-grid";
import { Row } from "react-awesome-styled-grid";
import { Col } from "react-awesome-styled-grid";
import Image from "../components/Image";
import { IMAGE_COLLECTIONS } from "../utils/images";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Button from "../components/Button";
import FloatingContent from "../view/FloatingContent";
import RightShadow from "../view/shadows/RightShadow";
import Section from "../components/Section";
import { useState } from "react";

const ContentBox = styled.div`
  border-radius: 55px;
  background: ${COLORS.faded};
  max-width: 1360px;
  padding: 2rem;
  position: relative;
  z-index: 10;
  @media screen and (max-width: 720px) {
    width: auto;
  }
  @media screen and (max-width: 1290px) {
    max-width: 1200px;
  }
`;

const SwapWrapp = styled.div`
  position: relative;
  cursor: pointer;
  width: 600px;
  height: 400px;
  @media screen and (max-width: 720px) {
    width: 350px;
    height: 300px;
  }
  @media only screen and (max-width: 1300px) and (min-width: 720px) {
    width: 400px;
    height: 200px;
  }
`;

function OwnerShipSection() {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  const handleOnHover = () => {
    setHovered(true);
  };
  const handleOffHover = () => {
    setHovered(false);
  };
  return (
    <Section>
      <RightShadow top={isMobile ? "0rem" : "0rem"} />
      <ContentBox>
        <FloatingContent
          image={IMAGE_COLLECTIONS.LContainer1}
          top="-1rem"
          left="-1rem"
          width="140px"
        />
        <FloatingContent
          image={IMAGE_COLLECTIONS.BoxContainer1}
          top="-1rem"
          right="19rem"
          width="60px"
        />
        <FloatingContent
          image={IMAGE_COLLECTIONS.BoxContainer2}
          bottom="-2rem"
          left="30rem"
          width="90px"
        />
        <FloatingContent
          image={IMAGE_COLLECTIONS.LContainer2}
          bottom="8rem"
          right="0rem"
          width="90px"
        />
        <Container style={{ maxWidth: "100%", padding: "0px" }}>
          <Row>
            <Col xs={12} sm={4} md={4} lg={6}>
              <SwapWrapp
                onMouseEnter={handleOnHover}
                onMouseLeave={handleOffHover}
              >
                <Image
                  src={IMAGE_COLLECTIONS.ownerShipMain}
                  width="100%"
                  mobileWidth="100%"
                  position="absolute"
                  opacity={hovered ? "0" : "1"}
                />
                <Image
                  src={IMAGE_COLLECTIONS.OwnershipMainGif}
                  width="100%"
                  mobileWidth="100%"
                  position="absolute"
                  opacity={hovered ? "1" : "0"}
                />
              </SwapWrapp>
            </Col>
            <Col xs={12} sm={4} md={4} lg={6}>
              <Flex direction="column">
                <Heading size="50px" align={isMobile ? "center" : "start"}>
                  Real World Assets Shared Ownership
                </Heading>
                <Text align={isMobile ? "center" : "start"}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </Text>
              </Flex>
              <Flex justify={isMobile ? "center" : "start"} mt="1rem">
                <Button>Get Started</Button>
                <Button bg={COLORS.white} color={COLORS.black}>
                  Learn More
                </Button>
              </Flex>
            </Col>
          </Row>
        </Container>
      </ContentBox>
    </Section>
  );
}

export default OwnerShipSection;
