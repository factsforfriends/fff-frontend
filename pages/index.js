import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import some from "lodash/some";

import { DATA_URL } from "../constants/urls";

import Layout from '../components/Layout';
import SnackList from "../components/SnackList";
import SearchForm from "../components/SearchForm";

const Index = ({ snacks }) => {

  // Handle search
  const [searchTerm, setSearchTerm] = useState("");
  

  // Get categories with available Snacks
  const categoriesWithSnacks = [];
  snacks.map(snack => {
    if (!some(categoriesWithSnacks, ["Category", snack.Category])) {
      categoriesWithSnacks.push(snack);
    }
  });

  return(
    <>
      <Layout>
        <SearchForm 
          searchTerm={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <SnackList
          snacks={snacks}
          searchTerm={searchTerm}
        />
      </Layout>
    </>
  );
}

Index.getInitialProps = async function() {
  const fetchSnacks = await fetch(DATA_URL);
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};

export default Index;