import React from 'react'
import heroImg from '../../assets/heroImg.jpg'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Seize Your Chance: Grab the Trendiest Products 
            <br className="hidden lg:inline-block"/>Before They're Gone!
          </h1>
          <p className="mb-8 leading-relaxed">Discover a world of must-have products that are flying off the shelves! Don't miss your opportunity to secure the latest and most sought-after items before they disappear. Stay ahead of the trend and get your hands on these highly coveted products today. Act now, because they won't last long</p>
          <div className="flex justify-center">
            <button onClick={() => {  window.location.href = '/products' }} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Show All Products</button>
            <button onClick={() => {  window.location.href = '/contact' }}  className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Contact Us</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={heroImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero