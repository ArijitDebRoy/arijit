import React, {Component} from 'react';
import Layout from "../components/layout";
import { FaGithub, FaLinkedin, FaNpm } from 'react-icons/fa';

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="text-red-800 h-screen flex justify-center bg-gray-900">
                    <div className="self-center font-extrabold">
                        <img src="../../images/logo.svg"/>
                        <div className="text-center">
                            <h4 className="text-white mb-2 text-xl">I'm Coming Soon!</h4>
                            <h4 className="text-white font-semibold">This site is under construction.</h4>
                            <h4 className="text-white font-semibold mb-5">Meanwhile you could visit this links...</h4>
                            <div className="flex justify-around">
                                <a href="https://github.com/ArijitDebRoy" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaGithub color="white" fontSize="24px"/></a>
                                <a href="https://www.npmjs.com/package/aric-editor" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaNpm color="white" fontSize="24px"/></a>
                                <a href="https://www.linkedin.com/in/arijitdebroy8b7a85145/" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaLinkedin color="white" fontSize="24px"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Index;