import * as A from "./MarketCart.styles";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPropsCartUI } from "./MarketCart.types";
import { onError } from "../../../../commons/libraries/utils";

export default function CartUI(props: IPropsCartUI) {
  return (
    <>
      <A.Wrapper>
        <A.Title>장바구니</A.Title>
        {props.items.length === 0 && (
          <A.NoItemWrapper>
            <A.NoItem>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                color="#dddddd"
                style={{ fontSize: "20px", marginBottom: "5px" }}
              />
              아직 담긴 상품이 없습니다.
            </A.NoItem>
            <A.ShopBtn onClick={props.onClickItems}>상품담으러 가기</A.ShopBtn>
          </A.NoItemWrapper>
        )}
        {props.items?.map((el: any) => (
          <A.Container key={el} el={el} items={props.items}>
            <A.ImgWrapper>
              <A.Img
                onError={onError}
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            </A.ImgWrapper>
            <A.ItemWrapper>
              <A.ItemDetails>
                {el.name}
                <A.Price>{el.price.toLocaleString()}원</A.Price>
              </A.ItemDetails>
              <A.Options>
                <A.Option onClick={props.onClickViewItem} id={el._id}>
                  상세보기
                </A.Option>
                <A.Bar />
                <A.Option onClick={props.onClickBuyItem} id={el._id}>
                  바로구매
                </A.Option>
              </A.Options>
            </A.ItemWrapper>
            <A.DeleteWrapper>
              <A.DeleteBtn onClick={props.onClickDelete} id={el._id}>
                ✕
              </A.DeleteBtn>
            </A.DeleteWrapper>
          </A.Container>
        ))}

        <A.CountWrapper>
          총<A.Count>{props.items.length}</A.Count>
          개의 아이템
        </A.CountWrapper>
      </A.Wrapper>
    </>
  );
}
