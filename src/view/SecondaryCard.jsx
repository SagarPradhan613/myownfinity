/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../utils/colors";
import Flex from "../components/Flex";
import Image from "../components/Image";
import { Container } from "react-awesome-styled-grid";
import { Row } from "react-awesome-styled-grid";
import { Col } from "react-awesome-styled-grid";
import Text from "../components/Text";
import { useState } from "react";

const CardWrapper = styled.div`
  border-radius: 25px;
  background: ${COLORS.faded};
  width: 100%;
  max-width: 520px;
  padding: 1rem;
  position: relative;
  z-index: 10;
`;

const ImageWrapp = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

function SecondaryCard({ title, description, image, hoverImage }) {
  const [hovered, setHovered] = useState(false);

  const handleOnHover = () => {
    setHovered(true);
  };
  const handleOffHover = () => {
    setHovered(false);
  };
  return (
    <CardWrapper onMouseEnter={handleOnHover} onMouseLeave={handleOffHover}>
      <Container style={{ maxWidth: "100%", padding: "0px" }}>
        <Row>
          <Col xs={1} sm={3} md={2} lg={3}>
            <ImageWrapp>
              <Image
                src={image}
                width="100%"
                position="absolute"
                opacity={hovered ? "0" : "1"}
              />
              <Image
                src={hoverImage}
                width="100%"
                position="absolute"
                opacity={hovered ? "1" : "0"}
              />
            </ImageWrapp>
          </Col>
          <Col xs={3} sm={4} md={6} lg={9}>
            <Flex
              direction="column"
              items="start"
              gap="1px"
              m="0px 0px 10px 15px"
            >
              <Text weight={700} hover>{title}</Text>
              <Text size="15px">{description}</Text>
            </Flex>
          </Col>
        </Row>
      </Container>
    </CardWrapper>
  );
}

export default SecondaryCard;
