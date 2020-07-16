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
                            <img src="/images/b.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Project Name</h2>
                                <h4 className="font-scp text-sm">This kind of functionality basically seen in the news, product based websites or in blogs they show the post image and title but when the user moves</h4>
                            </div>
                        </figure>
                        <figure className="large-item">
                            <img src="/images/b.png" alt="name" />
                            <div className="large-item-overlay">
                                <h2 className="font-aw text-xl">Project Name</h2>
                                <h4 className="font-scp text-sm">This kind of functionality basically seen in the news, product based websites or in blogs they show the post image and title but when the user moves</h4>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/b.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Project Name</h2>
                                <h4 className="font-scp text-sm">This kind of functionality basically seen in the news, product based websites or in blogs they show the post image and title but when the user moves</h4>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/a.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Project Name</h2>
                                <h4 className="font-scp text-sm">This kind of functionality basically seen in the news, product based websites or in blogs they show the post image and title but when the user moves</h4>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/a.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Project Name</h2>
                                <h4 className="font-scp text-sm">This kind of functionality basically seen in the news, product based websites or in blogs they show the post image and title but when the user moves</h4>
                            </div>
                        </figure>
                        <figure className="small-item">
                            <img src="/images/a.png" alt="name" />
                            <div className="small-item-overlay">
                                <h2 className="font-aw text-xl">Project Name</h2>
                                <h4 className="font-scp text-sm">This kind of functionality basically seen in the news, product based websites or in blogs they show the post image and title but when the user moves</h4>
                            </div>
                        </figure>
                    </section>
                </div>
            </Layout>
        );
    }
}

export default WorkGallery;