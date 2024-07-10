// import React from 'react'

import { Link } from "@remix-run/react"

const IndexPage = () => {
  return (
    <>
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row mt-12">
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-indigo-600 md:mb-6 md:text-lg xl:text-xl">
            Welcome to my shop!
          </p>
          <h1 className="text-black mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            Focus on tech that matters
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            Welcome to TechConnect, your ultimate destination for all things
            tech! Step into a world of innovation and discovery as we bring you
            the latest and greatest gadgets, electronics, and accessories.
          </p>
          <div>
            <Link
              to="#products"
              className="rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 md:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="https://images.pexels.com/photos/16065312/pexels-photo-16065312/free-photo-of-smartphone-with-apple-logo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Smartphone"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </>
  )
}

export default IndexPage
