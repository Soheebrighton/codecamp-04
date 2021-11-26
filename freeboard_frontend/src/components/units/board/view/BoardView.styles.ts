import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f2f6f4; */
`;

export const Wrapper = styled.div`
  padding: 60px;
  width: 1000px;

  display: flex;
  flex-direction: column;
  /* border-right: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb; */
  margin-bottom: 20px;
  background-color: white;
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
`;

export const Date = styled.div`
  font-size: 13px;
  font-family: "Montserrat";
  font-weight: 200;
  letter-spacing: 3px;
  align-self: center;
  background-color: #f2f2f2;
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
  color: gray;
`;

export const Title = styled.div`
  /* align-self: ; */
  align-self: center;
  font-size: 39px;
  font-weight: 600;
  /* background-color: turquoise; */
  padding-bottom: 15px;
  /* border-bottom: 1px solid #bdbdbd; */
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  /* background-color: yellow; */
`;

export const Mutation = styled.div`
  color: lightgray;
  font-size: 15px;
  font-weight: 400;
  padding-right: 30px;
`;

export const Modify = styled.span`
  cursor: pointer;
  :hover {
    color: #787878;
  }
`;

export const Delete = styled.span`
  padding-left: 10px;
  cursor: pointer;
  :hover {
    color: #787878;
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ProfilePhoto = styled.span`
  font-size: 25px;

  /* background-color: aqua; */
`;

export const Name = styled.span`
  font-weight: 600;
  padding-right: 10px;
  height: 100%;

  /* background-color: aliceblue; */
  align-content: center;
`;

export const SmallBar = styled.div`
  align-self: center;
  height: 1px;
  width: 28px;
  background: linear-gradient(0.25turn, #ffffff, #a8a8a8, #a8a8a8, #ffffff);
`;

export const Content = styled.div`
  padding-top: 15px;
  line-height: 1.7;
  letter-spacing: 0.6;
  font-weight: 400;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Likes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  font-size: 17px;
`;

export const LikesText = styled.div`
  color: #7a7a7a;
  font-size: 12px;
  padding-top: 5px;
  font-weight: 600;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  /* border: none; */
  width: 70px;
  height: 70px;
  border-radius: 70px;
  padding: 10px;
  /* background-color: #fcfcfc; */
  cursor: pointer;
`;

export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
`;

export const ListButton = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: gray;
  width: 100px;
  height: 42px;
  font-size: 14px;
  padding: 8px;
  background-color: #ededed;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: white;
    background-color: #787878;
  }
`;

/////////// 댓글 ///////////

// export const Comments = styled.div`
//   width: 800px;
// `;

// export const CommentCreate = styled.div``;

// export const Row = styled.div``;

// export const CommentTitle = styled.div`
//   padding-bottom: 20px;
// `;

// export const CommentTop = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding-bottom: 20px;
// `;

// export const CommentWriteName = styled.input`
//   margin-right: 10px;
// `;

// export const CommentWritePassword = styled.input`
//   margin-right: 10px;
// `;

// export const Rate = styled.div``;

// export const CommentWrite = styled.div``;

// export const CommentInput = styled.textarea`
//   width: 100%;
//   height: 100px;
// `;

// export const CommentBottom = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
// `;

// export const CommentWords = styled.span`
//   width: 90%;
// `;

// export const CommentSubmitButton = styled.span`
//   width: 10%;
//   background-color: black;
//   color: white;
//   cursor: pointer;
// `;

// export const CommentView = styled.div`
//   border-bottom: 1px solid gray;
//   padding-bottom: 20px;
//   display: flex;
//   flex-direction: row;
//   padding-top: 20px;
// `;

// export const CommentProfilePhoto = styled.div`
//   width: 20%;
// `;

// export const CommentViewDetails = styled.div`
//   width: 70%;
// `;

// export const CommentWriter = styled.div`
//   font-weight: 600;
//   padding-bottom: 10px;
// `;

// export const CommentViewText = styled.div``;

// export const CommentViewDate = styled.div`
//   color: gray;
//   font-size: 9px;
// `;

// export const CommentEandD = styled.div`
//   width: 10%;
// `;

// export const CommentEdit = styled.span`
//   padding-right: 10px;
//   cursor: pointer;
//   :hover {
//     color: gray;
//   }
// `;

// export const CommentDelete = styled.span`
//   cursor: pointer;
//   :hover {
//     color: gray;
//   }
// `;
