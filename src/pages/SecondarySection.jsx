import styled from "styled-components";
import Heading from "../components/Heading";
import useIsMobile from "../hooks/IsMobile";
import SecondaryCard from "../view/SecondaryCard";
import LeftShadow from "../view/shadows/LeftShadow";
import Section from "../components/Section";
import { cardItems } from "../utils/footer";

const FlexWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function SecondarySection() {
  const isMobile = useIsMobile();
 
  return (
    <Section>
      <LeftShadow top={isMobile ? "0rem" : "-30rem"} />
      <Heading align="center" maxWidth="1400px">
        Own Real World Assets <br /> Like Never Before
      </Heading>
      <FlexWrapper>
        {cardItems.map((item, i) => (
          <SecondaryCard
            image={item.image}
            hoverImage={item.hoverImage}
            title={item.title}
            description={item.description}
          />
        ))}
      </FlexWrapper>
    </Section>
  );
}

export default SecondarySection;
