import { Container } from "react-awesome-styled-grid";
import Section from "../components/Section";
import { Row } from "react-awesome-styled-grid";
import { Col } from "react-awesome-styled-grid";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Text from "../components/Text";
import { COLORS } from "../utils/colors";
import styled from "styled-components";
import FloatingContent from "../view/FloatingContent";
import { IMAGE_COLLECTIONS } from "../utils/images";
import NewsLetter from "../view/NewsLetter";
import LeftShadow from "../view/shadows/LeftShadow";
import RightShadow from "../view/shadows/RightShadow";
import useIsMobile from "../hooks/IsMobile";

const ContentBox = styled.div`
  border-radius: 35px;
  background: ${COLORS.faded};
  max-width: 1360px;
  padding: 3rem;
  position: relative;
  z-index: 10;
  margin: 10px;
  @media screen and (max-width: 720px) {
    width: auto;
    padding: 1rem;
    margin: 10px;
  }
  @media screen and (max-width: 1290px) {
    max-width: 1200px;
  }
`;

function NewsLetterSection() {
  const isMobile = useIsMobile();
  return (
    <Section>
      <LeftShadow top={isMobile ? "0rem" : "-25rem"} width="600px" />
      <RightShadow top={isMobile ? "0rem" : "-10rem"} width="600px" />
      <ContentBox>
        <FloatingContent
          image={IMAGE_COLLECTIONS.LContainer1}
          top="-2rem"
          left="-1rem"
          width="120px"
          mobTop="-5rem"
          mobLeft="0rem"
        />

        <FloatingContent
          image={IMAGE_COLLECTIONS.BoxContainer2}
          bottom="-2rem"
          left="40rem"
          width="110px"
          mobTop="5rem"
          mobLeft="15rem"
        />
        <FloatingContent
          image={IMAGE_COLLECTIONS.LContainer2}
          bottom="4rem"
          right="0rem"
          width="80px"
          mobTop="20rem"
          mobLeft="0rem"
        />
        <Container style={{ maxWidth: "100%", padding: "0px" }}>
          <Row>
            <Col xs={12} sm={4} md={4.5} lg={6}>
              <Flex direction="column" items={isMobile ? "center" : "start"}>
                <Heading size="50px">Subscribe To Our Newsletter</Heading>
                <Text align={isMobile ? "center" : "start"}>
                  Our newsletter is your key to staying informed about the
                  latest developments, upcoming features, and exciting
                  opportunities within the Ownfinity ecosystem. Join our
                  community of forward-thinkers, enthusiasts, and innovators who
                  are shaping the narrative of decentralized ownership.
                </Text>
              </Flex>
            </Col>
            <Col xs={12} sm={4} md={3.5} lg={6}>
              <Flex width="100%" items="center" justify="end">
                <NewsLetter />
              </Flex>
            </Col>
          </Row>
        </Container>
      </ContentBox>
    </Section>
  );
}

export default NewsLetterSection;
