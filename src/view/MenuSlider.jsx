/* eslint-disable react/prop-types */
import { keyframes } from "styled-components";
import styled from "styled-components";
import { COLORS } from "../utils/colors";
import { IoCloseOutline } from "react-icons/io5";
import IconButton from "../components/IconButton";
import Text from "../components/Text";
import Flex from "../components/Flex";

const Entry = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const StyledMenuSlider = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.white};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Entry} 200ms linear;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;

const MenuSlider = ({ setIsMenu }) => {
  return (
    <StyledMenuSlider>
      {/* Your menu content goes here */}
      <CloseButton onClick={() => setIsMenu(false)}>
        <IoCloseOutline fontSize="30px" style={{ color: COLORS.black }} />
      </CloseButton>
      <Flex direction="column">
        <IconButton>
          <Text hover>Home</Text>
        </IconButton>
        <IconButton>
          <Text hover overflow>
            Buy/Sell
          </Text>
        </IconButton>
        <IconButton>
          <Text hover>Lend</Text>
        </IconButton>
        <IconButton>
          <Text hover>Win</Text>
        </IconButton>
        <IconButton>
          <Text hover>Auction</Text>
        </IconButton>
        <IconButton>
          <Text hover overflow>
            Shared Ownership
          </Text>
        </IconButton>
      </Flex>
    </StyledMenuSlider>
  );
};

export default MenuSlider;
