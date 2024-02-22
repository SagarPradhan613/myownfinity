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
        <Heading align="center">Our Partners</Heading>
        <Text maxWidth="800px" align="center">
          Explore the synergies that drive Ownfinity's commitment to excellence
          and redefine the future of ownership together.
        </Text>
        <Scroller />
      </Flex>
    </Section>
  );
};

export default PartnerShipSection;
