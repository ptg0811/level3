import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <span>My Todo List</span>
      <span>React</span>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  max-width: 1160px;
  min-width: 800px;
  margin: 0px auto 20px;
`;

export default Header;
