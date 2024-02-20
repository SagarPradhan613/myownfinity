import Flex from "../components/Flex";
import styled from "styled-components";
import { COLORS } from "../utils/colors";
import LeftShadow from "../view/shadows/LeftShadow";
import RightShadow from "../view/shadows/RightShadow";
import Text from "../components/Text";
import Heading from "../components/Heading";
import useIsMobile from "../hooks/IsMobile";
import SignUp from "../view/SignUp";
import Button from "../components/Button";
import { Container, Row, Col } from "react-awesome-styled-grid";
import FloatingContent from "../view/FloatingContent";
import { IMAGE_COLLECTIONS } from "../utils/images";
import useIsTab from "../hooks/IsTab";
import Section from "../components/Section";

const ContentBox = styled.div`
  border-radius: 25px;
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

const JoinWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 15px;
  padding: 10px;
  background: linear-gradient(to right, white, transparent);
`;

const Hero = () => {
  const isMobile = useIsMobile();
  const isTab = useIsTab();
  return (
    <Section mt="5rem">
      <LeftShadow top={isMobile ? "0rem" : "-55rem"}  />
      <RightShadow top={isMobile ? "0rem" : "0rem"} />
      <ContentBox>
        <FloatingContent
          image={IMAGE_COLLECTIONS.BoxContainer1}
          top="15rem"
          left="50rem"
          width="60px"
        />
        <FloatingContent
          image={IMAGE_COLLECTIONS.BoxContainer2}
          top="-2rem"
          left="45rem"
          width="90px"
        />
        <FloatingContent
          image={IMAGE_COLLECTIONS.LContainer1}
          top="25rem"
          left="40rem"
          width="140px"
        />
        {!isTab && (
          <FloatingContent
            image={IMAGE_COLLECTIONS.LContainerHalf}
            top="8rem"
            right="-2rem"
            width="60px"
          />
        )}
        <Container style={{ maxWidth: "100%", padding: "0px" }}>
          <Row>
            <Col xs={12} sm={12} md={4} lg={7.5}>
              <Flex
                direction="column"
                items={isMobile ? "center" : "start"}
                mb="3rem"
              >
                <JoinWrap>
                  <Text size="20px" hover>
                    Ownfinity
                  </Text>
                  <Text hover>|</Text>
                  <Text hover>Join us now!</Text>
                </JoinWrap>
                <Heading maxWidth="800px" align={isMobile ? "center" : "start"}>
                  Dealing in Real World Assets
                </Heading>
                <Text maxWidth="700px" align={isMobile ? "center" : "start"}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </Text>
                <Flex>
                  <Button>Get Started</Button>
                  <Button bg={COLORS.white} color={COLORS.black}>
                    Learn More
                  </Button>
                </Flex>
              </Flex>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4.5}>
              <SignUp />
            </Col>
          </Row>
        </Container>
      </ContentBox>
    </Section>
  );
};

export default Hero;
