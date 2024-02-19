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

const ContentBox = styled.div`
  border-radius: 25px;
  background: ${COLORS.faded};
  width: 100%;
  max-width: 1360px;
  padding: 1rem;
  margin: 1rem;
  @media screen and (max-width: 720px) {
    width: auto;
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
  return (
    <Flex direction="column" m="3rem 0rem">
      <LeftShadow top={isMobile ? "0rem" : "-55rem"} />
      <RightShadow top={isMobile ? "0rem" : "0rem"} />
      <ContentBox>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={8}>
              <Flex
                direction="column"
                items={isMobile ? "center" : "start"}
              
              >
                <JoinWrap>
                  <Text size="20px">Ownfinity</Text>
                  <Text>|</Text>
                  <Text>Join us now!</Text>
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
            <Col xs={12} md={6} lg={4}>
              <SignUp />
            </Col>
          </Row>
        </Container>
      </ContentBox>
    </Flex>
  );
};

export default Hero;
