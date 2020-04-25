import React from "react";
import PropTypes from "prop-types";
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

const propTypes = {
    Component: PropTypes.object,
    pageProps: PropTypes.object,
};

const defaultProps = {
};

MyApp.propTypes = propTypes;
MyApp.defaultProps = defaultProps;
