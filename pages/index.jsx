import React, {Component} from 'react';
import Layout from "../components/layout";
import _ from "lodash";
import moment from "moment";
import $ from "jquery";
import { BsTerminal } from "react-icons/bs";

const CMD = ['whoami', 'getdate', 'getaddr', 'getemail', 'getmob', 'getlist'];

class Index extends Component {

    state = {
        cursor: "",
        cmd: ""
    };

    componentDidMount() {
        analytics.track('Visited', {
            event: 'An anonymous user opened my portfolio'
        });
        setInterval(() => {
            this.setState({
                ...this.state,
                cursor: this.state.cursor === "" ? "_" : ""
            })
        }, 500)
    }

    onOpen = (evt) => {
        analytics.track('Redirected', {
            plan: `Visited ${evt}`
        });
    };

    consoleCmd = (e) => {
        e.persist();
        this.setState({
            ...this.state,
            cmd: e.target.value
        }, () => {
            if(e.keyCode === 13) {
                if(_.indexOf(CMD, e.target.value) > -1) {
                    this.setCmd(e.target.value);
                }else {
                    $(".addon-text").append("<pre className='mb-5'>Invalid command.</pre>");
                    $(".console-inner").scrollTop($(".console-inner")[0].scrollHeight);
                }
            }
        });
    };

    setCmd = (value) => {
        this.setState({
            ...this.state,
            cmd: value
        });
        switch (value) {
        case "whoami" :
            $(".addon-text").append("<pre className='mb-5'>Arijit Deb Roy</pre>");
            $(".console-inner").scrollTop($(".console-inner")[0].scrollHeight);
            break;
        case "getdate" :
            $(".addon-text").append("<pre className='mb-5'>" + moment().format("LLL") + "</pre>");
            $(".console-inner").scrollTop($(".console-inner")[0].scrollHeight);
            break;
        case "getaddr" :
            $(".addon-text").append("<pre>AA 7/4/10 Deshbandhunagar, Baguiati</pre><pre>N. 24 Pngs, Kolkata-700059</pre><pre>West Bengal</pre className='mb-5'><pre>India</pre>");
            $(".console-inner").scrollTop($(".console-inner")[0].scrollHeight);
            break;
        case "getemail" :
            $(".addon-text").append("<pre className='mb-5'>arijitdebroy24@gmail.com</pre>");
            $(".console-inner").scrollTop($(".console-inner")[0].scrollHeight);
            break;
        case "getmob" :
            $(".addon-text").append("<pre>+91 8961699379</pre><pre className='mb-5'>+91 7980905598</pre>");
            $(".console-inner").scrollTop($(".console-inner")[0].scrollHeight);
            break;
        case "getlist" :
            $(".addon-text").append("<pre>Arijit Deb Roy</pre>");
            $(".addon-text").append("<pre>AA 7/4/10 Deshbandhunagar, Baguiati</pre><pre>N. 24 Pngs, Kolkata-700059</pre><pre>West Bengal</pre><pre>India</pre>");
            $(".addon-text").append("<pre>arijitdebroy24@gmail.com</pre>");
            $(".addon-text").append("<pre className='mb-5'>+91 8961699379</pre><pre>+91 7980905598</pre>");
            $(".console-inner").scrollTop($(".console-inner")[0].scrollHeight);
            break;
        default:
            $(".addon-text").append("<pre className='mb-5'>Invalid command.</pre>");
            $(".console-inner").scrollTop($(".console-inner")[0].scrollHeight);
        }
    };

