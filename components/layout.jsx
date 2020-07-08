import React, { Component } from "react";
import Head from 'next/head';
import SlackWebHook from '../services/slack';
import Navbar from './navbar';
import Footer from './footer';
import PropTypes from "prop-types";
import LogRocket from 'logrocket';
export const config = { amp: true };

export default class Layout extends Component {

    componentDidCatch(error, info) {
        SlackWebHook.sendSlackMessage('Layout','componentDidCatch',`${error.message}-${info}`);
    }

    componentDidMount() {
        LogRocket.init('qoroxr/my-portfolio');
        LogRocket.getSessionURL(function (sessionURL) {
            analytics.track('LogRocket', {
                sessionURL: sessionURL,
            });
        });
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Arijit's Portfolio</title>
                </Head>
                <main className="overflow-auto">
                    <Navbar/>
                    {this.props.children}
                    <Footer/>
                </main>
            </div>
        )
    }
}

const propTypes = {
    /** Children element */
    children: PropTypes.node,
};

const defaultProps = {
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
