import React, { useState } from "react";
import ShoeData from "./ShoeDataAPI";
import Items from "./Items";


const Layout = () => {


  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[2px] gap-2">
        {ShoeData?.map(({ id, name, Price, ImageURI, category, HoverImg, orgPrice ,colorRange }) => (
          <div key={id} className=" hover:border border-1 border-black ">
            <div>
              <Items ImageURI={ImageURI} HoverImg={HoverImg} name={name} Price={Price} orgPrice={orgPrice} category={category} colorRange={colorRange} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Layout;


{/* <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="grid grid-cols-4 gap-[2px]  ">
        {ShoeData.map(
          ({ id, name, orgPrice, Price, category, colorRange, ImageURI, HoverImg }) => (
            <div key={id}>
              <div className="hover:border border-1 border-black pb-10">
                <LayoutEoss ImageURI={ImageURI} />
                <div className={`bg-white w-[100px] flex justify-between px-2 text-black ${hover ? "-translate-y-9" : "-translate-y-5"} ml-2`}><h1 className="line-through text-gray-500 text-sm">{orgPrice}</h1><h1 className="text-red-500  text-sm">{Price}</h1></div>
                <div className="px-2">
                  <h1 className="font-Rubik text-sm font-thin">{name}</h1>
                  <h2 className="text-xs font-Rubik font-thin text-gray-400">
                    {category}
                  </h2>
                </div>
              </div>
            </div>
          )
        )}
      </div> */}