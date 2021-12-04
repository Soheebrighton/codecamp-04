import { useRouter } from "next/router";
export function UseMoveToPage() {
  const router = useRouter();
  const moveToPage = (page) => () => {
    router.push(page);
  };

  return { moveToPage };
}
