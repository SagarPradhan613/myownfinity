import styled from "styled-components";
import Flex from "../components/Flex";
import Text from "../components/Text";
import { COLORS } from "../utils/colors";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";
import useIsMobile from "../hooks/IsMobile";

const ContainerWrapper = styled.div`
  background: ${COLORS.white};
  border-radius: 25px;
  padding: 1rem;
  height: 150px;
  position: relative;
  z-index: 100;
  max-width: 500px;
  width: 100%;
  @media screen and (max-width: 720px) {
    padding: 0.5rem;
    margin-top: 1rem;
  }
`;

const InputWrapp = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

const ButtonWrapp = styled.div`
  position: absolute;
  top: 2.5px;
  right: 2px;
  @media screen and (max-width: 720px) {
    right: 0rem;
    top: 3px;
  }
`;

function NewsLetter() {
  const isMobile = useIsMobile();
  return (
    <ContainerWrapper>
      <Flex direction="column">
        <Flex>
          <Text size="25px">Newsletter</Text>
        </Flex>
        {isMobile ? (
          <Flex direction="column" width="100%" gap="0.5rem">
            <Input placeholder="Enter Email" width="90%" type="email" />
            <Button fullWidth>
              Continue <FaArrowRight />
            </Button>
          </Flex>
        ) : (
          <InputWrapp>
            <Input placeholder="Enter Email" width="93%" type="email" />
            <ButtonWrapp>
              <Button fullWidth>
                Continue <FaArrowRight />
              </Button>
            </ButtonWrapp>
          </InputWrapp>
        )}
      </Flex>
    </ContainerWrapper>
  );
}

export default NewsLetter;
