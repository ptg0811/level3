import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  __deleteComment,
  deleteComment,
} from "../../shared/redux/modules/todosSlice";

const CommentList = ({ data, comment, id }) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    const newCommnetList = data.comments.filter((comment) => comment.id !== id);

    dispatch(__deleteComment({ id: data.id, comments: newCommnetList }));
    dispatch(deleteComment({ id: data.id, comments: newCommnetList }));
  };

  return (
    <StCommentBox>
      <StText>{comment.content}</StText>
      <StButton onClick={onClickDelete}>댓글 삭제</StButton>
    </StCommentBox>
  );
};

export const StCommentBox = styled.div`
  width: 100%;
  padding: 12px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StText = styled.div`
  padding: 0 12px;
`;

const StButton = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid #eee;
  margin: 0 12px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

export default React.memo(CommentList);
