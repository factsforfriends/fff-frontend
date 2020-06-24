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
                        <img height={imageDimension} width={imageDimension} className="border"></img>
                        <b>Lisa Merten</b>
                        <i>Beratung & Strategie</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>
                        Lisa hat, gemeinsam mit Kathy, das Projekt Facts for Friends ins Leben gerufen. Die beiden hatten die Grundidee für die Plattform und schrieben das erste Proposal. Heute übernimmt Lisa im Team von Facts for Friends hauptsächlich eine beratende Rolle in den Bereichen Funding, Strategie und Content. 
<br></br><br></br>
Hauptberuflich ist Lisa wissenschaftliche Mitarbeiterin am Leibniz-Institut für Medienforschung (Hans-Bredow-Institut) in Hamburg. Sie forscht dort zur Nutzung und Wirkung digitaler Medienangebote und wird in diesem Jahr ihre Promotion zu Nachrichtennutzung auf sozialen Medien abschließen. Zuvor hat sie in Leipzig, Dresden, Amsterdam und Boston Kommunikationswissenschaft studiert und war in der Marktforschung tätig. Lisa beschäftigt sich damit, wie man mit Methoden aus der Informatik digitale Informationssuche und -Nutzung besser messen und in Kontext zu gesellschaftlichen Entwicklungen setzen kann. 
</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;