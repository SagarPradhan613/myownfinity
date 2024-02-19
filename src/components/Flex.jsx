/* eslint-disable react/prop-types */
import styled from "styled-components";

const FlexComponent = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ items }) => items || "center"};
  gap: ${({ gap }) => gap || "1rem"};
  flex-direction: ${({ direction }) => direction || "row"};
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  margin: ${({ m }) => m || "0px"};
  padding: ${({ p }) => p || "0px"};
  background: ${({ bg }) => bg || "transparent"};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  padding-top: ${({ pt }) => pt};
  padding-top: ${({ pb }) => pb};
  position: relative;
`;

function Flex({
  justify,
  items,
  children,
  direction,
  maxWidth,
  m,
  p,
  bg,
  mt,
  mb,
  pt,
  pb,
  width,
  gap
}) {
  return (
    <FlexComponent
      justify={justify}
      items={items}
      direction={direction}
      maxWidth={maxWidth}
      m={m}
      p={p}
      bg={bg}
      mt={mt}
      mb={mb}
      pt={pt}
      pb={pb}
      width={width}
      gap={gap}
    >
      {children}
    </FlexComponent>
  );
}

export default Flex;
