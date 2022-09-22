import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../helpers/api'
import Image from 'next/image'

const Test = () => {


  const [products, setproducts] = useState([])

  useEffect(() => {
    fetchProducts().then(
      data=>setproducts(data)
    )
  }, [])




  return (
    <div>
      {products && products?.map((product) => <Image src={product?.image} key={product?.id} width={500} height={500} />)}
    </div>
  )
}

export default Test