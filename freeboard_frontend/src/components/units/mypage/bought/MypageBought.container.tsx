import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import MypageBoughtUI from "./MypageBought.presenter";
import {
  FETCH_USEDITEMS_I_BOUGHT,
  FETCH_USER_LOGGED_IN,
} from "./MypageBought.queries";

export default function MypageBought() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USEDITEMS_I_BOUGHT);

  const { data: dataForUser } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickViewDetail = (el: any) => () => {
    router.push(`/market/${el._id}`);
  };

  return (
    <MypageBoughtUI
      data={data}
      dataForUser={dataForUser}
      onClickViewDetail={onClickViewDetail}
    />
  );
}
