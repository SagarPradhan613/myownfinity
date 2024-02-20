import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Text from "../components/Text";
import useIsMobile from "../hooks/IsMobile";
import { COLORS } from "../utils/colors";
import Scroller from "../view/Scroller";
import LeftShadow from "../view/shadows/LeftShadow";

const PartnerShipSection = () => {
  const isMobile = useIsMobile();
  return (
    <Section>
      <LeftShadow top={isMobile ? "0rem" : "-55rem"} />
      <Flex bg={COLORS.darkFaded} width="100%" direction="column" p="3rem 0rem">
        <Heading align="center">Partnerships With Ownfinity</Heading>
        <Text maxWidth="800px" align="center">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </Text>
        <Scroller />
      </Flex>
    </Section>
  );
};

export default PartnerShipSection;
