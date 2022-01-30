import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagInput = styled.input`
  height: 31px;
  :focus {
    outline: none;
  }
  border: none;
  border-bottom: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border-bottom: 1px solid #787878;
  }

  &:hover {
    border-bottom: 1px solid #787878;
  }
`;

const TagWrapper = styled.div`
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  margin: 0px 10px 0px 0px;
  color: #4e4e4e;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface IPropsTags {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  dataForFetch?: Pick<IQuery, "fetchUseditem">;
}

export default function Tags(props: IPropsTags) {
  const [tag, setTag] = useState<string>("");

  const onKeyPress = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      event.target.value.replace(/\s+/g, "");
      props.setTags([...props.tags, event.target.value]);
      setTag("");
    }
  };

  const onChange = (event: any) => {
    setTag(event.target.value);
  };

  const onClick = (event: any) => {
    props.setTags(
      props.tags.filter((word: string) => word !== event.target.id)
    );
  };

  return (
    <>
      <Wrapper>
        <Container>
          {props.tags.map((el: string) => (
            <TagWrapper onClick={onClick} key={el} id={el}>
              #{el}
            </TagWrapper>
          ))}
          <TagInput
            onKeyUp={onKeyPress}
            onChange={onChange}
            value={tag}
            placeholder="입력후 스페이스바 누르기"
          />
        </Container>
      </Wrapper>
    </>
  );
}
