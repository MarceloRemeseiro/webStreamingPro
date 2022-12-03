import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative w-screen h-[30vh] border-b  border-b-secondary">
      <div>
        <Image
          priority
          src="/headerweb.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="imagen streaming pro"
        />
      </div>
    </div>
  );
};

export default Header;
