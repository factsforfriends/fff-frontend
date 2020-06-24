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
                        <img src="https://cms.factsforfriends.de/uploads/about_martine_300x300_9ca3748d6f.png" height={imageDimension} width={imageDimension} className="border"></img>
                        <b>Martine Iversen</b>
                        <i>Grafik- & UX Design</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>
                        Als Multimedien-, Grafik- und UX-Designerin ist Martine im Team von Facts for Friends für die kreative Gestaltung und Umsetzung aller grafischen Elemente zuständig. Sie designt Logos und Banner, kümmert sich um Bildbearbeitung und Interface Design. 
 <br></br><br></br>
 Martine hat kürzlich ihre Ausbildung im Fach Multimediendesign an der Business Academy in Aarhus beendet. Im Sommer 2020 beginnt sie ein B.A. Studium im Bereich Digitale Konzeptentwicklung. Sie brennt für kreative Aufgaben und alles rund um das Thema Design. 
 </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;