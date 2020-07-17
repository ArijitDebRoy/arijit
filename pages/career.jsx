import React, {Component} from 'react';
import Layout from "../components/layout";
import { FaGraduationCap, FaBuilding } from "react-icons/fa";

class Career extends Component {
    render() {
        return (
            <Layout>
                <div className="site-container bg-gray-800">
                    <h1 className="flex justify-center mb-5 font-aw font-bold text-6xl text-white">Career Map</h1>
                    <div className="career-container">
                        <div className="timeline-block timeline-block-right">
                            <div className="marker font-aw"><span><FaBuilding /></span></div>
                            <div className="timeline-content">
                                <h2 className="font-aw font-bold text-2xl">Sr. Front End Developer</h2>
                                <h4 className="font-aw">2020 - Present</h4>
                                <p className="font-scp">
                                    A dedicated test preparation panel is on the process and
                                    numerous features added to collegify.com, eg. AI enabled essay, Readiness tool, Consultation booking system etc.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-block timeline-block-left">
                            <div className="marker font-aw"><span><FaBuilding /></span></div>
                            <div className="timeline-content">
                                <h2 className="font-aw font-bold text-2xl">Front End Developer</h2>
                                <h4 className="font-aw hide-on--mobile">2020 - 2019</h4>
                                <h4 className="font-aw hide-on--desktop">2019 - 2020</h4>
                                <p className="font-scp">
                                    I started exploring GraphQL and made a GraphQL server for the APIs.
                                    Meanwhile the course plan and insights system on the student side have started being developed.
                                    The B2B partner system also started at this time
                                </p>
                            </div>
                        </div>
                        <div className="timeline-block timeline-block-right">
                            <div className="marker font-aw"><span><FaBuilding /></span></div>
                            <div className="timeline-content">
                                <h2 className="font-aw font-bold text-2xl">Jr. Web Developer</h2>
                                <h4 className="font-aw">2018 - 2019</h4>
                                <p className="font-scp">
                                    I started my career with CLG. Collegify Pvt. Ltd. After six months of training my designation was Jr. Web Developer.
                                    I have been working on development of a web based educational platform for K-12 market using Laravel and Vue.js
                                </p>
                            </div>
                        </div>
                        <div className="timeline-block timeline-block-left">
                            <div className="marker font-aw"><span><FaGraduationCap /></span></div>
                            <div className="timeline-content">
                                <h2 className="font-aw font-bold text-2xl">B.tech, Computer Science & Engineering</h2>
                                <h4 className="font-aw hide-on--mobile">2018 - 2014</h4>
                                <h4 className="font-aw hide-on--desktop">2014 - 2018</h4>
                                <p className="font-scp">
                                    I always wanted to be an Engineer and Computer Science is my all time favourite.
                                    So, I had chosen CSE as my engineering domain. In those years I learned so many things and did lots of coding practice.
                                    After doing some projects, internship and training in SWING and J2EE I successfully graduated from SDET Brainware Group of Institutions, affiliated to MAKAUT (formerly known as WBUT) and got my B.Tech degree
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*quote*/}
                    <div className="quote-wrapper">
                        <h4 className="mb-5 font-scp quote text-white italic">
                            &nbsp;Where the mind is without fear
                            and the head is held high,
                            where knowledge is free.
                            Where the world has not been broken up into fragments by narrow domestic walls.&nbsp;
                        </h4>
                        <h4 className="flex justify-end mr-5 mb-5 font-scp text-white italic">
                            - Rabindranath Tagore
                        </h4>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Career;