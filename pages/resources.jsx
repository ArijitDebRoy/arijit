import React, {Component} from 'react';
import Layout from "../components/layout";
import { FaShare } from "react-icons/fa";

class Resources extends Component {
    render() {
        return (
            <Layout>
                <div className="site-hero-container bg-gray-800">
                    <div className="hero">
                        <div className="heading">
                            <h1 className="flex font-aw font-bold text-6xl capitalize">Web Articles.</h1>
                            <h1 className="flex font-aw font-bold text-6xl capitalize">OS resources.</h1>
                            <h1 className="flex font-aw font-bold text-6xl capitalize">DB Solutions.</h1>
                            <h1 className="flex font-aw font-bold text-6xl capitalize">Setup Guides.</h1>
                        </div>
                        <h1 className="flex font-scp font-bold capitalize md:w-2/4">
                            Some handpicked articles, docs, installation guide, coding tricks and best practices that you may like.
                            Stuck with some coding problem?
                            You may find solution for that too.
                        </h1>
                    </div>
                    <div className="relative">
                        <div className="h-24" />
                        <img className="curve" src="/images/curve.svg" alt="curve" />
                    </div>
                </div>
                <section className="resource-grid">
                    <div className="resource-item">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex justify-around items-center h-20 p-3 mx-3">
                                    <img className="resource-favicon mr-2" src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a" />
                                    <h2 className="font-aw text-xl">stackoverflow.com</h2>
                                </div>
                                <h1 className="font-aw text-xl bold px-3 mb-2">Changeable div color</h1>
                                <h2 className="font-scp px-3">
                                    CSS - Change Div background color depending on an image color inside the same Div...
                                </h2>
                                <div className="flex items-center p-3">
                                    <FaShare />
                                    <a className="font-scp text-sm" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://stackoverflow.com/questions/53979243/css-change-div-background-color-depending-on-an-image-color-inside-the-same-di">
                                        &nbsp;Visit source page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resource-item">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex justify-around items-center h-20 p-3 mx-3">
                                    <img className="resource-favicon mr-2" src="https://assets.codementor.io/icons/favicon-196x196.png" />
                                    <h2 className="font-aw text-xl">codementor.io</h2>
                                </div>
                                <h1 className="font-aw text-xl bold px-3 mb-2">Performance Optimization</h1>
                                <h2 className="font-scp px-3">
                                    21 Performance Optimization Techniques for React Apps...
                                </h2>
                                <div className="flex items-center p-3">
                                    <FaShare />
                                    <a className="font-scp text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.codementor.io/blog/react-optimization-5wiwjnf9hj">
                                        &nbsp;Visit source page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resource-item">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex justify-around items-center h-20 p-3 mx-3">
                                    <img className="resource-favicon mr-2" src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a" />
                                    <h2 className="font-aw text-xl">stackoverflow.com</h2>
                                </div>
                                <h1 className="font-aw text-xl bold px-3 mb-2">Rendering Comparison</h1>
                                <h2 className="font-scp px-3">
                                    Dynamic Rendering vs Hybrid Rendering, Both of them are methods to improving SEO...
                                </h2>
                                <div className="flex items-center p-3">
                                    <FaShare />
                                    <a className="font-scp text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://stackoverflow.com/questions/51255949/dynamic-rendering-vs-hybrid-rendering/51284890">
                                        &nbsp;Visit source page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resource-item">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex justify-around items-center h-20 p-3 mx-3">
                                    <img className="resource-favicon mr-2" src="https://hasgeek.com/favicon.ico" />
                                    <h2 className="font-aw text-xl">hasgeek.com</h2>
                                </div>
                                <h1 className="font-aw text-xl bold px-3 mb-2">ReactFoo Delhi</h1>
                                <h2 className="font-scp px-3">
                                    Keeping React Redux healthy: What, why and how with rendering optimization and performance improvements...
                                </h2>
                                <div className="flex items-center p-3">
                                    <FaShare />
                                    <a className="font-scp text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://hasgeek.com/reactfoo/2019-delhi/proposals/keeping-react-redux-healthy-what-why-and-how-with-J9EvDunbDQufmJHZuLfNBX">
                                        &nbsp;Visit source page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resource-item">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex justify-around items-center h-20 p-3 mx-3">
                                    <img className="resource-favicon mr-2" src="https://github.githubassets.com/favicons/favicon.svg" />
                                    <h2 className="font-aw text-xl">github.githubassets.com</h2>
                                </div>
                                <h1 className="font-aw text-xl bold px-3 mb-2">Peer.js demo</h1>
                                <h2 className="font-scp px-3">
                                    SIMPLE WEBRTC VIDEO CHAT USING PEERJS...
                                </h2>
                                <div className="flex items-center p-3">
                                    <FaShare />
                                    <a className="font-scp text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://stackoverflow.com/questions/53979243/css-change-div-background-color-depending-on-an-image-color-inside-the-same-di">
                                        &nbsp;Visit source page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resource-item">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex justify-around items-center h-20 p-3 mx-3">
                                    <img className="resource-favicon mr-2" src="https://static.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico" />
                                    <h2 className="font-aw text-xl">codepen.io</h2>
                                </div>
                                <h1 className="font-aw text-xl bold px-3 mb-2">Vue.js File Upload</h1>
                                <h2 className="font-scp px-3">
                                    Real-time image render in vue.js before uploding to server...
                                </h2>
                                <div className="flex items-center p-3">
                                    <FaShare />
                                    <a className="font-scp text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://codepen.io/Atinux/pen/qOvawK">
                                        &nbsp;Visit source page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resource-item">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex justify-around items-center h-20 p-3 mx-3">
                                    <img className="resource-favicon mr-2" src="https://www.digitalocean.com/assets/community/android-icon-192x192-4d13e6664f412f6904a78be76d626004bcbbd59671f6c755919628134003c2a8.png" />
                                    <h2 className="font-aw text-xl">digitalocean.com</h2>
                                </div>
                                <h1 className="font-aw text-xl bold px-3 mb-2">Phpmyadmin Installation</h1>
                                <h2 className="font-scp px-3">
                                    How To Install and Secure phpMyAdmin on Ubuntu 16.04...
                                </h2>
                                <div className="flex items-center p-3">
                                    <FaShare />
                                    <a className="font-scp text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-16-04">
                                        &nbsp;Visit source page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resource-item">
                        <div className="card">
                            <div className="card-body">
                                <div className="flex justify-around items-center h-20 p-3 mx-3">
                                    <img className="resource-favicon mr-2" src="https://laravel.com/img/favicon/favicon.ico" />
                                    <h2 className="font-aw text-xl">laravel.com</h2>
                                </div>
                                <h1 className="font-aw text-xl bold px-3 mb-2">Validation Rules</h1>
                                <h2 className="font-scp px-3">
                                    Below is a list of all available validation rules and their function...
                                </h2>
                                <div className="flex items-center p-3">
                                    <FaShare />
                                    <a className="font-scp text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://laravel.com/docs/4.2/validation">
                                        &nbsp;Visit source page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Resources;