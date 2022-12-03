import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AddsLaterales from "../components/adds/add";
import Image from "next/image";

export default function Youtube() {
  return (
    <div>
      <Navbar />
      <div className="m-20"></div>
      <div>
        <Header />
      </div>
      <div className="container md:flex justify-center items-center gap-10">
        <div className="container py-5">
          <div className="pb-5">
            <h1 className="text-center md:text-6xl text-3xl">Ultimo video</h1>
          </div>
          <Image
            width="1920px"
            height="1080px"
            layout="responsive"
            src="https://cdn.pixabay.com/photo/2022/03/31/12/20/synthwave-7102886_960_720.jpg"
          />
          <h2 className="text-2xl m-2">Titulo</h2>
          <p className="m-2">Descripción</p>
          <div>
            <h1 className="text-center md:text-5xl text-2xl m-12">
              Ultimos videos
            </h1>
          </div>
          <div class="grid overflow-hidden md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 md:gap-5 gap-y-5  ">
            <div class="box">
              <Image
                width="1920px"
                height="1080px"
                layout="responsive"
                src="https://cdn.pixabay.com/photo/2022/03/31/12/20/synthwave-7102886_960_720.jpg"
              />
            </div>

            <div class="box">
              <Image
                width="1920px"
                height="1080px"
                layout="responsive"
                src="https://cdn.pixabay.com/photo/2022/03/31/12/20/synthwave-7102886_960_720.jpg"
              />
            </div>
            <div class="box">
              <Image
                width="1920px"
                height="1080px"
                layout="responsive"
                src="https://cdn.pixabay.com/photo/2022/03/31/12/20/synthwave-7102886_960_720.jpg"
              />
            </div>
            <div class="box">
              <Image
                width="1920px"
                height="1080px"
                layout="responsive"
                src="https://cdn.pixabay.com/photo/2022/03/31/12/20/synthwave-7102886_960_720.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
