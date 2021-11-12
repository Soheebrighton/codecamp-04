import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateProductArgs,
} from "../../src/commons/types/generated/types";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProductPage() {
  const router = useRouter();

  const [createProduct] = useMutation<
    Pick<IMutation, "createProduct">,
    IMutationCreateProductArgs
  >(CREATE_PRODUCT);
  // IMutation 받는데이터 , 콤마뒤 인풋데이터
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  function onChangeSeller(event) {
    setSeller(event.target.value);
  }

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeDetail(event) {
    setDetail(event.target.value);
  }

  function onChangePrice(event) {
    setPrice(event.target.value);
    console.log(price);
  }
  // seller: seller, 키값과 value 동일하면 하나는 생략가능 seller,
  async function zzz() {
    try {
      const result = await createProduct({
        variables: {
          seller: "철수",
          createProductInput: {},
        },
      });
      console.log(result);
      result.data?.createProduct?._id;
      // router.push("/05-08-dynamic-product-read/" + result.data.createProduct._id);
      router.push(
        `/05-08-dynamic-product-read/${result.data?.createProduct?._id}`
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} /> <br />
      상품명: <input type="text" onChange={onChangeName} /> <br />
      상품내용: <input type="text" onChange={onChangeDetail} /> <br />
      상품가격: <input type="text" onChange={onChangePrice} /> <br />
      <button onClick={zzz}>상품 등록하기</button>
    </>
  );
}
