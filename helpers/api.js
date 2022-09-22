// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


export const fetchProduct = async (pid) => {
  const response = await fetch(`https://fakestoreapi.com/products/${pid}`)
  let data = await response.json()
  return data
}
