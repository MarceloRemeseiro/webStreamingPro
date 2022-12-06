import React from "react";

const VideoHome = ({ video, tituloVideo }) => {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">
          Video destacado
          <br /> {tituloVideo}{" "}
          <span className="text-secondary">Canal @streaming-pro</span>
        </h1>

        <iframe
          className="mt-12 container w-full aspect-[16/9] "
          src={video}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen=""
        ></iframe>

        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
            En el canal
            <br /> Prodrás <span className="text-secondary">Encontrar</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-white">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-secondary bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-medium text-white capitalize dark:text-white">
                  Tutoriales
                </h1>

                <p className="mt-3 text-white dark:text-gray-300">
                  Tutoriales y guías sobre el uso de herramientas como OBS, vMix
                  y Blackmagic, con enfoque en la producción de contenido
                  audiovisual profesional.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-white">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-secondary bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-medium text-white capitalize dark:text-white">
                  Consejos
                </h1>

                <p className="mt-3 text-white dark:text-gray-300">
                  Consejos prácticos para mejorar la calidad y eficiencia en la
                  producción de contenido audiovisual, desde la configuración
                  del equipo hasta la edición y post-producción.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-white">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-secondary bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-medium text-white capitalize dark:text-white">
                  Analisis
                </h1>

                <p className="mt-3 text-white dark:text-gray-300">
                  Análisis y reseñas de equipos y herramientas, para ayudarte a
                  elegir el mejor para tus necesidades y aprovechar al máximo tu
                  inversión.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-white">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-secondary bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-medium text-white capitalize dark:text-white">
                  Trucos
                </h1>

                <p className="mt-3 text-white dark:text-gray-300">
                  Consejos y trucos para organizar y planificar una transmisión
                  en vivo de alta calidad, desde la configuración de la
                  plataforma de streaming hasta la producción del contenido en
                  sí.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHome;
