import React from "react";
import BrownButton from "../components/BrownButton";
import ComposedImages from "../components/ComposedImages";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import ThreeBoxes from "../components/ThreeBoxes";
import product1 from '../public/product1.png'
import product2 from '../public/product2.png'
import product3 from '../public/product3.png'

const mainPage = () => {
  return (
    <div>
      {/* NavBar Section --------------------------------------------------------------------------*/}
      <NavBar />
      {/* NavBar Section End ----------------------------------------------------------------------*/}




      {/* ShopNow Section -----------------------------------------------------------------------*/}
      <div className=" mt-10 flex  px-44 items-center gap-[8rem] mb-10">
        <div>
          <h1 className="mb-[2rem] text-[3rem] capitalize font-bold text-[#102A42] leading-none ">
            Design Your <br />
            Comfort Zone
          </h1>
          <div className="mb-[2rem] text-[1.25rem] text-[#8097AC] leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br /> Iusto, at sed omnis corporis doloremque possimus velit!
                <br /> Repudiandae nisi odit, aperiam odio ducimus, obcaecati
                <br /> libero et quia tempora excepturi quis alias?
          </div>
          <BrownButton/>
        </div>
        <ComposedImages />
      </div>
      {/* ShopNow Section End  ------------------------------------------------------------*/}



      {/*  Featured products Section -------------------------------------------------------*/}
      <div className="bg-[#F1F5F8] flex justify-center pb-20">
        <div className="">


        <div className="flex justify-center mt-20 mb-20 text-[2.5rem] font-bold">
        <div className="flex flex-col items-center  ">
          <div className="flex justify-center text-[2.5rem]">Featured Products</div>
          <div className="flex flex-row justify-center h-1 w-[100px] bg-[#AB7A5F]"></div>
        </div>
        </div>

             
            
             <div className="flex justify-between gap-10   ">
             <ProductCard image={product1}/>
             <ProductCard image={product2}/>
             <ProductCard image={product3}/>
             
            
             </div> 

             <div className="flex justify-center mt-20">
             <BrownButton/>
             </div>
            </div>
      </div>
      {/*  Featured products End ---------------------------------------------------------------*/}


      {/* Three Boxes --------------------------------------------------------------------------*/}

        <ThreeBoxes/>
    
      {/* Three Boxes Ending --------------------------------------------------------------------------*/}


      {/* Send us Email Section ----------------------------------------------------------------------- */}

      <div className="flex flex-row justify-around  gap-10  mt-40 mb-40">

            <div className="flex flex-col ">
                <p className="text-[2rem] text-[#102A42] font-bold mb-10">Join our newsletter and get 20% off</p>
                <p className="text-[#AFBDCB]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde <br/>quaerat ratione soluta veniam provident adipisci cumque eveniet <br/> tempore?</p>
            </div>


            <div className="flex items-center ">
            <form class="w-full max-w-sm">
            <div class="flex items-center border border-2 rounded border-black ">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Email" aria-label="Full name"/>
            <button class="flex-shrink-0 bg-[#AB7A5F] hover:text-white border border-l-2 border-black  text-sm  text-black py-2 px-5 rounded" type="button">
                Subscribe
            </button>
            </div>
            </form>
            </div>
      </div>

      {/* Send us Email Ending ------------------------------------------------------------------------ */}

      {/* Footer Section */}
        <Footer/>
      {/* End of Footer Section */}


    </div>
  );
};

export default mainPage;
