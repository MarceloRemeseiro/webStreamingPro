import React from "react";
import Image from "next/image";

function TarjetaDerecha({foto,titulo, descripcion,firma,cargo}) {
  return (
    <section className=" dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="container lg:-mx-6 lg:flex justify-center lg:items-center">
          <Image
            width="500px"
            height="500px"
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={foto}
            alt=""
          />
          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-secondary ">“</p>
            <h1 className="text-2xl font-semibold text-white dark:text-white xl:text-4xl lg:w-96">
              {titulo}
            </h1>
            <p className="max-w-lg mt-6 text-white dark:text-white ">
              {descripcion}
            </p>
            <h3 className="mt-6 text-lg font-medium text-secondary">
             {firma}
            </h3>
            <p className="text-white dark:text-white">
              {cargo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TarjetaDerecha;
