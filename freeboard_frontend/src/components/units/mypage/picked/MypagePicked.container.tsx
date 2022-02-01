import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_USEDITEMS_I_PICKED,
  TOGGLE_USEDITEM_PICK,
} from "./MypagePicked.queries";
import { useRouter } from "next/router";
import MypagePickedUI from "./MypagePicked.presenter";
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

export default function MypagePicked() {
  const router = useRouter();

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const { data: dataForPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  const onClickUnpick = (el: any) => async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: el._id },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS_I_PICKED,
            variables: {
              search: "",
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickViewItem = (el: any) => () => {
    router.push(`/market/${el._id}`);
  };

  return (
    <MypagePickedUI
      dataForPicked={dataForPicked}
      onClickUnpick={onClickUnpick}
      onClickViewItem={onClickViewItem}
    />
  );
}
