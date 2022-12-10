import Image from "next/image";
import React, { useEffect } from "react";

const TarjetasProyectos = ({ data }) => {
  return (
    <section className="container dark:bg-gray-900">
      <div className=" px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-white capitalize lg:text-4xl dark:text-white">
          Grandes Proyectos
        </h1>

        <p className="mt-4 text-center text-white dark:text-gray-300">
          Aqui los 3 Proyectos mas destacados de mi carrera
        </p>
        <div className="container grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {data.map((datos, index) => (
            <div key={index}>
              <Image
                className="object-cover w-full rounded-lg h-96 "
                src={datos.properties.foto.files[0].file.url}
                alt=""
                width={384}
                height={384}
              />
              <h2 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">
                {datos.properties.titulo.title[0].plain_text}
              </h2>
              <p>
                <a
                  className="mt-2 text-lg tracking-wider text-secondary uppercase dark:text-secondary "
                  href={datos.properties.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver mas
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TarjetasProyectos;
