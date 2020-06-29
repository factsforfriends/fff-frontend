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
                        <img src="https://cms.factsforfriends.de/uploads/Francisco_Kiss_edited_Kopie_dc78d0aa26.png" height={imageDimension} width={imageDimension} className="border"></img>
                        <b className="pt-2">Jens Preußner</b>
                        <i>Platform Development</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>Jens arbeitet im Team mit Erik und ist bei Facts for Friends verantwortlich für das Platform Development. Beide sind stets bemüht, die Erscheinung und Funktionalität der WebApp zu optimieren, um die User:innen zu begeistern. 
 <br></br><br></br>
 Nach seinem B.Sc. und M.Sc. in Bioinformatik steht Jens nun kurz vor der Promotion zum Dr. rer. nat. Hauptberuflich arbeitet Jens als Computational Biologist im Max-Planck-Institut für Herz- und Lungenforschung. Seine beruflichen Interessen liegen in der Krebsforschung, Data Science, wissenschaftlicher Recheninfrastruktur und dem verteilten Rechnen. Außerhalb seines Berufes interessiert sich Jens für Nachhaltigkeit und ökologische Projekte.
 </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;