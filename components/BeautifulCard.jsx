
import React from 'react'

const BeautifulCard = () => {
  return (
    <>
{/* product wrapper */}
<div className='container pb-16'>
<h2 className='text-2xl font-medium text-gray-800 uppercase mb-6 '>Top new Arrival</h2>

{/* productGrid */}
<div className='grid grid-cols-4 gap-6'>

{/* Single product */}
<div className='bg-white shadow rounded overflow-hidden group'>

{/* Product Image */}
<div className='relative'>
<img src='./product1.png' alt='product1' className='w-full'/>
<div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 duration-700 transition '>
<a href='#' className='text-white text-lg w-10 h-10 rounded-full bg-[#AB7A5F] flex items-center justify-center  transition'>
{/* <img src='./search.png'></img> */}
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
</a>

</div>
</div>

{/* Product Content */}
<div className='pt-4 pb-3 px-4'>
    <a href='#'>
        <h4 className='uppercase font-medium text-xl text-gray-800 hover:text-red-500 transition '>Guyer Chair</h4>
    </a>
    <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
        <p className='text-xl text-red-500 font-semibold'>£45.00</p>
        <p className='text-sm text-gray-400 line-through'>£55.00</p>
    </div>
    <div className='flex items-center'>
        <div className='flex gap-1 text-sm text-yellow-400'>
            <span><i className='fas fa-star'></i></span>
            <span><i className='fas fa-star'></i></span>
            <span><i className='fas fa-star'></i></span>
            <span><i className='fas fa-star'></i></span>
            <span><i className='fas fa-star'></i></span>
        </div>
        <div className='text-xs text-gray-500 ml-3'>(150)</div>
    </div>
</div>
<a href='#' className='block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition'>Add to Cart</a>

</div>
</div>

</div>
</>
  )
}

export default BeautifulCard