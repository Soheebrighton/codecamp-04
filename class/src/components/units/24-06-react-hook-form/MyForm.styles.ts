import styled from "@emotion/styled";

export const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;
