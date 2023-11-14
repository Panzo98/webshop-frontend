import React from "react";

export default function ShareYourSetup() {
  return (
    <div className="w-full px-2 lg:px-[10%] py-10 lg:py-[8rem] flex flex-col items-center">
      <span className="font-poppins text-md lg:text-xl  text-gray-500 tracking-0 text-center font-semibold mb-2">
        Share your setup with
      </span>
      <span className="font-poppins text-3xl font-bold leading-48px tracking-0 text-left text-text-color">
        #FurniroFurniture
      </span>
      <div className="flex ">
        <div>
          <div className="flex flex-row items-end">
            <img
              className="object-contain p-2 hover:scale-[1.03] transition"
              src="lgd.png"
              alt="slika"
            />
            <img
              className="object-contain p-2 hover:scale-[1.03] transition"
              src="lgl.png"
              alt="slika"
            />
          </div>
          <div>
            <div className="flex flex-row items-start">
              <img
                className="object-contain p-2 hover:scale-[1.03] transition"
                src="ldl.png"
                alt="slika"
              />
              <img
                className="object-contain p-2 hover:scale-[1.03] transition"
                src="ldd.png"
                alt="slika"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <img
            className="object-contain p-2 hover:scale-[1.03] transition"
            src="s.png"
            alt="slika"
          />
        </div>
        <div>
          <div className="flex flex-row items-end">
            <img
              className="object-contain p-2 hover:scale-[1.03] transition"
              src="dgl.png"
              alt="slika"
            />
            <img
              className="object-contain p-2 hover:scale-[1.03] transition"
              src="dgd.png"
              alt="slika"
            />
          </div>
          <div>
            <div className="flex flex-row items-start">
              <img
                className="object-contain p-2 hover:scale-[1.03] transition"
                src="ddl.png"
                alt="slika"
              />
              <img
                className="object-contain p-2 hover:scale-[1.03] transition"
                src="ddd.png"
                alt="slika"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
