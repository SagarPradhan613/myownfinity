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
  margin: 0rem 20px;
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
  position:relative;
  z-index: 50;
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
      <LeftShadow top={isMobile ? "0rem" : "-55rem"} />
      <RightShadow top={isMobile ? "-20rem" : "-45rem"} /> 
      <RightShadow top={isMobile ? "0rem" : "5rem"} /> 
      <ContentBox>
        <FloatingContent 
          image={IMAGE_COLLECTIONS.BoxContainer1}
          top="15rem"
          left="50rem"
          mobLeft="15rem"
          mobTop="19rem"
          width="60px"
        />
        <FloatingContent
          image={IMAGE_COLLECTIONS.BoxContainer2}
          top="-2rem"
          left="45rem"
          mobLeft="5rem"
          mobTop="1rem"
          width="90px"
        />
        <FloatingContent
          image={IMAGE_COLLECTIONS.LContainer1}
          top="25rem"
          left="40rem"
          width="140px"
          mobLeft="0rem"
          mobBottom="-10rem"
        />
        {!isTab && (
          <FloatingContent
            image={IMAGE_COLLECTIONS.LContainerHalf}
            top="8rem"
            right="-1.5rem"
            width="60px"
          />
        )}
        <Container style={{ maxWidth: "100%", padding: "0px" }}>
          <Row>
            <Col xs={12} sm={12} md={5} lg={7.5}>
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
                  Ownfinity is redefining how individuals engage with real-world
                  assets through seamless buying and selling, shared ownership
                  models, lending, borrowing, winning opportunities, and dynamic
                  asset auctions. Leveraging blockchain's security and
                  transparency, Ownfinity empowers a decentralized community to
                  actively participate in shaping the future of asset ownership.
                </Text>
                <Flex>
                  <Button>DAPP</Button>
                  <Button bg={COLORS.white} color={COLORS.black}>
                    Docs
                  </Button>
                </Flex>
              </Flex>
            </Col>
            <Col xs={12} sm={12} md={3} lg={4.5}>
              <SignUp />
            </Col>
          </Row>
        </Container>
      </ContentBox>
    </Section>
  );
};

export default Hero;
