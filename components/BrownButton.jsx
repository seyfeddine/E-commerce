import React from "react";

const BrownButton = ({fullWidth}) => {
  return (
    <div style={{
      width:fullWidth? '100%': '144.66px'
    }} className="bg-[#AB7A5F]  h-[48xp]  flex items-center justify-center rounded text-[#e7d9d1] font-[400] cursor-pointer hover:bg-[#e7d9d1] hover:text-black duration-500 py-[0.75rem] px-[1.5rem] uppercase">
      Shop Now
    </div>
  );
};

export default BrownButton;
