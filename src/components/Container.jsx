/* eslint-disable react/prop-types */
import styled from "styled-components";
import Flex from "./Flex";

const ContainerComponent = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "1440px"};
  position: relative;
  z-index: 1;
  background: ${({ bg }) => bg || "transparent"};
`;

function Container({ maxWidth, children,bg }) {
  return (
    <Flex bg={bg}>
      <ContainerComponent maxWidth={maxWidth} >{children}</ContainerComponent>
    </Flex>
  );
}

export default Container;
