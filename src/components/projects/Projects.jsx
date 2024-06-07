import React, { useState } from 'react'
import './projects.css'
import { Data } from './Data'

// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from 'swiper/modules'

// Swiper required modules

const Projects = () => {

  return (
    <section className="projects container section" id="projects">

        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">Some samples of my projects</span>

        <Swiper className="projects_container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            }} 
            modules={[Pagination]}    
        >
            {Data.map((data) => {
                return(
                    <SwiperSlide className="projects_card" key={data.id}>
                        <img src={data.image} alt="" className='projects_img'/>

                        <h3 className="projects_title">{data.title}</h3>
                        <p className="projects_description">{data.description}</p>
                        <br/>
                        
                    </SwiperSlide>
                )
            })}
        </Swiper>

        <div className={ "projects_modal"}>
            <div className="projects_modal-content">
                <i className="uil uil-times projects_modal-close" ></i>
            </div>
        </div>
        
    </section>
  )
}

export default Projects
