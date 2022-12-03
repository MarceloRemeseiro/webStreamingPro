import { useState } from 'react';
import Image from 'next/image';

function Galeria() {
  const [photos] = useState([
    {
      name: 'Foto 1',
      url: "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80",
      
    },
    {
      name: 'Foto 2',
      url: "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      
    },
    {
        name: 'Foto 2',
        url: "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        
      },
      {
        name: 'Foto 1',
        url: "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80",
        
      },
      {
        name: 'Foto 1',
        url: "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80",
        
      },
      {
        name: 'Foto 2',
        url: "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        
      },
    // más fotos aquí
  ]);

  return (
    <div className="container px-6 py-10 mx-auto">
    <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">
          Algunas fotos <br /> de {" "}
          <span className="underline decoration-secondary">trabajos realizados</span>
        </h1>
    <div className="flex flex-wrap">
      {photos.map((photo) => (
        <div key={photo.name} className="w-1/3 p-3 ">
          <Image src={photo.url} alt={photo.name} width= "800"
      height= "600" layout="intrinsic" className="h-64 w-full object-cover rounded-lg" />
          <p className="font-bold text-lg mt-2">{photo.name}</p>
        </div>
      ))}
    </div>
    </div>

    
  );
}

export default Galeria