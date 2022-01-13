import React from 'react'
import PropTypes from 'prop-types';

function Title({ children }) {
    return (
        <h1>{children}</h1>
    )
}

Title.propTypes = {
    children: PropTypes.node.isRequired
}

export default Title
