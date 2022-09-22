import React from "react";
import Link from "next/link";

const PathDiv = ({ pathList }) => {
  return (
    <div className='bg-[#EADED7] '>
    <div className=" h-[128px] flex items-center md:px-44 px-0 max-w-[1200px] md:max-w-full text-[2rem]  font-bold mb-[.75rem]">
      {pathList &&
        pathList.map((path, index) => (
          <>
            {index != 0 && (
              <p className={!path.active ? "text-[#795744] mx-[.7rem]" : "text-[#453227] mx-[.7rem]"}>
                /{" "}
              </p>
            )}
            <Link href={path?.link}>
              <a
                className={
                  path.active
                    ? "text-[#453227] hover:cursor-pointer  truncate"
                    : "text-[#795744] hover:text-[#453227] "
                }
              >
              
                {path.name}
                
                
              </a>
            </Link>
          </>
        ))}
    </div>
    </div>
  );
};

export default PathDiv;
