/* eslint-disable react/prop-types */
import styled from "styled-components";
import Flex from "./Flex";

const ContainerComponent = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "1440px"};
`;

function Container({ maxWidth, children }) {
  return (
    <Flex>
      <ContainerComponent maxWidth={maxWidth}>{children}</ContainerComponent>
    </Flex>
  );
}

export default Container;
