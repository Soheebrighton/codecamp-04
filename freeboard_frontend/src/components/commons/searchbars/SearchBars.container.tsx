import SearchBarsUI from "./SearchBars.presenter";
import _ from "lodash";

export default function SearchBars(props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.onChangeKeyword(data);
  }, 200);
  function onChangeSearchBar(event) {
    getDebounce(event.target.value);
  }
  return <SearchBarsUI onChangeSearchBar={onChangeSearchBar} />;
}
