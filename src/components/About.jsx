import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b
     from-gray-800 to-black text-white '>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>
            <div className='pb-12'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 '>About</p>
                <div>
                    <p className='text-xl mt-20'>As a third-year computer science student with a strong foundation in software development, seeking an internship 
                        or entry-level Software Engineer position in an IT company. 
                        </p>

                        <br />

                        <p className='text-xl '>
                        Eager to apply my programming skills, problem-solving 
                        abilities, and passion for technology to contribute to amazing projects, enhance my experience, and grow as a 
                        valuable member of your development team. Committed to delivering high-quality code, collaborating effectively, and 
                        continuously learning to stay at the top of the industry.
                        </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About