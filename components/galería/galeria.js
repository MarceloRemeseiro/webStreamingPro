import Image from "next/image";

function Galeria({ data }) {
  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">
        Algunas fotos <br /> de{" "}
        <span className="underline decoration-secondary">
          trabajos realizados
        </span>
      </h1>
      <div className="flex flex-wrap">
        {data.map((foto, index) => (
          <div key={foto.index} className="w-1/3 p-3 ">
            <a
              href={foto.properties.foto.files[0].file.url}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={foto.properties.foto.files[0].file.url}
                alt="fotos varias"
                width="800"
                height="600"
                layout="intrinsic"
                className="h-64 w-full object-cover rounded-lg"
              />
            </a>
            <p className="font-bold text-lg mt-2">
              {foto.properties.titulo.title[0].plain_text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
