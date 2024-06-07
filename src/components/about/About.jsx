import React from 'react'
import './about.css'
import aboutImg from '../../assets/header-img.jpeg'
import cv from '../../assets/Harish_V.pdf'
import Info from './Info'
import files from '../../assets/files.svg'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
            <img src={aboutImg} alt="" className="about_img" />
            <div className="about_data">
                <Info/>

                <p className="about_description">
                  I aspire to become a proficient full-stack web developer known for my adaptability and innovative problem-solving skills. My goal is to create user-centric software solutions across diverse industries, while continually learning and contributing to open-source projects.
                </p>
                <a href={cv} download="Harish. V" className="button button_flex">Download CV <img src={files} style={{marginLeft: '10px'}} alt='files'/></a>
            </div>
        </div>
    </section>
  )
}

export default About
