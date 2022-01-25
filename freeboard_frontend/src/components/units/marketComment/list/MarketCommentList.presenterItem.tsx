import * as A from "./MarketCommentList.styles";
import { useMutation } from "@apollo/client";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./MarketCommentList.queries";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState } from "react";
import AnswerWrite from "../answer/write/AnswerWrite.container";
import AnswerList from "../answer/list/AnswerList.container";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import { displayedAt } from "../../../../commons/libraries/utils";
import { IPropsMarketCommentListUIItem } from "./MarketCommentList.types";

export default function MarketCommentListUIItem(
  props: IPropsMarketCommentListUIItem
) {
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const router = useRouter();
  async function onClickDeleteQuestion() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: {
              useditemId: router.query.myId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  const [isAnswerWrite, setIsAnswerWrite] = useState(false);
  const [isEditQuestion, setIsEditQuestion] = useState(false);

  function onClickAnswerInput() {
    setIsAnswerWrite((prev) => !prev);
  }

  function onClickEditQuestion() {
    setIsEditQuestion(true);
  }

  return (
    <>
      {!isEditQuestion && (
        <A.Wrapper>
          <A.CommentQandA>
            <A.CommentView>
              <A.CommentProfilePhoto>
                <Avatar size="large" icon={<UserOutlined />} />
              </A.CommentProfilePhoto>
              <A.CommentViewDetails>
                <A.CommentViewTop>
                  <A.CommentWriter>{props.el?.user.name}</A.CommentWriter>
                </A.CommentViewTop>

                <A.CommentViewText>{props.el?.contents}</A.CommentViewText>

                <A.CommentViewDate>
                  {displayedAt(props.el?.createdAt)}
                </A.CommentViewDate>
              </A.CommentViewDetails>
              <A.CommentEandD>
                {props.el?.user._id ===
                  props.dataForUserInfo?.fetchUserLoggedIn._id && (
                  <>
                    {/* <EditOutlined /> */}
                    <A.CommentEdit onClick={onClickEditQuestion}>
                      <FontAwesomeIcon icon={faEdit} color="#eeeeee" />
                    </A.CommentEdit>
                    {/* <A.CommentDelete onClick={onClickDelete}> */}
                    <A.CommentDelete onClick={onClickDeleteQuestion}>
                      <FontAwesomeIcon icon={faTrashAlt} color="#eeeeee" />
                    </A.CommentDelete>
                  </>
                )}
                <span
                  style={{ paddingLeft: "10px" }}
                  onClick={onClickAnswerInput}
                >
                  <FontAwesomeIcon icon={faCommentAlt} color="#e2e2e2" />
                </span>
              </A.CommentEandD>
            </A.CommentView>
            {/* 대댓글 */}
            <AnswerList usedQId={props.el?._id} />
            {isAnswerWrite && (
              <AnswerWrite
                useditemQuestionId={props.el?._id}
                setIsAnswerWrite={setIsAnswerWrite}
              />
            )}
          </A.CommentQandA>
        </A.Wrapper>
      )}

      {isEditQuestion && (
        <MarketCommentWrite
          usedQId={props.el?._id}
          isEditQuestion={isEditQuestion}
          setIsEditQuestion={setIsEditQuestion}
        />
      )}
    </>
  );
}
