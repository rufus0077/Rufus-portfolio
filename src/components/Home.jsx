import React from 'react'
import HeroImage from "../assets/rufusimg.jpg";
import {BiSolidRightArrowCircle} from 'react-icons/bi'
import {Link} from 'react-scroll'





const Home = () => {
  return (
    <div id="home" className='h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-800'>

        <div className='max-w-screen-lg  mx-auto  flex flex-col items-center
        justify-center h-full px-4  md:flex-row  '>
            <div className='flex flex-col justify-center h-full '>   
                <h2 className='text-4xl pt-12 mt-6 pr-4 sm:text-7xl font-bold text-white'>I am a Full Stack Developer</h2>

                <p className='text-gray-200 py-4 max-w-md '> As a third-year computer science student with a strong foundation in software development, seeking an internship 
                    or entry-level Software Engineer position in an IT company.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md bg-gradient-to-r
                     from-cyan-500 via-blue-500 to-blue-800 cursor-pointer '>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-200'>
                            <BiSolidRightArrowCircle size={20} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3  ' />
            </div>
        </div>
    </div>
  )
}

export default Home