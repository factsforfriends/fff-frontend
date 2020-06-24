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
                        <img src="https://cms.factsforfriends.de/uploads/about_kathy_300x300_66c3a481f2.png" height={imageDimension} width={imageDimension} className="border"></img>
                        <b>Anna-Katharina Meßmer</b>
                        <i>Beratung & Strategie</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>
                        Kathy war, zusammen mit Lisa, die Initiatorin des Projektes Facts for Friends. Sie arbeiteten die erste Idee aus und schrieben das erste Proposal. Heute übernimmt Kathy im Team von Facts for Friends hauptsächlich eine beratende Rolle in den Bereichen Funding, Strategie und Content. 
 <br></br><br></br>
Hauptberuflich arbeitet die promovierte Soziologin als Projektleiterin für digitale Nachrichten- und Informationskompetenz bei der Stiftung Neue Verantwortung in Berlin. Nebenbei forscht sie zu politisch-gesellschaftlichen Fragestellungen, spricht regelmäßig auf Konferenzen oder Podien und publiziert zu gesellschaftspolitischen Themen, Meinungsforschung, Digitalisierung, Politik, Social Media, Biopolitik und Feminismus. Kathy ist zudem Mit-Initiatorin von #aufschrei, dem ersten Hashtag, der 2013 mit dem Grimme-Online-Award ausgezeichnet wurde.</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;