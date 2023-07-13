import React from 'react'


import { useStateValue } from '../StateProvider'
const ProductPage = () => {
    const [{ product }, dispatch] = useStateValue()
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap border-solid p-4 border-2">
                        <img alt="ecommerce" className="product-image h-60 me-auto" src={product?.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.name}</h1>

                            <p className="leading-relaxed">{product?.description}</p>
                            <p className="card-rating flex mt-2">
                                {Array(product?.rating).fill().map((_, i) => {
                                    return <p key={i} className='card-star'>⭐</p>
                                })}
                            </p>

                            <hr />
                            <div className="flex m-2">
                                <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductPage
