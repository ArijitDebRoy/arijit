import React, { Component } from "react";
import Head from 'next/head';
import SlackWebHook from '../services/slack';
import PropTypes from "prop-types";
export const config = { amp: true };

export default class Layout extends Component {

    componentDidCatch(error, info) {
        SlackWebHook.sendSlackMessage('Layout','componentDidCatch',`${error.message}-${info}`);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Arijit's Portfolio</title>
                </Head>
                <main className="">
                    {this.props.children}
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
