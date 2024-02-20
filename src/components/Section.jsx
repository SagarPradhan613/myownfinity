/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
  margin-top: ${({ mt }) => mt || "10rem"};
  margin-bottom: ${({ mb }) => mb || "10rem"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 720px) {
    margin-top: ${({ mt }) => mt || "5rem"};
    margin-bottom: ${({ mb }) => mb || "5rem"};
  }
`;

function Section({ children, mt, mb }) {
  return (
    <Container mt={mt} mb={mb}>
      {children}
    </Container>
  );
}

export default Section;
