import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AddsLaterales from "../components/adds/add";
import Image from "next/image";
import React, { useEffect } from "react";
import { Client } from "@notionhq/client";

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const respuesta = await notion.databases.query({
    database_id: "6daa868ae1a54f85b54f32743afa02b4",
    filter: {
      property: "web",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "publicacion",
        direction: "descending",
      },
    ],
  });

  return {
    props: {
      dataYoutube: respuesta.results,
    },
  };
}

export default function Youtube({ dataYoutube }) {
  useEffect(() => {
    console.log(dataYoutube);
  });
  return (
    <div>
      <Navbar />
      <div className="m-20"></div>
      <div>
        <Header />
      </div>
      <div className="container md:flex justify-center items-center gap-10">
        <div className="container py-5">
          <div className="pb-5">
            <h1 className="text-center md:text-6xl text-3xl">Ultimo video</h1>
          </div>
          <a
            href={dataYoutube[0].properties.link.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width="1920px"
              height="1080px"
              layout="responsive"
              src={dataYoutube[0].properties.miniatura.files[0].file.url}
              alt="Ultimo video"
            />
          </a>

          <h2 className="text-4xl m-2">
            {dataYoutube[0].properties.titulo.title[0].plain_text}
          </h2>
          <p className="m-2">
            {dataYoutube[0].properties.descripcion.rich_text[0].plain_text}
          </p>
          <div>
            <h1 className="text-center md:text-5xl text-2xl m-12">
              Ultimos videos
            </h1>
          </div>
          <div className="grid overflow-hidden md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 md:gap-5 gap-y-5  ">
            {dataYoutube.slice(1, 5).map((datos, index) => (
              <div key={index} className="box">
                <a
                  href={datos.properties.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width="1920px"
                    height="1080px"
                    layout="responsive"
                    src={datos.properties.miniatura.files[0].file.url}
                    alt="Ultimos videos"
                  />
                </a>
                <h2 className="text-xl m-2">
                  {datos.properties.titulo.title[0].plain_text}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
