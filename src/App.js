// import { Route, Link } from "react-dom";
import styled from "styled-components";
import HeadContainer from "./container/HeadContainer";
import MainContainer from "./container/MainContainer";
import NavContainer from "./container/NavContainer";
import GlobalStyle from "./GlobalStyle";

const Layout = styled.div`
  width: 1080px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <HeadContainer />
      <NavContainer />
      <MainContainer />
    </Layout>
  );
};
export default App;
