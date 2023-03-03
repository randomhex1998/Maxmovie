import React from 'react';

const Input = ({inputClass , inputType }) => {
    return (
        <input type={inputType} className={inputClass} />
    );
};

export default Input;