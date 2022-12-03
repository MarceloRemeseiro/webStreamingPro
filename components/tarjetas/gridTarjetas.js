import React from "react";

export const GridTarjetas = () => {
  return (
    <section class=" dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl dark:text-white">
          Grandes Proyectos
        </h1>

        <p class="mt-4 text-center text-white dark:text-gray-300">
          Aqui los 3 Proyectos mas destacados de mi carrera
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <img
              class="object-cover w-full rounded-lg h-96 "
              src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
              alt=""
            />
            <h2 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">
              Presentacion del equipo de Ibai y Piqué
            </h2>
            <p class="mt-2 text-lg tracking-wider text-secondary uppercase dark:text-secondary ">
              Video
            </p>
          </div>

          <div>
            <img
              class="object-cover w-full rounded-lg h-96 "
              src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <h2 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">
              Liga de video Juegos profesional
            </h2>
            <p class="mt-2 text-lg tracking-wider text-secondary uppercase dark:text-secondary ">
              Video
            </p>
          </div>

          <div>
            <img
              class="object-cover w-full rounded-lg h-96 "
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">
              Ton’s of mobile mockup
            </h2>
            <p class="mt-2 text-lg tracking-wider text-secondary uppercase dark:text-secondary ">
              Mockups
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
