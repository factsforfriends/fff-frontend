import fetch from "isomorphic-unfetch";

import { DATA_URL } from "../constants/urls";

import Layout from '../components/Layout'
import SnackList from "../components/SnackList";
import SearchForm from "../components/SearchForm";

const Index = ({ snacks }) => (
  <Layout>
    <SearchForm />
    <SnackList
      snacks={snacks}
    />
  </Layout>
)

Index.getInitialProps = async function() {
  const fetchSnacks = await fetch(DATA_URL);
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};

export default Index;