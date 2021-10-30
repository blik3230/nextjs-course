import { useRouter } from "next/router";
import { withGeneralLayout } from "../layouts";

const SearchPage = (): JSX.Element => {
  const router = useRouter();
  const searchString = router.query.q;

  return <>
    this is a search string!
    <p>{ searchString }</p>
  </>;
};

export default withGeneralLayout(SearchPage);
