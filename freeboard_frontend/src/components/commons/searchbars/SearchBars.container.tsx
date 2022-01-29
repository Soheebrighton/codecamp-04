import SearchBarsUI from "./SearchBars.presenter";
import _ from "lodash";
import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";

interface IPropsSearchBars {
  onChangeKeyword: (value: any) => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
}

export default function SearchBars(props: IPropsSearchBars) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  const onChangeSearchBar = (event: any) => {
    getDebounce(event.target.value);
  };
  return <SearchBarsUI onChangeSearchBar={onChangeSearchBar} />;
}
