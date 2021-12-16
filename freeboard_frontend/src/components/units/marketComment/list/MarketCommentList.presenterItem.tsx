import * as A from "./MarketCommentList.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function MarketCommentListUIItem(props) {
  return (
    <>
      <A.Wrapper>
        <A.CommentView>
          <A.CommentProfilePhoto>
            {" "}
            <Avatar size="large" icon={<UserOutlined />} />
          </A.CommentProfilePhoto>
          <A.CommentViewDetails>
            <A.CommentViewTop>
              <A.CommentWriter>{props.el?.user.name}</A.CommentWriter>
            </A.CommentViewTop>

            <A.CommentViewText>{props.el?.contents}</A.CommentViewText>

            <A.CommentViewDate>{props.el?.createdAt}</A.CommentViewDate>
          </A.CommentViewDetails>
          <A.CommentEandD>
            {/* <EditOutlined /> */}
            <A.CommentEdit>
              {" "}
              <FontAwesomeIcon icon={faEdit} color="#eeeeee" />
            </A.CommentEdit>
            {/* <A.CommentDelete onClick={onClickDelete}> */}
            <A.CommentDelete>
              {" "}
              <FontAwesomeIcon icon={faTrashAlt} color="#eeeeee" />
            </A.CommentDelete>
          </A.CommentEandD>
        </A.CommentView>
      </A.Wrapper>
    </>
  );
}
