import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import Paginations01UI from "./Paginations01.presenter";

interface IPropsPaginations01 {
  count: number;
  startPage: number;
  refetch: (
    variables?:
      | Partial<{
          page: number;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
  setStartPage: Dispatch<SetStateAction<number>>;
  onClickPage: (event: any) => void;
}

export default function Paginations01(props: IPropsPaginations01) {
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: any) => {
    props.refetch({ page: Number(event.target.id) });
  };
  const onClickPagePrev = () => {
    if (props.startPage === 1) return;
    props.setStartPage((prev) => prev - 10);
  };

  const onClickPageNext = () => {
    if (props.startPage + 10 > lastPage) return;
    props.setStartPage((prev) => prev + 10);
  };

  return (
    <Paginations01UI
      startPage={props.startPage}
      lastPage={lastPage}
      onClickPagePrev={onClickPagePrev}
      onClickPageNext={onClickPageNext}
      onClickPage={onClickPage}
    />
  );
}
