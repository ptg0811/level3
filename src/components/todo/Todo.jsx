import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  __deleteTodo,
  __updateIsDoneTodo,
  deleteTodos,
} from "../../shared/redux/modules/todosSlice";

const Todo = ({ list }) => {
  console.log("Todo rendered");
  const dispatch = useDispatch();

  const deleteListItem = (id) => {
    dispatch(__deleteTodo(id));
    dispatch(deleteTodos(id));
  };

  const onChangeDone = (id) => {
    dispatch(
      __updateIsDoneTodo({
        id,
        isDone: !list.isDone,
      })
    );
  };

  return (
    <Square>
      <Link to={`/${list.id}`}>상세보기</Link>
      <h2>{list.title}</h2>
      <div>{list.description}</div>
      <ButtonSet>
        <DeleteButton
          onClick={() => {
            deleteListItem(list.id);
          }}
        >
          삭제
        </DeleteButton>
        <CompleteButton
          onClick={() => {
            onChangeDone(list.id);
          }}
        >
          {list.isDone === true ? "취소" : "완료"}
        </CompleteButton>
      </ButtonSet>
    </Square>
  );
};

const Square = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

const DeleteButton = styled(Button)`
  background-color: #fff;
  border: 2px solid red;
`;

const CompleteButton = styled(Button)`
  background-color: #fff;
  border: 2px solid green;
`;

export default Todo;
