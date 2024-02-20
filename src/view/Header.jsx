import Flex from "../components/Flex";
import Image from "../components/Image";
import Text from "../components/Text";
import { COLORS } from "../utils/colors";
import { IMAGE_COLLECTIONS } from "../utils/images";
import IconButton from "../components/IconButton";
import styled from "styled-components";
import Input from "../components/Input";
import { CiSearch } from "react-icons/ci";
import useIsMobile from "../hooks/IsMobile";
import ShowDesktop from "../components/viewport/DesktopView";

const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 100;
  background: ${COLORS.white};
`;

const InputWrapper = styled.div`
  position: relative;
`;

const SearchIconBox = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background: ${COLORS.gradient};
  padding: 11px 10px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${COLORS.gradientReverse};
    color: ${COLORS.white};
  }
`;

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <HeaderWrapper >
      <Flex p="1rem 2rem" justify="space-between">
        <Flex>
          {isMobile ? (
            <>
              <Image src={IMAGE_COLLECTIONS.TextIcon} />
            </>
          ) : (
            <>
              <Image src={IMAGE_COLLECTIONS.TextIcon} width="150px" />
              <Text>|</Text>
              <Text color={COLORS.light}>Dealing Real World Assets</Text>
            </>
          )}
        </Flex>
        <ShowDesktop>
          <Flex>
            <IconButton>
              <Text>Home</Text>
            </IconButton>
            <IconButton>
              <Text>Buy/Sell</Text>
            </IconButton>
            <IconButton>
              <Text>Lend</Text>
            </IconButton>
            <IconButton>
              <Text>Betting</Text>
            </IconButton>
            <IconButton>
              <Text>Auction</Text>
            </IconButton>
            <IconButton>
              <Text>Shared Ownership</Text>
            </IconButton>
            <InputWrapper>
              <Input placeholder="Search" />
              <SearchIconBox>
                <CiSearch />
              </SearchIconBox>
            </InputWrapper>
          </Flex>
        </ShowDesktop>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
