import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EducationsPage from "./pages/EducationsPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import NotFound from "./pages/404";
const MainContentStyle = styled("aside")`
  width: calc(100% - 300px);
  min-height: 100vh;
  transform: translateX(300px);
  position: relative;
`;
const Lines = styled("section")`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const Line = styled("div")`
  width: 1px;
  min-height: 100%;
  background-color: var(--bgGrey);
  opacity: 0.2;
`;
const MainContent = () => {
  return (
    <MainContentStyle>
      <Lines>
        <Line />
        <Line />
        <Line />
        <Line />
      </Lines>

      <Switch>
        <Route path="/about.html" exact>
          <AboutPage />
        </Route>
        <Route path="/services.html" exact>
          <ServicesPage />
        </Route>
        <Route path="/portfolio.html" exact>
          <PortfolioPage />
        </Route>
        <Route path="/blogs.html" exact>
          <BlogsPage />
        </Route>
        <Route path="/skills.html" exact>
          <SkillsPage />
        </Route>
        <Route path="/educations.html" exact>
          <EducationsPage />
        </Route>
        <Route path="/contact.html" exact>
          <ContactPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="*" exact>
          <NotFound />
        </Route>
      </Switch>
    </MainContentStyle>
  );
};

export default MainContent;
