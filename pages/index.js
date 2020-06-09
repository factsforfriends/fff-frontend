import React, { useState } from "react";
import Head from 'next/head'
import fetch from "isomorphic-unfetch";

import { DATA_URL } from "../constants/urls";

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SnackList from "../components/SnackList";
import SearchForm from "../components/SearchForm";

const Index = ({ snacks }) => {
  // Handle search
  const [searchTerm, setSearchTerm] = useState("");

  return(
    <>
      <Layout>
        <Head>
          <title>Facts for Friends</title>
        </Head>
        <Navbar/>
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
  // const fetchSnacks = await fetch(DATA_URL);
  // const snacks = await fetchSnacks.json();

  const snacksRaw = await fetch("https://cms.edc.li/facts");
  const snacks = await snacksRaw.json();

  return {
    snacks
  };
};

export default Index;