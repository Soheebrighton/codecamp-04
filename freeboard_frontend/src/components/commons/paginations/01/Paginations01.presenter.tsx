import * as A from "./Paginations01.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Paginations01UI() {
  return (
    <A.Pages>
      <A.PrevPage onClick={props.onClickPagePrev}>
        {" "}
        <FontAwesomeIcon icon={faAngleLeft} color="#0dc56c" />
      </A.PrevPage>
      <A.PageNums onClick={props.onClickPage}>
        {" "}
        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <A.PageNum
                key={props.startPage + index}
                onClick={props.onClickPage}
                id={String(props.startPage + index)}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {props.startPage + index}
              </A.PageNum>
            )
        )}{" "}
      </A.PageNums>
      <A.NextPage onClick={props.onClickPageNext}>
        {" "}
        <span>
          {" "}
          <FontAwesomeIcon icon={faAngleRight} color="#0dc56c" />
        </span>
      </A.NextPage>
    </A.Pages>
  );
}
