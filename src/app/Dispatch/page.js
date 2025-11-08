import React from "react";

function page() {
  return (
    <div>
      <h1>Dispatch Page</h1>

      <input
        placeholder="where to?"
        className="border p-1 w-full rounded-2xl"
      />
      <div className="grid grid-cols-2 md:grid md:grid-cols-3">
        <div>
          <h1>send item</h1>
        </div>
        <div>
          <h1>Recieve items</h1>
        </div>
        <div>
          <h1>shop pick-up</h1>
        </div>
      </div>
    </div>
  );
}

export default page;
