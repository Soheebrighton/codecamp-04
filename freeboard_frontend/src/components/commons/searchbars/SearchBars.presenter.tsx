import * as A from "./SearchBars.styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBarsUI(props) {
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
      </A.SearchWrapper>{" "}
    </>
  );
}
