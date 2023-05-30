// src/shared/Layout.js

import React from "react";
import styled from "styled-components";

import Header from "../../components/header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </div>
  );
};

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

export default Layout;
