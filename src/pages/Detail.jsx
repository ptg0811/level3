import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __updateIsDoneTodo,
  __getTodoDetail,
} from "../shared/redux/modules/todosSlice";
import CommentSection from "../components/comment/CommentSection";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDone, setIsDone] = React.useState(null);

  const { id } = useParams();

  const data = useSelector((state) => state.todos.todo);

  const onChangeDone = (id) => {
    dispatch(
      __updateIsDoneTodo({
        id,
        isDone: !data.isDone,
      })
    );

    setIsDone(!isDone);
  };

  useEffect(() => {
    dispatch(__getTodoDetail(id));
    setIsDone(data.isDone);
  }, [dispatch, id, data.isDone]);

  if (!data) {
    return <div>loading...</div>;
  } else {
    return (
      <StContainer>
        <StDialog>
          <StContentsBox>
            <StDialogHeader>
              <span>ID :{data.id}</span>
              <StButtonSet>
                <StButton
                  borderColor={isDone ? "red" : "green"}
                  color={isDone ? "red" : "green"}
                  onClick={() => {
                    onChangeDone(data.id);
                  }}
                >
                  {isDone ? <>완료</> : <>취소</>}
                </StButton>
                <StButton
                  borderColor="#ddd"
                  onClick={() => {
                    navigate(`/${id}/edit`);
                  }}
                >
                  수정하기
                </StButton>
                <StButton
                  borderColor="#ddd"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  이전으로
                </StButton>
              </StButtonSet>
            </StDialogHeader>
            <StTitle>{data.title}</StTitle>
            <StBody>{data.description}</StBody>
          </StContentsBox>
          <CommentSection data={data} id={id} />
        </StDialog>
      </StContainer>
    );
  }
};

export default Detail;

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

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
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
