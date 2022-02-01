import * as A from "./MypageBought.styles";
import { getDate, onError } from "../../../../commons/libraries/utils";
import MypageSide from "../side/MypageSide.container";
import { IQuery } from "../../../../commons/types/generated/types";

interface IPropsBoughtUI {
  data?: Pick<IQuery, "fetchUseditemsIBought">;
  dataForUser?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickViewDetail: (el: any) => () => void;
}

export default function MypageBoughtUI(props: IPropsBoughtUI) {
  return (
    <A.Background>
      <A.Wrapper>
        <MypageSide />
        <A.WrapperRight>
          <A.TransTitle>나의 구매목록</A.TransTitle>
          <A.Container>
            <A.RowHeader>
              <A.SoldAt>
                <A.HeaderTxt>구매일</A.HeaderTxt>
              </A.SoldAt>
              <A.DetailWrapper>
                <A.HeaderTxt>상품정보</A.HeaderTxt>
              </A.DetailWrapper>
              <A.Seller>
                <A.HeaderTxt>판매자</A.HeaderTxt>
              </A.Seller>
              <A.Status>
                <A.HeaderTxt>진행상태</A.HeaderTxt>
              </A.Status>
            </A.RowHeader>
            {props.data?.fetchUseditemsIBought.map((el: any) => (
              <A.Row key={el}>
                <A.SoldAt>{getDate(el.soldAt)}</A.SoldAt>
                <A.DetailWrapper>
                  <A.ImgWrapper onClick={props.onClickViewDetail(el)}>
                    <A.Img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={onError}
                    />
                  </A.ImgWrapper>
                  <A.Details onClick={props.onClickViewDetail(el)}>
                    <A.ItemName>
                      {el.name === "" ? "상품명 없음" : el.name}
                    </A.ItemName>
                    <A.Price>{el.price.toLocaleString()}</A.Price>
                  </A.Details>
                </A.DetailWrapper>
                <A.Seller>{el.seller?.name}</A.Seller>
                <A.Status>구매완료</A.Status>
              </A.Row>
            ))}
          </A.Container>
        </A.WrapperRight>
      </A.Wrapper>
    </A.Background>
  );
}
