import styled from "styled-components";
import { COLORS } from "../utils/colors";
import { Container } from "react-awesome-styled-grid";
import { Row } from "react-awesome-styled-grid";
import { Col } from "react-awesome-styled-grid";
import Flex from "../components/Flex";
import Image from "../components/Image";
import { IMAGE_COLLECTIONS } from "../utils/images";
import Text from "../components/Text";
import { Links } from "../utils/footer";
import useIsMobile from "../hooks/IsMobile";

const FooterContainer = styled.div`
  background: ${COLORS.white};
  padding: 4rem 1rem;
  position: relative;
  z-index: 100;
  height: 100%;
`;

const FooterWrapp = styled.div`
  max-width: 1360px;
`;

const LinkTag = styled.a`
  text-decoration: none;
`;

const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${COLORS.darkFaded};
`;

function Footer() {
  const isMobile = useIsMobile();
  return (
    <FooterContainer>
      <Flex>
        <FooterWrapp>
          <Container style={{ maxWidth: "100%", padding: "0px" }}>
            <Row>
              <Col xs={12} sm={6} md={6} lg={6}>
                <Flex
                  items={isMobile ? "center" : "start"}
                  justify="start"
                  direction="column"
                  mt="1rem"
                >
                  <Image
                    src={IMAGE_COLLECTIONS.TextIcon}
                    width="200px"
                    mobileWidth="200px"
                  />
                  <Text align={isMobile ? "center" : "start"}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content.
                  </Text>
                </Flex>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
                <Flex justify="space-evenly" items="start" mt="1rem">
                  {Links.map((items, i) => (
                    <Flex
                      direction="column"
                      items="start"
                      justify="start"
                      gap="10px"
                      key={i}
                    >
                      <Text size="20px" weight={600}>
                        {items.title}
                      </Text>
                      {items.footers.map((content, i) => (
                        <LinkTag key={i} href={content.link}>
                          <Text>{content.name}</Text>
                        </LinkTag>
                      ))}
                    </Flex>
                  ))}
                </Flex>
              </Col>
            </Row>
          </Container>
          <Flex mt="3rem" direction="column">
            <Line></Line>
            <Text size="13px">@ownfinity, 2024 all rights recived</Text>
          </Flex>
        </FooterWrapp>
      </Flex>
    </FooterContainer>
  );
}

export default Footer;
