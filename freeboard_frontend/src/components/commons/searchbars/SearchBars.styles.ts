import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  width: 50%;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  position: relative;
`;
export const SearchInput = styled.input`
  width: 200px;
  height: 35px;
  padding: 10px 10px 10px 35px;
  border: 1px solid #ebebeb;
  border-radius: 7px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  :focus {
    outline: none;
    background-color: white;
  }
  ::placeholder {
    color: #dddddd;
  }
`;
export const SearchIcon = styled.div`
  width: 40px;

  text-align: center;
  cursor: pointer;
`;
