import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ showLabel = true, size = "medium", isDisabled = false }) =>
{
    return (
        <>
            {showLabel &&
                <label for="input">Label</label>
            }
            <input
                id="input"
                name="input"
                placeholder="Enter text"
                type="text"
                disabled={isDisabled}
                className={size}
            />
        </>
    )
};

Input.propTypes = {
    showLabel: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    isDisabled: PropTypes.bool,
};

export default Input;