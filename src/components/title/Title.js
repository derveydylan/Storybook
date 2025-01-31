import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ alignment = "left", text }) =>
{
    return (
        <h1 style={{ textAlign: alignment }}>
            {text}
        </h1>
    )
};

Title.propTypes = {
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    text: PropTypes.string.isRequired
};

export default Title;