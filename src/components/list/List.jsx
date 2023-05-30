import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Todo from "../todo/Todo";

const List = () => {
  const { todos } = useSelector((state) => state.todos);

  console.log(todos);
  console.log("List rendered");

  const WorkingLists = todos
    .filter((list) => list.isDone === false)
    .map((list) => {
      return <Todo list={list} key={list.id} />;
    });

  const DoneLists = todos
    .filter((list) => list.isDone === true)
    .map((list) => {
      return <Todo list={list} key={list.id} />;
    });

  return (
    <ListContainer>
      <div>
        <Heading>
          Working..{" "}
          <span role="img" aria-labelledby="flame">
            🔥
          </span>
        </Heading>
        <AppStyle>{WorkingLists}</AppStyle>
      </div>
      <div>
        <Heading>
          Done..!{" "}
          <span role="img" aria-labelledby="confeti">
            🎉
          </span>
        </Heading>
        <AppStyle>{DoneLists}</AppStyle>
      </div>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  padding: 0 24px;
`;

const Heading = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const AppStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export default List;
