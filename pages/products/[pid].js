import react, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchProduct } from "../../helpers/api";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PathDiv from "../../components/PathDiv";
import BrownButton from "../../components/BrownButton";
import ProductSwiper from "../../components/ProductSwiper";
import ReactStars from "react-stars";
import Rating from "@mui/material/Rating";
import Colors from "../../components/Colors";

const Product = () => {
  const {
    query: { pid },
  } = useRouter();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    pid && fetchProduct(pid).then((data) => setProduct(data));
  }, [pid]);

  const images = [
    "/product1.png",
    "/product2.png",
    "/product3.png",
    "/product1.png",
    "/product2.png",
  ];

  const [itemsNumber, setItemsNumber] = useState(1);
  const [activeColor, setActiveColor] = useState(null);

  console.log(product?.rating?.rate);

  return (
    <>
      <NavBar />
      <PathDiv
        pathList={[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
          { name: product?.title, link: `/products/${pid}`, active: true },
        ]}
      />

      <div className=" px-44 mt-20">
        <BrownButton />
      </div>
      <div className="flex justify-between mt-14 mb-20 px-44">
        <div>
          <ProductSwiper images={images} />
        </div>
        <div className="max-w-xl ">
          <p className="text-[2.5rem] font-bold text-[#102A42] ">
            {product?.title}
          </p>
          <div className=' flex items-center gap-4 mb-2'>
            {(product?.rating?.rate || product?.rating?.rate === 0) && (
              <Rating
                name="half-rating"
                value={product?.rating?.rate}
                precision={0.5}
                readOnly
              />
            )}

           <p className='text-[#324d67]'> (100 Customer reviews) </p>
          </div>
          <p className="text-[1.25rem] text-[#ab7a5f] mb-[.75rem] font-bold tracking-wider">
            $ {product?.price}
          </p>
          <p className="text-[#324d67] mb-[.75rem] leading-8">
            {product?.description}
          </p>
          <div className="grid grid-cols-3  mb-[1.25rem] text-[#324d67]">
            <p className="col-span2 font-bold">Available :</p>{" "}
            <p className="text-[#324d67]">in Stock</p>
          </div>
          <div className="grid grid-cols-3  mb-[1.25rem] text-[#324d67]">
            <p className="font-bold">SKU :</p>{" "}
            <p className="">recQ0fMd8T0Vk211E</p>
          </div>
          <div className="grid grid-cols-3  mb-[1.25rem] text-[#324d67]">
            <p className="font-bold">Brand :</p> <p className="">liddy</p>
          </div>
          <div className="bg-gray-200 h-[1px] w-full rounded mb-[1.25rem]"></div>
          <div className="grid grid-cols-3   mb-[1.25rem] text-[#324d67]">
            <p className="font-bold">Colors :</p>{" "}
            <div className="flex items-center gap-2 ">
              <Colors active={activeColor} color={'#c7c7c7'} setActive={setActiveColor}/>
              <Colors active={activeColor} color={'#000000'} setActive={setActiveColor}/>
            </div>
          </div>

          <div className=" max-w-[144px] flex flex-col items-center">
            <div className="flex items-center gap-3">
              <svg
                onClick={function () {
                  itemsNumber > 1 && setItemsNumber(itemsNumber - 1);
                }}
                className="cursor-pointer"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
              <p className="text-[2.75rem] font-bold">{itemsNumber}</p>
              <svg
                onClick={function () {
                  setItemsNumber(itemsNumber + 1);
                }}
                className="cursor-pointer"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </div>
            <BrownButton fullWidth />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
