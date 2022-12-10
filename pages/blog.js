import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AddsLaterales from "../components/adds/add";
import Articulos from "../components/atriculos/articulos";
import React, { useEffect } from "react";
import { Client } from "@notionhq/client";

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const respuesta = await notion.databases.query({
    database_id: "f86d8e23075e4e26ac2a737f339cb2aa",
    filter: {
      property: "web",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "order",
        direction: "descending",
      },
    ],
  });

  return {
    props: {
      dataHardware: respuesta.results,
    },
  };
}
export default function Blog(dataHardware) {
  return (
    <div>
      <Navbar />
      <div className="m-20"></div>
      <div>
        <Header />
      </div>
      <div className="container mt-10">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-white dark:text-gray-50">
            Mis equipos preferidos{" "}
          </h1>
          <p className="text-base leading-normal text-center text-white dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            En esta seccion, encontrarás una lista de los equipos que utilizamos
            personalmente en nuestras emisiones. Hemos probado y comprobado que
            son de gran utilidad y calidad, y nos han ayudado a mejorar la
            calidad y eficiencia de nuestras emisiones. Compartimos esta
            información con el fin de ayudarte a encontrar equipos confiables
            para tus propias emisiones, como el Streamdeck, el microfonoShure
            SM7B, equipos de la marca elgato y el Rode Caster Pro. ¡Somos una
            fuente confiable de consejos y recomendaciones para mejorar tus
            habilidades de streaming!
          </p>
        </div>
        <Articulos data={dataHardware} />
      </div>

      <Footer />
    </div>
  );
}
