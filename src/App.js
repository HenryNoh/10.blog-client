// import { Route, Link } from "react-dom";
import styled from "styled-components";
import { Route } from "react-router-dom";
import HeadContainer from "./container/HeadContainer";
import MainContainer from "./container/MainContainer";
import NavContainer from "./container/NavContainer";
import TechContainer from "./container/TechContainer";
import LifeContainer from "./container/LifeContainer";
import AboutContainer from "./container/AboutContainer";
import MoreContainer from "./container/MoreContainer";
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
      <Route path="/" exact="true" component={MainContainer} />
      <Route path="/tech" exact="true" component={TechContainer} />
      <Route path="/life" exact="true" component={LifeContainer} />
      <Route path="/about" exact="true" component={AboutContainer} />
      <Route path="/more" exact="true" component={MoreContainer} />
    </Layout>
  );
};
export default App;
