import React from "react";


const ComposedImages = () => {
  return (
    <>
        <div className="h-[550px] w-[520px] pl-5 ">
        <div className="relative">
          <div className="bg-[#DECBC0] h-[350px] mt-[120px] w-[200px] absolute ml-10 rounded"></div>
          <img
            src="./forniture.png"
            alt="forniture"
            className="h-[550px] w-[440px] absolute z-0 ml-20 rounded"
          />
          <img
            src="./worker.png"
            alt="worker"
            className="h-[165.25px] w-[250px] absolute z-10 top-[385px] -left-5 rounded"
          />
        </div>
        </div>
      
    </>
  );
};

export default ComposedImages;


{/* 

Why The Worker Image Is Disappered When i put bottom on 0

*/}