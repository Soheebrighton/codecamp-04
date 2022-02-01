import * as A from "./MypagePicked.styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onError } from "../../../../commons/libraries/utils";
import MypageSide from "../side/MypageSide.container";
import { IQuery } from "../../../../commons/types/generated/types";

interface IPropsPickedUI {
  dataForPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
  onClickUnpick: (el: any) => () => Promise<void>;
  onClickViewItem: (el: any) => () => void;
}

export default function MypagePickedUI(props: IPropsPickedUI) {
  return (
    <>
      <A.Background>
        <A.Wrapper>
          <MypageSide />
          <A.WrapperRight>
            <A.TransTitle>내가 찜한 상품</A.TransTitle>
            <A.Container>
              {props.dataForPicked?.fetchUseditemsIPicked.map((el: any) => (
                <A.ItemDiv key={el._id}>
                  <A.ItemPhoto>
                    <A.Img
                      onClick={props.onClickViewItem(el)}
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={onError}
                    />
                  </A.ItemPhoto>
                  <A.PickWrapper onClick={props.onClickUnpick(el)}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#1dbc67"
                      style={{ fontSize: "15px", textAlign: "center" }}
                    />
                  </A.PickWrapper>
                  <A.ItemDetails>
                    <A.Title onClick={props.onClickViewItem(el)}>
                      {el.name}
                    </A.Title>
                    <A.PriceAndPicked>
                      <A.Price>
                        {Number(el.price).toLocaleString()}
                        <span style={{ fontSize: "15px", paddingLeft: "2px" }}>
                          원
                        </span>
                      </A.Price>
                      <A.Picked>{el.pickedCount} 찜</A.Picked>
                    </A.PriceAndPicked>
                  </A.ItemDetails>
                </A.ItemDiv>
              ))}
            </A.Container>
          </A.WrapperRight>
        </A.Wrapper>
      </A.Background>
    </>
  );
}
