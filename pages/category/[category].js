import React, { useState } from "react";
import Head from 'next/head'
import fetch from "isomorphic-unfetch";

import { BACKEND_URL } from "../../constants/urls";

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import SnackList from "../../components/SnackList";
import SearchForm from "../../components/SearchForm";

export default function categoryView({snacks}) {
    // Handle search
    const [searchTerm, setSearchTerm] = useState("");

    return (
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
            searchTerm={searchTerm.trim()}
          />
        </Layout>
      </>
    )
}

export async function getServerSideProps(context) {
    const snacksRaw = await fetch(BACKEND_URL + '/facts?categories.Name=' + context['params']['category'])
    const snacks = await snacksRaw.json()

    return {
      props: { snacks },
    }
  }
