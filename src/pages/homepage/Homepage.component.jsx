import React from "react";

import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styles";

import Directory from "../../components/directory/Directory.component";

const Homepage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default Homepage;
