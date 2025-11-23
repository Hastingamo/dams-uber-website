import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <h1>Dispatch Page</h1>

      <input
        placeholder="deliver to?"
        className="border p-1 w-full rounded-2xl"
      />
      <div className="grid grid-cols-2 md:grid md:grid-cols-3">
        <div className="w-full h-full border bg-[#EFE9E3]">
          <Image src="/Image/delivery.png" width={200} height={250} alt="box" />
          <h1>Recieve item</h1>
        </div>
        <div className="w-full h-full border bg-[#EFE9E3]" >
                    <Image src="/Image/send.jpeg" width={200} height={450} alt="box" />

          <h1>send items</h1>
        </div>
        <div>
          <h1>shop pick-up</h1>
        </div>
      </div>
    </div>
  );
}

export default page;
