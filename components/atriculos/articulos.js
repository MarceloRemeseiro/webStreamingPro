import React from "react";
import Image from "next/image";

function Articulos(data) {
  console.log(data);
  return (
    <>
      {/* component */}
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-2 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between  xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative ">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6 z-10 ">
                      <h2 className="text-lg font-semibold 5 text-white">
                        {
                          data.data.dataHardware[0].properties.titulo.title[0]
                            .plain_text
                        }
                      </h2>
                      <p className="text-base leading-4 text-white mt-2 ">
                        {
                          data.data.dataHardware[0].properties.subtitulo
                            .rich_text[0].plain_text
                        }
                      </p>
                      <a
                        href={data.data.dataHardware[0].properties.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          COMPRAR
                        </p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Image
                    className="object-cover w-full rounded-lg h-96 "
                    src={
                      data.data.dataHardware[0].properties.foto.files[0].file
                        .url
                    }
                    alt="Articulo"
                    width={400}
                    height={350}
                  />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {
                          data.data.dataHardware[1].properties.titulo.title[0]
                            .plain_text
                        }
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {
                          data.data.dataHardware[1].properties.subtitulo
                            .rich_text[0].plain_text
                        }
                      </p>
                      <a
                        href={data.data.dataHardware[1].properties.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          COMPRAR
                        </p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Image
                    src={
                      data.data.dataHardware[1].properties.foto.files[0].file
                        .url
                    }
                    className="object-cover w-full rounded-lg h-96"
                    alt="Articulo1"
                    width={400}
                    height={350}
                  />
                </div>
              </div>
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6 z-10">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {
                        data.data.dataHardware[2].properties.titulo.title[0]
                          .plain_text
                      }{" "}
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      {
                        data.data.dataHardware[2].properties.subtitulo
                          .rich_text[0].plain_text
                      }
                    </p>
                    <a
                      href={data.data.dataHardware[2].properties.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        COMPRAR
                      </p>
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <Image
                  src={
                    data.data.dataHardware[2].properties.foto.files[0].file.url
                  }
                  className="object-cover w-full rounded-lg h-96"
                  alt="Articulo2"
                  width={700}
                  height={650}
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6 z-10">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {
                        data.data.dataHardware[3].properties.titulo.title[0]
                          .plain_text
                      }
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      {
                        data.data.dataHardware[3].properties.subtitulo
                          .rich_text[0].plain_text
                      }
                    </p>
                    <a
                      href={data.data.dataHardware[3].properties.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        COMPRAR
                      </p>
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <Image
                  src={
                    data.data.dataHardware[3].properties.foto.files[0].file.url
                  }
                  className="object-cover w-full rounded-lg h-96"
                  alt="Articulo3"
                  width={700}
                  height={600}
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {
                          data.data.dataHardware[4].properties.titulo.title[0]
                            .plain_text
                        }
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {
                          data.data.dataHardware[4].properties.subtitulo
                            .rich_text[0].plain_text
                        }
                      </p>
                      <a
                        href={data.data.dataHardware[4].properties.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          COMPRAR
                        </p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Image
                    src={
                      data.data.dataHardware[4].properties.foto.files[0].file
                        .url
                    }
                    className="object-cover w-full rounded-lg h-96"
                    alt="Articulo4"
                    width={400}
                    height={350}
                  />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {
                          data.data.dataHardware[5].properties.titulo.title[0]
                            .plain_text
                        }
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {
                          data.data.dataHardware[5].properties.subtitulo
                            .rich_text[0].plain_text
                        }
                      </p>
                      <a
                        href={data.data.dataHardware[5].properties.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          COMPRAR
                        </p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Image
                    src={
                      data.data.dataHardware[5].properties.foto.files[0].file
                        .url
                    }
                    className="object-cover w-full rounded-lg h-96"
                    alt="Articulo5"
                    width={400}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articulos;
