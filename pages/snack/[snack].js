import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import find from "lodash/find";
import toInteger from "lodash/toInteger";

import { DATA_URL } from "../../constants/urls";

import Layout from '../../components/Layout';
import Snack from "../../components/Snack";
import SnackList from "../../components/SnackList";

const SnackView = ({ snacks }) => {
  const router = useRouter();
  const { snack } = router.query;

  const requestedSnack = find(snacks, ["ID", toInteger(snack)]);

  return(
    <>
      <Layout>
      <div className="flex flex-wrap justify-center -mx-1 mt-2 overflow-hidden text-justify font-sans">
        <Snack
            snack={requestedSnack}
            fullWidth={true}
        />
      </div>
      <div className="flex flex-wrap justify-center max-w-2xl">
        <h4 className="font-semibold text-lg mb-2 mt-2 text-left tracking-wide">Ähnliche Snacks</h4>
      </div>
      </Layout>
    </>
  );
};

SnackView.getInitialProps = async function() {
  const fetchSnacks = await fetch(DATA_URL);
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};

export default SnackView;
