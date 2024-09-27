import React from 'react';
import Item from './Item';

const Menu = () => {
    const list = [
        { link: 'https://example.com/1', content: 'Liên kết 1' },
        { link: 'https://example.com/2', content: 'Liên kết 2' },
        { link: 'https://example.com/3', content: 'Liên kết 3' },
    ];

    const userInfo = "Trần Tấn Hưng";

    return (
        <div>
            <div>{userInfo}</div>
            <ul className='menu'>
                {list.map((item, index) => (
                    <Item key={index} link={item.link} content={item.content} />
                ))}
            </ul>
        </div>
    );
};

export default Menu;