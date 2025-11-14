import Image from "next/image";
import Link from "next/link";
import React from "react";

function Headerss() {
  return (
    <>
      <div className="grid-cols-2 grid ">
        <div>
          <Link href="/Dispatch">
            <h1>Courier</h1>
          </Link>
        </div>
        <Link className="flex flex-row" href="/Uber">
          {" "}
          <Image src="/Image/taxi.png" alt="taxi" width={20} height={10} />
          <h1>cars</h1>
        </Link>
      </div>
    </>
  );
}

export default Headerss;
