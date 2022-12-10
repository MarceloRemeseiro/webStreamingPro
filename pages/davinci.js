import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AddsLaterales from "../components/adds/add";
import Image from "next/image";
import React, { useEffect } from "react";
import { Client } from "@notionhq/client";
import TarjetaDerecha from "../components/tarjetas/tarjetaDerecha";

export default function Obs() {
  return (
    <div>
      <Navbar />
      <div className="m-20"></div>
      <div>
        <Header />

        <TarjetaDerecha
          foto="/davinci.webp"
          titulo="Davinci Resolve"
          descripcion={
            <text>
              Davinci Resolve es una aplicación de edición de vídeo y
              post-producción desarrollada por Blackmagic Design. <br />
              Esta empresa es conocida por sus soluciones de alta calidad para
              la industria audiovisual, y Davinci Resolve es una de sus
              principales aplicaciones.
              <br />
              La aplicación está disponible para Windows, Mac y Linux, y ofrece
              una amplia gama de herramientas y funcionalidades para ayudar a
              los usuarios a producir vídeos de alta calidad. Resolve incluyen:{" "}
              <br />
              <br /> Algunas de las principales características de Davinci
              Resolve incluyen: <br />
              <br />
              ✔Edición de audio y vídeo: Davinci Resolve incluye una serie de
              herramientas para editar audio y vídeo, como cortar y pegar,
              añadir transiciones y efectos, ajustar el nivel de audio, etc.
              <br />
              <br />
              ✔Corrección de color: Davinci Resolve también ofrece una potente
              herramienta de corrección de color, que permite a los usuarios
              ajustar el color y la luminosidad de sus vídeos de manera precisa
              y detallada. <br />
              <br />
              ✔Composición: Davinci Resolve incluye herramientas para la
              composición de vídeo, lo que permite a los usuarios superponer
              diferentes capas de vídeo y añadir efectos visuales y gráficos en
              tiempo real. <br />
              <br />
              ✔Efectos visuales: Davinci Resolve también ofrece una amplia gama
              de efectos visuales, que permiten a los usuarios añadir diferentes
              efectos a sus vídeos, como desenfoques, distorsión, reflejos, etc.
              <br />
              <br />
              ✔Trabajo en equipo: Davinci Resolve permite a los usuarios
              trabajar en equipo en proyectos de vídeo colaborativos, lo que les
              permite compartir su trabajo con otros miembros del equipo
            </text>
          }
        />

        <Footer />
      </div>
    </div>
  );
}
