import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __editTodo,
  __getTodoDetail,
  editTodos,
} from "../shared/redux/modules/todosSlice";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const data = useSelector((state) => state.todos.todo);

  const onChangeTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const onSubmit = () => {
    dispatch(
      __editTodo({
        id,
        title,
        description,
      })
    );

    dispatch(
      editTodos({
        id,
        title,
        description,
      })
    );

    navigate(`/${id}`);
  };

  useEffect(() => {
    dispatch(__getTodoDetail(id));
    setTitle(data.title);
    setDescription(data.description);
  }, [dispatch, id, data.title, data.description]);

  return (
    <StContainer>
      <StDialog>
        <StContentsBox>
          <StDialogHeader>
            <span>ID :{data.id}</span>
            <StButtonSet>
              <StButton borderColor="black" onClick={onSubmit}>
                수정하기
              </StButton>
              <StButton
                borderColor="#ddd"
                onClick={() => {
                  navigate(-1);
                }}
              >
                이전으로
              </StButton>
            </StButtonSet>
          </StDialogHeader>
          <StInputBox>
            <label>제목 </label>
            <StInput placeholder={data.title} onChange={onChangeTitle} />
            <label>설명 </label>
            <StInput
              placeholder={data.description}
              onChange={onChangeDescription}
            />
          </StInputBox>
        </StContentsBox>
      </StDialog>
    </StContainer>
  );
};

export default Edit;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 700px;
  padding: 12px 12px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StContentsBox = styled.div`
  margin-bottom: 24px;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StInput = styled.input`
  width: 60%;
  height: 40px;
  border: 1px solid #eee;
  padding: 0 12px;
`;

const StButtonSet = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StButton = styled.button`
  color: ${({ color }) => color};
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 100px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
