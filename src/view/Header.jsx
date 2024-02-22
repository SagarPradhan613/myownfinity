import Flex from "../components/Flex";
import Image from "../components/Image";
import Text from "../components/Text";
import { COLORS } from "../utils/colors";
import { IMAGE_COLLECTIONS } from "../utils/images";
import IconButton from "../components/IconButton";
import styled from "styled-components";
import MenuSlider from "./MenuSlider";
import { useState } from "react";
import useIsMobile from "../hooks/IsMobile";
import { TiThMenu } from "react-icons/ti";


const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 100;
  background: ${COLORS.white};
`;

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const isMobile = useIsMobile();

  return (
    <HeaderWrapper>
      <Flex p="1rem 2rem" justify="space-between">
        <Flex>
          <Image src={IMAGE_COLLECTIONS.TextIcon} width="150px" />
          {!isMobile && (
            <>
              <Text>|</Text>
              <Text color={COLORS.light} size="15px">
              Real World Assets On Blockchain
              </Text>
            </>
          )}
        </Flex>

        {isMobile ? (
          <TiThMenu
            fontSize="20px"
            style={{ color: COLORS.black }}
            onClick={() => setIsMenu(true)}
          />
        ) : (
          <Flex>
            <IconButton>
              <Text size="15px" hover>
                Home
              </Text>
            </IconButton>
            <IconButton>
              <Text size="15px" hover overflow>
                Buy/Sell
              </Text>
            </IconButton>
            <IconButton>
              <Text size="15px" hover>
                Lend
              </Text>
            </IconButton>
            <IconButton>
              <Text size="15px" hover>
                Betting
              </Text>
            </IconButton>
            <IconButton>
              <Text size="15px" hover>
                Auction
              </Text>
            </IconButton>
            <IconButton>
              <Text size="15px" hover overflow>
                Shared Ownership
              </Text>
            </IconButton>
          </Flex>
        )}
      </Flex>
      {isMenu && <MenuSlider setIsMenu={setIsMenu} />}
    </HeaderWrapper>
  );
};

export default Header;
