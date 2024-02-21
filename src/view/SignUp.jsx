import styled from "styled-components";
import Flex from "../components/Flex";
import Text from "../components/Text";
import { COLORS } from "../utils/colors";
import Input from "../components/Input";
import useIsMobile from "../hooks/IsMobile";
import Button from "../components/Button";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import useIsTab from "../hooks/IsTab";

const ContainerWrapper = styled.div`
  background: ${COLORS.white};
  border-radius: 25px;
  padding: 3rem 1rem;
  height: 100%;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 720px) {
    padding: 0.5rem;
  }
`;

function SignUp() {
  const isMobile = useIsMobile();
  const isTab = useIsTab();
  return (
    <ContainerWrapper>
      <Flex direction="column" gap={isMobile ? ".5rem" : "1rem"}>
        <Flex>
          <Text size="20px">Sign Up</Text>
        </Flex>
        <Flex direction={isMobile ? "column" : "row"} width="98%" gap=".5rem"> 
          <Input placeholder="Enter First name" width="90%" />
          <Input placeholder="Enter Last name" width="90%" />
        </Flex>
        <Input placeholder="Enter Email" width="90%" type="email" />
        <Input placeholder="Enter Password" width="90%" type="password" />
        <Text>OR</Text>
        <Button fullWidth>
          <FaGoogle /> Continue with google
        </Button>
        <Flex gap=".5rem" direction={isTab ? "column" : "row"} width="100%">
          <Button fullWidth>
            <FaXTwitter />
            Twitter
          </Button>
          <Button fullWidth>
            <ImFacebook2 />
            Facebook
          </Button>
          <Button fullWidth>
            <FaDiscord />
            Discord
          </Button>
        </Flex>
        <Text size="13px" color={COLORS.light} align="center">
          We do not store any data related to social login
        </Text>
        <Flex width="100%" mt="1rem" mb="0rem">
          <Button fullWidth>
            Continue <FaArrowRight />
          </Button>
        </Flex>
      </Flex>
    </ContainerWrapper>
  );
}

export default SignUp;
