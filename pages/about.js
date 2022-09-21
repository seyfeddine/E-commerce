
import React from 'react'
import NavBar from '../components/NavBar'
import PathDiv from '../components/PathDiv'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
        {/* NavBar Section ---------------------------------------------------*/}
        <NavBar/>
        {/* NavBar Section End ---------------------------------------------- */}

        {/* Path Section */}
        <PathDiv/>
        {/* Path Section End */}

        {/* Our Story Section */}
        <div className='flex justify-center gap-14 mt-20  mb-20'>
        <div className=''>
            <img src='./forniture.png' alt='furniture' className='w-[535px] h-[500px] bg-cover' />
        </div>


        <div className='flex flex-col '>
            <div className='text-[2.5rem] font-bold tracking-wide'>Our Story </div>
            <div className='bg-[#AB7A5F] h-1 w-24 mb-8  '></div>
            <div className='text-[#617d98] text-[1rem] tracking-wider leading-1'>
              <p className='leading-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium <br/> sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error <br/> accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam <br/> esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est <br/>exercitationem molestiae delectus saepe odio eligendi modi porro eaque in <br/>libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex,<br/> eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex,<br/> voluptate accusamus nesciunt totam vitae esse iste.n</p>
            </div>
        </div>

        </div>
        {/* Our Story Section End */}


        {/* Footer Section */}
        <Footer/>
        {/* Footer Section End */}

    </div>
  )
}

export default about