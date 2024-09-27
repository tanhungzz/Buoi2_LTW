import React from 'react';

const Item = ({ link, content }) => {
    return (
        <li>
            <a href={link}>{content}</a>
        </li>
    );
};

export default Item;