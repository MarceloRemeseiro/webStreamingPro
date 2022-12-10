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
          foto="/companion.png"
          titulo="Bitfocus Companion"
          descripcion={
            <text>
              Bitfocus Companion es un software de control de stream que permite
              a los usuarios controlar y personalizar sus flujos de trabajo de
              grabación y transmisión en vivo de manera más eficiente.
              <br />
              Es compatible con una amplia gama de programas de grabación y
              transmisión en vivo, como OBS y vMix, y permite a los usuarios
              configurar atajos de teclado y controles físicos personalizados
              para facilitar el acceso a las diferentes funcionalidades de estos
              programas. Esto hace que sea más fácil y rápido realizar tareas
              comunes, como cambiar entre escenas, iniciar y detener grabaciones
              y transmisiones, y ajustar parámetros como el volumen y el
              enfoque. <br />
              Además, Bitfocus Companion incluye una serie de funcionalidades
              avanzadas que permiten a los usuarios crear y personalizar sus
              propias escenas y transiciones, controlar dispositivos externos
              como cámaras y micrófonos, y visualizar en tiempo real la salida
              de audio y video. Esto permite a los usuarios crear producciones
              más sofisticadas y profesionales, y ofrecer una experiencia de
              visualización más agradable a su audiencia.
              <br />
              <br /> En resumen, Bitfocus Companion es una herramienta valiosa
              para aquellos que buscan un mayor control y personalización de sus
              flujos de trabajo de grabación y transmisión en vivo. Ofrece una
              interfaz de usuario intuitiva y una amplia gama de funcionalidades
              avanzadas que facilitan la realización de tareas comunes y
              permiten a los usuarios crear producciones más sofisticadas y
              profesionales.
            </text>
          }
        />

        <Footer />
      </div>
    </div>
  );
}
