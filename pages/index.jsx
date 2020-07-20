import React, {Component} from 'react';
import Layout from "../components/layout";
import _ from "lodash";
import moment from "moment";
import $ from "jquery";
import { BsTerminal } from "react-icons/bs";

const CMD = ['whoami', 'getresume', 'getaddr', 'getemail', 'getmob', 'getlist'];

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
        case "getresume" :
            $(".addon-text").append("<pre className='mb-5'>" + moment().format("LLL") + "</pre>");
            $(".addon-text").append("<pre className='mb-5'><a href='https://drive.google.com/file/d/197afduI0eBNTxZsYMU9ywyrXkMYf1yR6/view?usp=sharing' target='_blank' rel='noopener noreferrer'>https://drive.google.com/file/d/197afduI0eBNTxZsYMU9ywyrXkMYf1yR6/view?usp=sharing</a></pre>");
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
            $(".addon-text").append("<pre className='mb-5'><a href='https://drive.google.com/file/d/197afduI0eBNTxZsYMU9ywyrXkMYf1yR6/view?usp=sharing' target='_blank' rel='noopener noreferrer'>https://drive.google.com/file/d/197afduI0eBNTxZsYMU9ywyrXkMYf1yR6/view?usp=sharing</a></pre>");
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
                    {/*all - intro*/}
                    <div className="md:flex justify-around items-center intro">
                        <div className="name-template">
                            <h1 className="font-aw text-6xl text-white">Hey,</h1>
                            <h1 className="font-aw text-6xl text-white mb-1">I'm Arijit Deb Roy</h1>
                            <h2 className="font-aw text-2xl text-white mb-2">Front End Developer</h2>
                            <h4 className="font-scp text-md text-white mb-5">
                                Though my current designation is front-end developer,
                                I’m comfortable in both front-end and back-end.
                                I want to use my creative skills, technologies and innovative thoughts to grow someone's
                                business or transform someone's dream project into reality.
                            </h4>
                            <h4 className="font-scp text-md text-white mb-2">Interests</h4>
                            <div className="flex justify-start flex-wrap interest-chip">
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
                    <div className="skill-wrapper relative hide-on--mobile">
                        <div className="bubble one">
                            <img src="/images/react.webp" alt="react.js"/>
                        </div>
                        <div className="bubble two">
                            <img src="/images/ws.png" alt="websocket" className="p-4 mt-1"/>
                        </div>
                        <div className="bubble three">
                            <img src="/images/socketio.svg" alt="socket.io" className="p-3"/>
                        </div>
                        <div className="bubble four">
                            <img src="/images/nextjs.svg" alt="next.js" className="p-3 mt-2"/>
                        </div>
                        <div className="bubble five">
                            <img src="/images/graphql.png" alt="graphql" className="p-4"/>
                        </div>
                        <div className="bubble six">
                            <img src="/images/nodejs.png" alt="node.js" className="p-3"/>
                        </div>
                        <div className="bubble seven">
                            <img src="/images/js.png" alt="javascript" className="px-6 py-3"/>
                        </div>
                        <div className="bubble eight">
                            <img src="/images/mongo.png" alt="mongo" className="px-6 py-2"/>
                        </div>
                        <div className="bubble nine">
                            <img src="/images/vuejs.png" alt="vue.js" className="p-5 mt-3"/>
                        </div>
                        <div className="bubble ten">
                            <img src="/images/git.png" alt="git" className="p-3"/>
                        </div>
                        <div className="bubble eleven">
                            <img src="/images/laravel.png" alt="laravel" className="p-3"/>
                        </div>
                        <div className="bubble twelve">
                            <img src="/images/redux.png" alt="redux" className="p-3"/>
                        </div>
                        <div className="bubble thirteen">
                            <img src="/images/stack.png" alt="stack" className="p-3 mt-6"/>
                        </div>
                        <div className="bubble fourteen">
                            <img src="/images/bootstrap.png" alt="bootstrap" className="p-2"/>
                        </div>
                        <div className="bubble fifteen">
                            <img src="/images/mysql.png" alt="mysql" className="p-5"/>
                        </div>
                    </div>

                    {/*mobile - skills chip*/}
                    <div className="hide-on--desktop mb-8">
                        <h4 className="font-scp text-md text-white mb-2">Skills</h4>
                        <div className="flex flex-wrap skill-chip">
                            <span>
                                <img src="/images/react.webp" alt="react.js"/>
                                React.js
                            </span>
                            <span>
                                <img src="/images/nextjs.svg" alt="next.js"/>
                                Next.js
                            </span>
                            <span>
                                <img src="/images/vuejs.png" alt="vue.js" />
                                Vue.js
                            </span>
                            <span>
                                <img src="/images/laravel.png" alt="laravel"/>
                                Laravel
                            </span>
                            <span>
                                <img src="/images/mysql.png" alt="mysql" />
                                MySQL
                            </span>
                            <span>
                                <img src="/images/stack.png" alt="stack"/>
                                JS/HTML/CSS
                            </span>
                            <span>
                                <img src="/images/bootstrap.png" alt="bootstrap"/>
                                Bootstrap
                            </span>
                            <span>
                                <img src="/images/redux.png" alt="redux"/>
                                Redux
                            </span>
                            <span>
                                <img src="/images/git.png" alt="git" />
                                Git
                            </span>
                            <span>
                                <img src="/images/mongo.png" alt="mongo"/>
                                Mongo
                            </span>
                            <span>
                                <img src="/images/nodejs.png" alt="node.js"/>
                                Node.js
                            </span>
                            <span>
                                <img src="/images/graphql.png" alt="graphql"/>
                                GraphQL
                            </span>
                            <span>
                                <img src="/images/ws.png" alt="websocket"/>
                                WebSocket
                            </span>
                            <span>
                                <img src="/images/socketio.svg" alt="socket.io"/>
                                Socket.io
                            </span>
                        </div>
                    </div>

                    {/*all - console*/}
                    <div className="md:flex justify-around items-center">
                        <div className="console">
                            <div className="console-inner">
                                <div className="console-head">
                                    <span className="flex justify-start"><BsTerminal size={25}/>&nbsp;vercel@arijit-deb-roy:~$</span>
                                </div>
                                <div className="static-text">
                                    <pre className="mb-2">Welcome to Ubuntu 18.04.4 LTS (GNU/Linux 4.15.0-1065-aws x86_64)</pre>

                                    <pre>* Documentation:  https://help.ubuntu.com</pre>
                                    <pre>* Management:     https://landscape.canonical.com</pre>
                                    <pre className="mb-2">* Support:        https://ubuntu.com/advantage</pre>

                                    <pre>System information as of Wed Jul  8 08:08:28 UTC 2020</pre>

                                    <pre>System load:  0.0               Processes:           136</pre>
                                    <pre>Usage of /:   8.3% of 96.88GB   Users logged in:     0</pre>
                                    <pre>Memory usage: 34%               IP address for eth0: 192.168.0.1</pre>
                                    <pre className="mb-2">Swap usage:   0%</pre>

                                    <pre className="mb-5">Last login: {new Date().toString()} from 127.0.0.1</pre>
                                </div>
                                <div className="addon-text">
                                </div>
                                <div className="flex justify-start cmd-line">
                                    <pre className="text-green-400">vercel@arijit-deb-roy:~$</pre>
                                    <input type="text" placeholder={this.state.cursor} value={this.state.cmd} className="console-input ml-1" onKeyUp={this.consoleCmd} onChange={this.consoleCmd}/>
                                </div>
                            </div>
                        </div>
                        <div className="suggestion">
                            <div className="suggestion-inner">
                                <h2 className="font-aw text-2xl text-white mb-4">Available Commands</h2>
                                <ol>
                                    <li onClick={this.setCmd.bind(this, "whoami")}>whoami</li>
                                    <li onClick={this.setCmd.bind(this, "getresume")}>getresume</li>
                                    <li onClick={this.setCmd.bind(this, "getaddr")}>getaddr</li>
                                    <li onClick={this.setCmd.bind(this, "getmob")}>getmob</li>
                                    <li onClick={this.setCmd.bind(this, "getemail")}>getemail</li>
                                    <li onClick={this.setCmd.bind(this, "getlist")}>getlist</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/*quote*/}
                    <div className="quote-wrapper">
                        <h4 className="mb-5 font-scp quote text-white italic">
                            &nbsp;Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.&nbsp;
                        </h4>
                        <h4 className="flex justify-end mr-5 mb-5 font-scp text-white italic">
                            - A. P. J. Abdul Kalam
                        </h4>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Index;