"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
function Page() {
  const routes = useRouter();

  const search = () => {
    routes.push("Uber/Details");
  };
  return (
    <div>
      <h1>uber</h1>
      <input
        placeholder="where to?"
        onClick={search}
        className="border p-1 w-full rounded-2xl"
      />
      <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mt-14 xl:w-2/4 xl:top-12 xl:absolute xl:left-2/4 xl:-translate-x-2/4">
        <button className="border shadow-2xl ml-4 rounded-2xl py-2">
          {" "}
          <Image
            src="/Image/taxis.png"
            className="ml-10 md:ml-14 lg:ml-22 xl:ml-10"
            alt="taxi"
            width={30}
            height={20}
          />
          <h1 className="md:text-[20px]">trip</h1>
        </button>
        <button className="border shadow-2xl rounded-2xl py-2 ">
          {" "}
          <Image
            src="/Image/delivery-man.png"
            className="ml-10 md:ml-14 lg:ml-22 xl:ml-10"
            alt="taxi"
            width={30}
            height={20}
          />
          <h1 className="md:text-[20px]">send item</h1>
        </button>
        <button className="border shadow-2xl rounded-2xl mr-5 py-2 ">
          {" "}
          <Image
            src="/Image/booking.png"
            className="ml-10 md:ml-14 lg:ml-22 xl:ml-10"
            alt="taxi"
            width={30}
            height={20}
          />
          <h1 className="md:text-[20px]">reserve</h1>
        </button>
        <button  className="border shadow-2xl rounded-2xl md:text-2xl">store pickup</button>
      </div>
    </div>
  );
}

export default Page;
