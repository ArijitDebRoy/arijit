import React, {Component} from 'react';
import Layout from "../components/layout";

class WorkGallery extends Component {
    render() {
        return (
            <Layout>
                <div className="site-container bg-gray-800">
                    <section className="work-gallery">
                        <div className="intro-item flex flex-col">
                            <div>
                                <h1 className="flex mb-5 font-aw font-bold text-6xl text-white">Work Gallery</h1>
                                <h4 className="flex mb-12 font-aw text-white">
                                    This gallery contains all of my works.
                                    I always try to keep this gallery updated. I'm mainly into web development. Most of the prject for the front-end
                                    I have used React or Vue and backed either Node.js using Express or Laravel. Though I have a little experience working with Restify.
                                    Some socket realted projects are also inside this bucket. Hope you like my works.
                                </h4>
                            </div>
                            <div>
                                <h4 className="mb-5 font-scp quote text-white italic">
                                    &nbsp;The significant problems we face cannot be solved by the same level of thinking that created them.&nbsp;
                                </h4>
                                <h4 className="flex justify-end mr-5 mb-5 font-scp text-white italic">
                                    - Albert Einstein
                                </h4>
                            </div>
                        </div>
                        <figure className="small-item">
                            <img src="/images/student.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Collegify Courseprep(SaaS)</h2>
                            </div>
                        </figure>
                        <figure className="large-item">
                            <img src="/images/testprep.png" alt="name" />
                            <div className="large-item-overlay">
                                <h2 className="font-aw text-xl">Collegify Testprep</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/partner.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Collegify Partner(B2B)</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/collegify.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Collegify Landing</h2>
                            </div>
                        </figure>
                        <figure className="large-item">
                            <img src="/images/seergg.png" alt="name" />
                            <div className="large-item-overlay">
                                <h2 className="font-aw text-xl">World's 1st e-sports exchange - SeerGG</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/admission.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Collegify Admisssion Consultation</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/portfolio.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">My Portfolio</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/tokenalerts.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Tokenalets</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/blog.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Collegify Blog</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/admin.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Collegify Admin</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/ariceditor.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Npm registry aric-editor</h2>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/scrapping.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Web Scrapping(Node.js/PHP)</h2>
                            </div>
                        </figure>
                    </section>
                </div>
            </Layout>
        );
    }
}

export default WorkGallery;