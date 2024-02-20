/* eslint-disable react/prop-types */
import styled from "styled-components";

const ShowDesktop = styled.div`
  display: block;
  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const DesktopView = ({ children }) => {
  return <ShowDesktop>{children}</ShowDesktop>;
};

export default DesktopView;
