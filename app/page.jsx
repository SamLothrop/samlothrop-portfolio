import React from "react"
import { FiDownload } from 'react-icons/fi'
import { Button } from '@/components/ui/button'

// components
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /><span className="text-destructive">Sam Lothrop</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in designing elegant and user-friendly applocations, creating sophisticated digital experiences, and having a strong grasp of a diverse range of programming languages and technologies.
              With special interests in machine learning (generative AI and reinforced learning), data base, and software developement (front end disproportionately to back end)
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/SamLothrop-Resume.pdf" download="SamLothrop-Resume.pdf">
                <Button variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 borderborder-destructive rounded-full flex justify-center items-center text-destructive text-base hover:bg-destructive hover:text-primary hover:transition-all duration-500' />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
};

export default Home;