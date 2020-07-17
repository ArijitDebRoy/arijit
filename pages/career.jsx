import React, {Component} from 'react';
import Layout from "../components/layout";

class Career extends Component {
    render() {
        return (
            <Layout>
                <div className="site-container bg-gray-800">
                    <h1 className="flex justify-center mb-5 font-aw font-bold text-6xl text-white">Career Map</h1>
                    <div className="career-container">
                        <div className="timeline-block timeline-block-right">
                            <div className="marker font-aw"><span>2020</span></div>
                            <div className="timeline-content">
                                <h2 className="font-aw font-bold text-xl md:text-2xl mb-2">First Year</h2>
                                <h4 className="font-aw text-mb md:text-xl mb-3">Some work experience</h4>
                                <p className="font-scp text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>
                        <div className="timeline-block timeline-block-left">
                            <div className="marker font-aw"><span>2020</span></div>
                            <div className="timeline-content">
                                <h3>First Year</h3>
                                <span>Some work experience</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>
                        <div className="timeline-block timeline-block-right">
                            <div className="marker font-aw"><span>2020</span></div>
                            <div className="timeline-content">
                                <h3>First Year</h3>
                                <span>Some work experience</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>
                        <div className="timeline-block timeline-block-left">
                            <div className="marker font-aw"><span>2020</span></div>
                            <div className="timeline-content">
                                <h3>First Year</h3>
                                <span>Some work experience</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate.</p>
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