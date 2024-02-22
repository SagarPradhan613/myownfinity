import styled from "styled-components";
import Heading from "../components/Heading";
import Text from "../components/Text";
import useIsMobile from "../hooks/IsMobile";
import SecondaryCard from "../view/SecondaryCard";
import { IMAGE_COLLECTIONS } from "../utils/images";
import LeftShadow from "../view/shadows/LeftShadow";
import Section from "../components/Section";

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
  const description =
    "Lorem ipsum is a placeholder text commonly used to the visual form of a document or a typeface without relying on meaningful content.";
  return (
    <Section>
      <LeftShadow top={isMobile ? "0rem" : "-30rem"} />
      <Heading align="center" maxWidth="1400px">
        Own Real World Assets <br /> Like Never Before
      </Heading>
      <FlexWrapper>
        <SecondaryCard
          image={IMAGE_COLLECTIONS.secondayimage1}
          hoverImage={IMAGE_COLLECTIONS.secondaygif1}
          title="Buy & Sell RWAs"
          description={description}
        />
        <SecondaryCard
          image={IMAGE_COLLECTIONS.secondayimage2}
          hoverImage={IMAGE_COLLECTIONS.secondaygif2}
          title="Lend & Borrow RWAs"
          description={description}
        />
        <SecondaryCard
          image={IMAGE_COLLECTIONS.secondayimage3}
          hoverImage={IMAGE_COLLECTIONS.secondaygif3}
          title="RWAs Shared Ownership"
          description={description}
        />
        <SecondaryCard
          image={IMAGE_COLLECTIONS.secondayimage4}
          hoverImage={IMAGE_COLLECTIONS.secondaygif4}
          title="RWAs Auction"
          description={description}
        />
      </FlexWrapper>
    </Section>
  );
}

export default SecondarySection;
