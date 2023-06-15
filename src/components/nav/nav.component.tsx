import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.style.css';

interface NAV_PROPS {
    config: {
        name: string,
        link: string,
        key: string | number
    }[],
    className?: String
}

const Nav: React.FC<NAV_PROPS> = (props) => {
    return <nav>
        {
            props.config.map(item => <NavLink
                key={item.key}
                to={item.link}
                className={({ isActive }) =>isActive?'active':''}
            >
                {item.name}
            </NavLink>)
        }
    </nav>
}

export default Nav;