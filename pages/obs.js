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
          foto="/obs-studio.png"
          titulo="OBS (Open Broadcaster Software) "
          descripcion={
            <text>
              OBS es un programa de código abierto que se utiliza para grabar y
              transmitir video en directo.
              <br /> Se considera una herramienta valiosa para cualquier persona
              que desee grabar o transmitir contenido en directo de alta
              calidad, ya sea para juegos, música, eventos en vivo o cualquier
              otra cosa. <br />
              <br />
              OBS ofrece una interfaz de usuario intuitiva que permite a los
              usuarios configurar y personalizar fácilmente sus grabaciones y
              transmisiones. Además, incluye una amplia gama de funcionalidades,
              como la capacidad de mezclar audio y video de diferentes fuentes,
              agregar efectos y filtros en tiempo real, y transmitir a
              diferentes plataformas de streaming al mismo tiempo. <br />
              OBS es compatible con una gran cantidad de dispositivos de entrada
              y salida, incluyendo cámaras web, micrófonos, capturadoras de
              video y más. También es compatible con una amplia variedad de
              plataformas de streaming, como YouTube, Twitch y Facebook Live.
              <br />
              <br /> En resumen, OBS es una herramienta de grabación y
              transmisión en directo versátil y potente que ofrece una gran
              cantidad de funcionalidades y es compatible con una amplia gama de
              dispositivos y plataformas.
            </text>
          }
        />

        <Footer />
      </div>
    </div>
  );
}
