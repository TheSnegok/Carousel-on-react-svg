import React from 'react'

const menu = [
    {
        text: 'Studio'
    },
    {
        text: 'Partners'
    },
    {
        text: 'Media'
    },
    {
        text: 'user'
    }
]

export const Menu = () => {
    return (
            menu.map((item, index) => (
                    <li key={index} className="list">
                        <p key={index}>{menu.item}</p>
                    </li>
                )
            )
    )
}

export default Menu;