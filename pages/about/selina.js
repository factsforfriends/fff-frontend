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
                        <img src="https://cms.factsforfriends.de/uploads/about_selina_300x300_bb5ffa7a4b.png" height={imageDimension} width={imageDimension} className="border"></img>
                        <b>Selina Rudolph</b>
                        <i>Redaktion & Content</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>
                        Als Hauptverantwortliche für das Thema Content im Team von Facts for Friends schreibt, redigiert und publiziert Selina FactSnacks für die WebApp.
 <br></br><br></br>
 Als Grundausbildung absolvierte Selina einen B.A. in Politikwissenschaften an der Uni Göttingen. Als angehende Journalistin beschäftigt sie sich auch in ihrem Masterstudium an der Johannes Gutenberg-Universität Mainz regelmäßig mit der Bekämpfung von Falschinformationen. Beruflich interessiert sich Selina insbesondere für das Thema Datenjournalismus.</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;