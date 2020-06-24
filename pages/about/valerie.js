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
                        <img src="https://cms.factsforfriends.de/uploads/about_valerie_300x300_cfe92bb44b.png" height={imageDimension} width={imageDimension} className="border"></img>
                        <b>Valerie Scholz</b>
                        <i>Marketing & PR</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>
                        Als Spezialistin für Social Media und Marketing kümmert sich Valerie im Team von Facts for Friends um Social-Media-Kanäle, Blogposts und Website-Texte, immer mit dem Ziel die Marke Facts for Friends bekannter zu machen.
 <br></br><br></br>
Valerie hat Ihre Leidenschaft für den kreativen Umgang mit Worten und das Erzählen von Geschichten zum Beruf gemacht. Nach einem B.A. der Kulturwissenschaften und Digitalen Medien arbeitete sie in verschiedenen Hamburger Design- und Media-Agenturen als Account Managerin, kreative Strategin und Texterin. Im Anschluss absolvierte sie einen Journalismus M.A., in dem sie ihre Kenntnisse im Bereich von multimedialem Storytelling weiter ausbauen konnte. Seit 2019 arbeitet sie freiberuflich in den Bereichen Text, Content Kreation und Social Media. 
</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;