    render() {
        return (
            <Layout>
                <div className="site-container bg-gray-800">
                    {/*desktop - intro*/}
                    <div className="flex justify-around items-center">
                        <div className="name-template">
                            <h1 className="font-aw text-6xl text-white">Hey,</h1>
                            <h1 className="font-aw text-6xl text-white mb-1">I'm Arijit Deb Roy</h1>
                            <h2 className="font-aw text-2xl text-white mb-2">Front End Developer</h2>
                            <h4 className="font-scp text-md text-white mb-5">
                                Want to put to use my creative skills,
                                technologies and innovative thoughts that
                                will benefit the Organization in the long
                                run and also help me in building my
                                professional career along with the growth
                                of the organization.
                            </h4>
                            <h4 className="font-scp text-md text-white mb-2">Interests</h4>
                            <div className="flex justify-start flex-wrap skill-chip">
                                <span>Coding nice web art</span>
                                <span>Vertual bug hunting</span>
                                <span>Anything about JS</span>
                            </div>
                        </div>
                        <div className="img-template">
                            <img src="/images/me.jpg" alt="arijit deb roy" className="avatar"/>
                        </div>
                    </div>

                    {/*desktop - skills bubble*/}
                    <div className="skill-wrapper relative">
                        <div className="bubble one">
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react.js"/>
                        </div>
                        <div className="bubble two">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/websocket-logo-png-transparent.png" alt="websocket" className="p-4 mt-1"/>
                        </div>
                        <div className="bubble three">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" alt="socket.io" className="p-3"/>
                        </div>
                        <div className="bubble four">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="next.js" className="p-3 mt-2"/>
                        </div>
                        <div className="bubble five">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/graphql-logo-png-transparent.png" alt="graphql" className="p-4"/>
                        </div>
                        <div className="bubble six">
                            <img src="https://png2.cleanpng.com/sh/27a4c27432e1adac5d2bbc87b5bfd3c6/L0KzQYm3VMI2N5d1j5H0aYP2gLBuTf5wbJYyguU2anH5ccTqkvlxfF58fdQ2YYDzfLrqggRqd58yfep5cnX2g37xk71kd551RadqZUDpSIXsVfU4PWQ8RqI9NkS8RIaBUcUzPGcAS6ICMEO7Roq1kP5o/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png" alt="node.js" className="p-3"/>
                        </div>
                        <div className="bubble seven">
                            <img src="https://png2.cleanpng.com/sh/b56854052c5930a7169992d99d406952/L0KzQYm3V8IxN5xojJH0aYP2gLBuTfpifpJ4eARycISwfLFuj71pfJ5xRdV1aYCwccP7TfpifpJ4eARycISwfLFuj702amY2UKprMXG1cYLtWb4zPGM9TqsDOUG4Q4O3V8AxPmY7Tqg7LoDxd1==/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a2a1f9.2428698915320700656662.png" alt="javascript" className="p-3"/>
                        </div>
                        <div className="bubble eight">
                            <img src="https://png2.cleanpng.com/sh/634abbef690783cad95dd321ca672143/L0KzQYm3VMAzN6RvfZH0aYP2gLBuTf1wdph0fNQ2aX7mPbT2jgB2fJZ3ReV4ZoT6ccPsTfJ2e5pzfeV8LYPydsXAggJmNZUyetNELXzoccfsk702aZQ3UaMAZHTnRYi6Wb4xP2Q7SKsDNkG4QoOAUMA3O2gASKgBLoDxd1==/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915ddd5739.0736098615227006379066.png" alt="mongo" className="p-3"/>
                        </div>
                        <div className="bubble nine">
                            <img src="https://png2.cleanpng.com/sh/f52a80eb9f06e0cff00d890abca50de0/L0KzQYm3V8E5N5pnR91yc4Pzfri0lwVmNZt4RdxqdnH2c8PwkQQudJpnitN7eT3kfrj8jPFzcqQyitdqY4SwhsbsTfp0NWZnTNdrZUHmQIq4Wck0NmkATaI7OEK8QYa6Ucg5P2I4SqI8N0OxgLBu/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1c091993.8950282915318871320373.png" alt="vue.js" className="p-5 mt-3"/>
                        </div>
                        <div className="bubble ten">
                            <img src="https://png2.cleanpng.com/sh/3267a0c52b1aa07cd3ae4789cecc05aa/L0KzQYm3VME0N5h4iZH0aYP2gLBuTfdqfF5oh995dYTogn7wgB9ve154h9h9d3H1dX75hgBwe5p5hARELYPydsXAggJmNZVqReJ7aXPoPcXoh702aZU1TKQCM0K0QbO9U744PGE3S6QCOEG4QoS8Wcc6O2o2S6cBLoDxd1==/kisspng-git-computer-icons-software-repository-software-de-price-tag-5ad04273211b63.7402327815235979391356.png" alt="git" className="p-3"/>
                        </div>
                        <div className="bubble eleven">
                            <img src="https://www.designbust.com/download/168/png/laravel_icon512.png" alt="laravel" className="p-3"/>
                        </div>
                        <div className="bubble twelve">
                            <img src="https://png2.cleanpng.com/sh/eae15c68c9d1330eccce340a6d6cde77/L0KzQYm3VcEyN5xpfZH0aYP2gLBuTgJmbKZ9ReRuYXP3PbvolvF0a6NuiOY2doXoPbv6TgNqdphxfZ95YXfoPbL3kPxqa5J5RadqZkXmdLa7UsRmbWI6Rqo5NkG8R4q9UcUzPmE6UKYBOEG4QYS1kP5o/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde424ee15.8061979615260584681513.png" alt="redux" className="p-1"/>
                        </div>
                        <div className="bubble thirteen">
                            <img src="https://png2.cleanpng.com/sh/4c7646d2dcb0e22dd47b68f05a8737ee/L0KzQYm3WcIxN5Z1eZH0aYP2gLBuTfpifpJ4eARycISweMX0jMUua5J4e9NtaX7qPcT7mfxmNaRtfdd9cz3mg8S6TcVjaWU1fao5N0TpQbS3TsU3OWo4TKI5MUW2R4WAWMI4OmU8UZD5bne=/kisspng-javascript-html5-cascading-style-sheets-css3-5ba40e8074f1c0.561934001537478272479.png" alt="react.js" className="p-3 mt-3"/>
                        </div>
                        <div className="bubble fourteen">
                            <img src="https://png2.cleanpng.com/sh/d04af09c2b28897d58b5263c82723f85/L0KzQYm3VcEzN6RufZH0aYP2gLBuTfJwd6V4jORqcD31dcT3jB50cadqReluYj3ndcTwhB4uf5ZnRdZudnXvf8H0hf51NZ10RadqZka6RrS3V8U2O2c2RqgEMUi4Q4SBUcUzPmI1SagENkS7QIe1kP5o/kisspng-bootstrap-responsive-web-design-web-development-lo-5af676c0755361.6918533815261016964806.png" alt="bootstrap"/>
                        </div>
                        <div className="bubble fifteen">
                            <img src="https://png2.cleanpng.com/sh/061f159897ddc1ed5adb011e0f9c9ae4/L0KzQYm3VMEyN5d3iZH0aYP2gLBuTf16e6JxRdZqdHHlccTsTgdmal5pfehubHBzfbb1lL1kd551jeZucj32f7f7lBFzbV5ph955aHnxPYbogBUzQGFqe9Y7YUW5Poq7WMY4OWc8Sac7M0S5QIK4UMg1OGUziNDw/kisspng-mysql-database-web-development-computer-software-dolphin-5ace280ecd2a56.9486716715234601108404.png" alt="mysql" className="p-5"/>
                        </div>
                    </div>

                    {/*all - console*/}
                    <div className="flex justify-around items-center">
                        <div className="console">
                            <div className="console-inner">
                                <div className="console-head">
                                    <span className="flex justify-start"><BsTerminal size={25}/>&nbsp;vercel@arijt-deb-roy:~$</span>
                                </div>
                                <div className="static-text">
                                    <pre className="mb-2">Welcome to Ubuntu 18.04.4 LTS (GNU/Linux 4.15.0-1065-aws x86_64)</pre>

                                    <pre>* Documentation:  https://help.ubuntu.com</pre>
                                    <pre>* Management:     https://landscape.canonical.com</pre>
                                    <pre className="mb-2">* Support:        https://ubuntu.com/advantage</pre>

                                    <pre>System information as of Wed Jul  8 08:08:28 UTC 2020</pre>

                                    <pre>System load:  0.0               Processes:           136</pre>
                                    <pre>Usage of /:   8.3% of 96.88GB   Users logged in:     0</pre>
                                    <pre>Memory usage: 34%               IP address for eth0: 172.31.8.38</pre>
                                    <pre className="mb-2">Swap usage:   0%</pre>

                                    <pre className="mb-5">Last login: Tue Jul  7 08:12:38 2020 from 103.77.47.196</pre>
                                </div>
                                <div className="addon-text">
                                </div>
                                <div className="flex justify-start cmd-line">
                                    <pre className="text-green-400">vercel@arijt-deb-roy:~$</pre>
                                    <input type="text" placeholder={this.state.cursor} value={this.state.cmd} className="console-input ml-1" onKeyUp={this.consoleCmd} onChange={this.consoleCmd}/>
                                </div>
                            </div>
                        </div>
                        <div className="suggestion">
                            <div className="suggestion-inner">
                                <h2 className="font-aw text-2xl text-white mb-4">Available Commands</h2>
                                <ol>
                                    <li onClick={this.setCmd.bind(this, "whoami")}>whoami</li>
                                    <li onClick={this.setCmd.bind(this, "getdate")}>getdate</li>
                                    <li onClick={this.setCmd.bind(this, "getaddr")}>getaddr</li>
                                    <li onClick={this.setCmd.bind(this, "getmob")}>getmob</li>
                                    <li onClick={this.setCmd.bind(this, "getemail")}>getemail</li>
                                    <li onClick={this.setCmd.bind(this, "getlist")}>getlist</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Index;