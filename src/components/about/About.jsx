import React from 'react'
import './about.css'
import aboutImg from '../../assets/Harish_V.jpg'
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
                  I aspire to become a skilled Java Developer known for adaptability and problem-solving. I aim to build scalable, user-focused software using Java,
                  Spring Boot, and modern backend technologies. I'm also passionate about web development, with hands-on experience from my internship
                  at HHCreates, where I worked on real-world projects using HTML, CSS, JavaScript, WordPress, and Zoho Creator. I’m committed to continuous
                  learning and contributing to open-source projects.</p>
                <a href={cv} download="Harish_V" className="button button_flex">Download CV <img src={files} style={{marginLeft: '10px'}} alt='files'/></a>
            </div>
        </div>
    </section>
  )
}

export default About
