import React, { useState } from "react";
import Head from 'next/head'
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';

const AboutUs = () => {
  const imageDimension = "300px";

  return (
    <Layout>
        <Head>
          <title>Facts for Friends</title>
        </Head>
        <Navbar/>
        <div className="flex justify-center mt-16">
            <div className="max-w-screen-lg">
                <div className="flex flex-row p-4">
                    <div className="flex flex-1 flex-col items-center justify-center p-4">
                        <img src="https://cms.factsforfriends.de/uploads/about_katharina_300x300_4b0a95006d.png" height={imageDimension} width={imageDimension} className="border"></img>
                        <b className="pt-2">Katharina Klimkeit</b>
                        <i>Geschäftsführung</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>
                        Als Geschäftsführerin und Projektmanagerin leitet Katharina das Team von Facts for Friends. Sie hält das Team auf Trab, kümmert sich um Organisation, Kommunikation, Marketing und die Finanzen.
                        <br /><br />
                        Schon in jungen Jahren hatte Katharina ein ausgeprägtes Interesse an Entrepreneurship und Gründungen. Mit 18 gründete sie ihr erstes eigenes Start-Up. Doch dabei sollte es nicht bleiben. Nach ihrem B.Sc. in Betriebswirtschaftslehre spezialisierte sie sich weiter auf diesem Gebiet und absolvierte einen M.Sc. in Entrepreneurship und Innovationsmanagement. Seitdem sammelte sie viele Erfahrungen in Start-Ups und der Beratung. Zusätzlich engagiert sie sich im Bereich Female Entrepreneurship und Leadership. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;