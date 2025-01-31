import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, color, onClick }) =>
{
    return (
        <button className={`button-${color}`} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes =
{
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["primary", "secondary", "ternary"]).isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps =
{
    onClick: () => alert('Button clicked!'),
};

export default Button;