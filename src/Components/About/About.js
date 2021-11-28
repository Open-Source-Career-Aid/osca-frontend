import React from 'react'
import { ContactForm } from './ContactForm'

import '../../Styles/About.css'

import man from '../../Images/photo.jpg'
import about from "../../Images/About.svg"

export const About = () => {
    return (
        <div className="full_container">
            <div className="upper__part">
                <div className="container">
                    <div className="about__us">
                        <h1>About Us</h1>
                        <h6>Open Source Carrer Aid </h6>
                        <p>A platform of expert sourced resources to aid learning effectively and efficiently.</p>
                    </div>
                    <div className="image">
                        <img src={about} alt="" />
                    </div>
                </div>
            </div>
            <div className="what__we__do">
                <div className="container">
                    <div className="we__do">
                        <h1>What do we do ?</h1>
                        <p>At “Open Source Career Aid” or simply OSCA, we aim to help individuals in learning skills by providing them roadmaps with free resources vetted by skilled individuals working in those fields. This platform will enable people to update the information such that it is best suited for everyones learning needs and desires. You can use the roadmaps to cover important topics, find good resources or both.
                            Happy learning!</p>
                    </div>
                    <hr></hr>
                    <div className="contact__form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div >
    )
}
