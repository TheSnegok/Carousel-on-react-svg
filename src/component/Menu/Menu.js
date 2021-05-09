import React from 'react'

const Menu = (props) => {
        return (
            props.items.map((item, index) => (
                <li key={index} className="list">
                        <h1 key={item}>{item.text}</h1>
                </li>
                )
            )
        )
}

export default Menu;
