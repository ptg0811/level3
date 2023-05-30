import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Styled from "styled-components";
import { __postTodo } from "../../shared/redux/modules/todosSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const onChangeTitle = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  const onChangeDesc = (event) => {
    const { value } = event.target;
    setDesc(value);
  };

  const onSubmitTodoItem = (event) => {
    event.preventDefault();
    if (title === "") return;
    if (description === "") return;

    dispatch(
      __postTodo({
        id: new Date().getTime(),
        title,
        description,
        isDone: false,
        comments: [],
      })
    );
    setTitle("");
    setDesc("");
  };

  return (
    <AddForm onSubmit={onSubmitTodoItem}>
      <FormContainer>
        <FormLabel>제목</FormLabel>
        <AddInput type="text" value={title} onChange={onChangeTitle} />
        <FormLabel>내용</FormLabel>
        <AddInput type="text" value={description} onChange={onChangeDesc} />
      </FormContainer>
      <AddButton>추가하기</AddButton>
    </AddForm>
  );
};

const AddForm = Styled.form`
background-color: #eee; 
border-radius: 12px; 
justify-content: space-between; 
margin: 0 auto; 
padding: 30px;
&,
  .input-style {
    align-items: center;
    display: flex;
  }
`;

const FormContainer = Styled.div`
  align-items: center; 
  display: flex; 
  gap: 20px;
`;

const AddInput = Styled.input`
  border: none; 
  border-radius: 12px; 
  height: 40px; 
  padding: 0 12px; 
  width: 240px;
`;

const FormLabel = Styled.label`
  font-size: 16px; 
  font-weight: 700;
`;

const AddButton = Styled.button`
  background-color: teal; 
  border: none; 
  border-radius: 10px; 
  color: #fff; 
  font-weight: 700; 
  height: 40px; 
  width: 140px;
`;

export default Form;
