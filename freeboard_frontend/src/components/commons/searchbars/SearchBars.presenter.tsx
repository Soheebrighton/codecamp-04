import * as A from "./SearchBars.styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IPropsSearchBarsUI {
  onChangeSearchBar: (event: any) => void;
}

export default function SearchBarsUI(props: IPropsSearchBarsUI) {
  return (
    <>
      <A.SearchWrapper>
        <A.SearchInput
          placeholder="검색어를 입력하세요."
          onChange={props.onChangeSearchBar}
        />
        <FontAwesomeIcon
          icon={faSearch}
          color="#ebebeb"
          style={{ position: "absolute", right: "175px" }}
        />
      </A.SearchWrapper>
    </>
  );
}
