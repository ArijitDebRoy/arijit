import React from 'react';
import { FaGithub, FaLinkedin, FaNpm, FaHeart, FaRegCopyright } from 'react-icons/fa';

function Footer() {

    const onOpen = (evt) => {
        analytics.track('Redirected', {
            plan: `Visited ${evt}`
        });
    };

    return(
        <section className="footer flex justify-around bg-gray-900 p-5">
            <h4 className="inline-flex font-scp text-white">Made with &nbsp; <FaHeart className="heart-beat" color="red" fontSize="24px"/> &nbsp; by Arijit</h4>
            <div className="inline-flex social">
                <a onClick={() => onOpen('github')} href="https://github.com/ArijitDebRoy" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaGithub color="white" fontSize="24px"/></a>
                <a onClick={() => onOpen('aric-editor')} href="https://www.npmjs.com/package/aric-editor" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaNpm color="white" fontSize="24px"/></a>
                <a onClick={() => onOpen('linkedin')} href="https://www.linkedin.com/in/arijitdebroy8b7a85145/" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FaLinkedin color="white" fontSize="24px"/></a>
            </div>
            <h4 className="inline-flex font-scp text-white copyright"><FaRegCopyright color="white" fontSize="24px"/> &nbsp; Copyright {new Date().getFullYear()} Arijit Deb Roy</h4>
        </section>
    );
}

export default Footer;