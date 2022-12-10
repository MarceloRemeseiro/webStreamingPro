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
          foto="/vmix.jpg"
          titulo="vMix"
          descripcion={
            <text>
              Se considera una herramienta valiosa para cualquier persona vMix
              es un software de producción en vivo que permite a los usuarios
              mezclar y producir contenido de vídeo en tiempo real.
              <br />A diferencia de OBS, que es gratuito y de código abierto,
              vMix es un software de pago que ofrece una gama más amplia de
              funcionalidades avanzadas para la producción en vivo.
              <br />
              <br /> Algunas de las características más destacadas de vMix
              incluyen la capacidad de mezclar hasta 8 fuentes de vídeo en alta
              definición, agregar efectos y transiciones en tiempo real, y
              transmitir a varias plataformas de streaming al mismo tiempo.
              <br />
              También permite a los usuarios grabar y producir contenido en alta
              calidad en formato 4K y utilizar dispositivos de entrada y salida
              profesionales para mejorar la calidad del audio y del vídeo.{" "}
              <br />
              En resumen, vMix es una excelente opción para aquellos que buscan
              un software de producción en vivo con un alto nivel de
              flexibilidad y funcionalidades avanzadas.
            </text>
          }
        />

        <Footer />
      </div>
    </div>
  );
}
