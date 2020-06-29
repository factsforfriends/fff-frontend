import React, { useState } from "react";
import Head from 'next/head'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  const imageDimension = "180px";
  return (
    <Layout>
        <Head>
          <title>Facts for Friends</title>
        </Head>
        <Navbar/>
        <div className="flex justify-center">
          <div className="max-w-screen-sm p-4">
            <h1 className="text-2xl font-semibold py-4">Über Uns</h1>
            <p>Facts for Friends hat das Ziel, eine zentrale und niedrigschwellige Anlaufstelle zu sein, um kursierende Inhalte auf ihren Hintergrund und Wahrheitsgehalt hin zu prüfen und gegebenenfalls Richtigstellungen im eigenen Umfeld zu verbreiten.	
<br></br><br></br>
Die Vision ist eine benutzerfreundliche Plattform mit einer hohen Reichweite, die unmittelbar und agil auf aufkommende und kursierende Fake News reagieren und diesen mit FactSnacks entgegentreten kann. Die Idee wurde ursprünglich im Rahmen des #WirVsVirus Hackathons der Bundesregierung entwickelt und umgesetzt. Wir wurden im Anschluss in den #WirVsVirus Solution Enabler aufgenommen, durch den wir für sechs Monate u.a. mit wertvollen Kontakten unterstützt werden. Gefördert werden wir derzeit von dem Bundesministerium für Bildung und Forschung durch den Prototype Fund. Aktuell sind wir ein Team von neun Leuten, bestehend aus Entwickler:innen, Journalist:innen und Gründer:innen. 
</p>

            <div className="grid gap-8 grid-cols-3 text-sm py-16">
              <a href="/about/katharina" className="flex flex-col items-center cursor-pointer">
                <img src="https://cms.factsforfriends.de/uploads/about_katharina_300x300_4b0a95006d.png" height={imageDimension} width={imageDimension} className="border"></img>
                <b>Katharina Klimkeit</b>
                <i>Geschäftsführung</i>
              </a>
              <a href="/about/erik" className="flex flex-col items-center">
                <img src="https://cms.factsforfriends.de/uploads/about_erik_300x300_6f38002e8c.png" height={imageDimension} width={imageDimension} className="border"></img>
                <b>Erik Langenhan</b>
                <i>Platform Development</i>
              </a>
              <a href="/about/jens" className="flex flex-col items-center">
                <img src="https://cms.factsforfriends.de/uploads/Francisco_Kiss_edited_Kopie_dc78d0aa26.png" height={imageDimension} width={imageDimension} className="border"></img>
                <b>Jens Preußner</b>
                <i>Platform Development</i>
              </a>
              <a href="/about/francisco" className="flex flex-col items-center">
                <img src="https://cms.factsforfriends.de/uploads/about_francisco_300x300_b5eadc262e.png" height={imageDimension} width={imageDimension} className="border"></img>
                <b>Francisco Kiss</b>
                <i className="text-center">Projektmanagement & <br /> UX Design</i>
              </a>
              <a href="/about/martine" className="flex flex-col items-center">
                <img src="https://cms.factsforfriends.de/uploads/about_martine_300x300_9ca3748d6f.png" height={imageDimension} width={imageDimension} className="border"></img>
                <b>Martine Iversen</b>
                <i>Grafik- & UX Design</i>
              </a>
              <a href="/about/valerie" className="flex flex-col items-center">
                <img src="https://cms.factsforfriends.de/uploads/about_valerie_300x300_cfe92bb44b.png" height={imageDimension} width={imageDimension} className="border"></img>
                <b>Valerie Scholz</b>
                <i>Marketing & PR</i>
              </a>
              <a href="/about/selina" className="flex flex-col items-center">
                <img src="https://cms.factsforfriends.de/uploads/about_selina_300x300_bb5ffa7a4b.png" height={imageDimension} width={imageDimension} className="border"></img>
                <b>Selina Rudolph</b>
                <i>Redaktion & Content</i>
              </a>
              <a href="/about/kathy" className="flex flex-col items-center">
                <img src="https://cms.factsforfriends.de/uploads/about_kathy_300x300_66c3a481f2.png" height={imageDimension} width={imageDimension} className="border"></img>
                <b>Anna-Katharina Meßmer</b>
                <i>Beratung & Strategie</i>
              </a>
              <a href="/about/lisa" className="flex flex-col items-center">
                <img height={imageDimension} width={imageDimension} className="border"></img>
                <b>Lisa Merten</b>
                <i>Beratung & Strategie</i>
              </a>
            </div>
            

            <div className="pb-16">
              <h2 className="text-semibold text-2xl py-8">Wir werden unterstützt von:</h2>
              <div className="grid gap-8 grid-cols-3 items-center">
                <img src="https://cms.factsforfriends.de/uploads/BMBF_logo_a848b6c17a.png" height={imageDimension} width={imageDimension}></img>
                <img src="https://cms.factsforfriends.de/uploads/wir_vs_virus_logo_3af1be57bc.png" height={imageDimension} width={imageDimension}></img>
                <img src="https://cms.factsforfriends.de/uploads/google_logo_4a43faf741.png" height={imageDimension} width={imageDimension}></img>
                <img src="https://cms.factsforfriends.de/uploads/prototype_fund_logo_d8f61f7993.jpeg" height={imageDimension} width={imageDimension}></img>
                <img src="https://cms.factsforfriends.de/uploads/project_together_logo_e993484015.png" height={imageDimension} width={imageDimension}></img>
                <img src="https://cms.factsforfriends.de/uploads/bcg_logo_7f41217c6e.png" height={imageDimension} width={imageDimension}></img>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
  
export default AboutUs;