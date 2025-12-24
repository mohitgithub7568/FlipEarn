import React from 'react'

const CTA = () => {
  return (
    <div>
      <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-1.png')] bg-cover bg-center bg-no-repeat">
                <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">Trusted by millions</h1>
                <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-indigo-600"></div>
                <div className='mb-8'>
                    <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">Sell your products and services with confidence</h2>

                </div>
                <p className="text-sm md:text-base text-white max-w-xl">
                    Join our community of satisfied users who have transformed their online presence with our platform. Experience the difference today!
                </p>
                <button className="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r from-indigo-600 to-violet-500 hover:scale-105 transition duration-300 text-white rounded-full">
                    Get Started
                </button>
            </section>
        </>
    </div>
  )
}

export default CTA
