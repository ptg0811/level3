import React from "react";

import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { __patchComment } from "../../shared/redux/modules/todosSlice";
import CommentList from "./CommentList";

const CommentSection = ({ id, data }) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const CommentChangeHandler = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const CommentSubmitHandler = useCallback(() => {
    if (!comment.trim()) {
      alert("댓글을 입력해주세요");
      return;
    }

    const newCommentList = [
      ...data.comments,
      {
        id: Date.now(),
        content: comment,
      },
    ];

    // 댓글 등록
    dispatch(__patchComment({ id, comments: newCommentList }));

    // 댓글 등록 후 input 초기화
    setComment("");
  }, [dispatch, id, comment, data.comments]);

  return (
    <StCommentBox>
      <StCommentInputForm onSubmit={CommentSubmitHandler}>
        <StCommentInput
          type="text"
          placeholder="댓글을 입력해주세요"
          onChange={CommentChangeHandler}
        />
        <StCommentButton>댓글 등록하기</StCommentButton>
      </StCommentInputForm>
      <StCommentListBox>
        {data.comments &&
          data.comments.map((comment) => (
            <CommentList
              key={comment.id}
              id={comment.id}
              data={data}
              comment={comment}
            ></CommentList>
          ))}
      </StCommentListBox>
    </StCommentBox>
  );
};

export default React.memo(CommentSection);

const StCommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StCommentInputForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
`;

const StCommentButton = styled.button`
  border: 1px solid #eee;
  height: 40px;
  width: 30%;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const StCommentInput = styled.input`
  width: 90%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #eee;
  border-radius: 12px;
`;

const StCommentListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
