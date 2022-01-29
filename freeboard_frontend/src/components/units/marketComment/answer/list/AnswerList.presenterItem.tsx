import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./AnswerList.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import AnswerWrite from "../write/AnswerWrite.container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import * as A from "./AnswerList.styles";
import { IPropsAnswerListUIItem } from "./AnswerList.types";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";

export default function AnswerListUIItem(props: IPropsAnswerListUIItem) {
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER);

  const [isEditAnswer, setIsEditAnswer] = useState<boolean>(false);

  const onClickDeleteAnswer = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.usedQId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickEditAnswer = () => {
    setIsEditAnswer(true);
  };

  return (
    <>
      {!isEditAnswer && (
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
              </A.CommentViewDetails>
              <A.CommentEandD>
                {props.el?.user._id ===
                  props.dataForUserInfo?.fetchUserLoggedIn._id && (
                  <>
                    <A.CommentEdit onClick={onClickEditAnswer}>
                      <FontAwesomeIcon icon={faEdit} color="#eeeeee" />
                    </A.CommentEdit>
                    <A.CommentDelete onClick={onClickDeleteAnswer}>
                      <FontAwesomeIcon icon={faTrashAlt} color="#eeeeee" />
                    </A.CommentDelete>
                  </>
                )}
              </A.CommentEandD>
            </A.CommentView>
          </A.CommentQandA>
        </A.Wrapper>
      )}
      {isEditAnswer && (
        <AnswerWrite
          isEditAnswer={isEditAnswer}
          setIsEditAnswer={setIsEditAnswer}
          useditemAId={props.el._id}
          el={props.el}
        />
      )}
    </>
  );
}
