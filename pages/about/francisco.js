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
                        <img src="https://cms.factsforfriends.de/uploads/about_francisco_300x300_b5eadc262e.png" height={imageDimension} width={imageDimension} className="border"></img>
                        <b className="pt-2">Francisco Kiss</b>
                        <i>Projektmanagement & UX Design</i>
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <p>Als UX- und UI-Designer arbeitet Francisco an der Schnittstelle zwischen User:innen und Maschine. Er findet kreative Lösungen, um die Plattform Facts for Friends für den Nutzer zu optimieren und intuitiv bedienbar zu machen. Zusätzlich unterstützt Francisco im Projektmanagement alle betriebsrelevanten Prozesse. 
 <br></br><br></br>
 Francisco absolvierte einen B.Sc. und einen M.Sc. im Bereich Elektro- und Informationstechnik. Zurzeit promoviert er an der Uni Stuttgart, wobei er sich auf das Thema Human-Computer-Interaction spezialisiert hat. Die Freude am Lernen und Kreieren inspiriert Francisco. Sein berufliches Interesse gilt der Entwicklung von interaktiven Technologien, die konkrete Verbesserungen zur Lebensqualität von Menschen bringen. 
 </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;