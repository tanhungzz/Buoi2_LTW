import React from 'react';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            Nhấn vào đây
        </button>
    );
};

export default Button;