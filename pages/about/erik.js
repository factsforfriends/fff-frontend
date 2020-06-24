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
                        <img src="https://cms.factsforfriends.de/uploads/about_erik_300x300_6f38002e8c.png" height={imageDimension} width={imageDimension} className="border"></img>
                        <b className="pt-2">Erik Langenhan</b>
                        <i>Platform Development</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>
                        Gemeinsam mit seinem Kollegen Jens ist Erik bei Facts for Friends der Spezialist für Platform Development. Sein Job ist, kreative Lösungen für den Aufbau und die Funktionalität der WebApp zu finden.  
 <br></br><br></br>
Nach seinem B.Sc. der Wirtschaftsinformatik an der TU Ilmenau spezialisierte er sich weiter und begann einen M.Sc. in IT Systems Engineering. Neben seinem Studium arbeitet Erik als IT-Spezialist bei IBM. Seine berufliches Interessen liegt insbesondere in den Bereichen IT Infrastructure, Distributed Systems und IT Security.

</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;