import React from "react";

function Contect() {
  return (
    <>
      <div className="flex justify-center items-center mt-40 mb-20">
        <div className="flex flex-col gap-2 border-2 p-10 rounded-md">
          <label htmlFor="" className="p-2 border border-gray-50 rounded-md flex justify-center">
            <input type="text" placeholder="enter name" className="outline-none"/>
          </label>
          <label htmlFor="" className="p-2 border border-gray-50 rounded-md flex justify-center">
            <input type="email" placeholder="enter email" className="outline-none"/>
          </label>
          <textarea name="text" id="text" rows={10} cols={30} className="outline-none p-2 rounded-md" placeholder="Query?"></textarea>
        </div>
      </div>
    </>
  );
}

export default Contect;
