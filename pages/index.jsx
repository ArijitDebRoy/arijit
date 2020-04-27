import React, {Component} from 'react';
import Layout from "../components/layout";
import { FaGithub, FaLinkedin, FaNpm } from 'react-icons/fa';

class Index extends Component {

    componentDidMount() {
        analytics.track('Visited', {
            event: 'An anonymous user opened my portfolio'
        });
    }

    onOpen = (evt) => {
        analytics.track('Redirected', {
            plan: `Visited ${evt}`
        });
    };

    render() {
        return (
            <Layout>
                <div className="h-screen flex justify-center bg-gray-900">
                    <div className="self-center">
                        <img src="../../images/logo.svg"/>
                        <div className="text-center">
                            <h4 className="text-white mb-2 text-xl font-extrabold font-aw">I'm Coming Soon!</h4>
                            <h4 className="text-white font-scp">This site is under construction.</h4>
                            <h4 className="text-white mb-5 font-scp">Meanwhile you could visit this links...</h4>
                            <div className="flex justify-around">
                                <a onClick={this.onOpen.bind(this, 'github')} href="https://github.com/ArijitDebRoy" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaGithub color="white" fontSize="24px"/></a>
                                <a onClick={this.onOpen.bind(this, 'aric-editor')} href="https://www.npmjs.com/package/aric-editor" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaNpm color="white" fontSize="24px"/></a>
                                <a onClick={this.onOpen.bind(this, 'linkedin')} href="https://www.linkedin.com/in/arijitdebroy8b7a85145/" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaLinkedin color="white" fontSize="24px"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Index;