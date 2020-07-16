/* eslint-disable no-control-regex */
import React, {Component} from 'react';
import Layout from "../components/layout";
import dynamic from 'next/dynamic';
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });
import { FaSyncAlt } from 'react-icons/fa';

class JsonViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            json: {},
            input: ""
        }
    }

    onChange = (e) => {
        e.persist();
        try {
            this.setState({
                ...this.state,
                input: (e.target.value
                    .replace(/\b/g, "")
                    .replace(/\f/g, "")
                    .replace(/\\/g, "")
                    .replace(/\t/g, "")
                    .replace(/\r/g, "")
                    .replace(/\n/g, "")
                    .replace(/[^\x00-\x7F]/g, "")
                    .replace(/[\u{0080}-\u{FFFF}]/gu, ""))
            });
        }catch (e) {
            console.log(e);
        }
    };

    convert = () => {
        try {
            this.setState({
                ...this.state,
                json: JSON.parse(this.state.input)
            });
        }catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <Layout>
                <div className="site-container bg-gray-800">
                    <div className="json-viewer-container">
                        <section className="raw-json">
                            <div className="flex justify-between items-center w-full mb-2 text-white">
                                <h4 className="font-scp font-xl">Input JSON</h4>
                                <FaSyncAlt className="mx-2 cursor-pointer" onClick={this.convert}/>
                            </div>
                            <textarea value={this.state.input} onChange={this.onChange} />
                        </section>
                        <section className="rjv-json">
                            <div className="flex justify-start items-center w-full mb-2 text-white">
                                <h4 className="font-scp font-xl">Output Pretty JSON</h4>
                            </div>
                            <div className="json-output">
                                <ReactJson src={this.state.json} theme="monokai"/>
                            </div>
                        </section>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default JsonViewer;