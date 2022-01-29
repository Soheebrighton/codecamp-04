import MarketCreateUI from "./MarketCreate.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM,
  FETCH_USEDITEM,
  UPDATE_USEDITEM,
} from "./MarketCreate.queries";
import { useRouter } from "next/router";
import { useEffect, useState, useContext, ChangeEvent } from "react";
import { Context } from "../../../../../pages/market/[myId]/edit/index";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FormValues } from "./MarketCreate.types";
import { schema, schemaForEdit } from "./MarketCreate.validation";

export default function MarketCreate() {
  const router = useRouter();

  const [address, setAddress] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  const UseditemAddressInputs = {
    address: address,
    zipcode: zipcode,
    addressDetail: addressDetail,
    lat: lat,
    lng: lng,
  };

  const { isEdit } = useContext(Context);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  const { data: dataForFetch } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.myId) },
  });

  const { handleSubmit, register, formState, setValue, trigger, getValues } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(isEdit ? schemaForEdit : schema),
      defaultValues: {
        name: dataForFetch?.fetchUseditem.name,
        remarks: dataForFetch?.fetchUseditem.remarks,
        price: dataForFetch?.fetchUseditem.price,
      },
    });

  function handleChangeQuill(value: String) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }

  const onClickSubmit = async (data: FormValues) => {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          ...data,
          tags: tags,
          images: fileUrls,
          useditemAddress: {
            ...UseditemAddressInputs,
          },
        },
      },
    });
    router.push(`/market/${result.data?.createUseditem._id}`);
  };

  const onClickEdit = async (data: FormValues) => {
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            tags: tags,
            images: fileUrls,
            useditemAddress: {
              ...UseditemAddressInputs,
            },
          },
          useditemId: String(router.query.myId),
        },
      });
    } catch (error) {
      alert(error.message);
    }
    router.push(`/market/${router.query.myId}`);
  };

  useEffect(() => {
    if (dataForFetch?.fetchUseditem.images?.length) {
      setFileUrls([...dataForFetch?.fetchUseditem.images]);
    }
  }, [dataForFetch]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onChangeOptionalAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  return (
    <MarketCreateUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      dataForFetch={dataForFetch}
      onClickEdit={onClickEdit}
      handleChangeQuill={handleChangeQuill}
      tags={tags}
      setTags={setTags}
      handleComplete={handleComplete}
      onChangeOptionalAddress={onChangeOptionalAddress}
      address={address}
      zipcode={zipcode}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      lat={lat}
      lng={lng}
      setLat={setLat}
      setLng={setLng}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      getValues={getValues}
    />
  );
}
