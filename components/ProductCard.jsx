import React from "react";

const ProductCard = ({image}) => {
  return (
    <>
      {/* product wrapper */}
      <div className=" w-[400px] ">
        <div>
          {/* productGrid */}
          <div className="w-full gap-6 ">
            {/* Single product */}
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={image.src}
                  alt="product1"
                  className="h-[225px] w-full bg-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 duration-700 transition ">
                  <a
                    href="#"
                    className="text-white text-lg w-10 h-10 rounded-full bg-[#AB7A5F] flex items-center justify-center  transition"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Content */}
        <div className="flex justify-between mt-3 font-normal text-[1rem] leading-5 tracking-widest">
          <p className=""> Entertainment Center</p>
          <p className="text-[#AE8066]"> £ 599.99</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
