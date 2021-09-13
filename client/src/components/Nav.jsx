import React, { useState } from "react";
import './Nav.css'
import { SidebarData } from './SidebarData';

const Nav = (props) => {

    const [side, setSide] = useState(false);

    const showSidebar = () => setSide(!side);

    return (
        <>
            <div className="navbar">
                <span onClick={showSidebar} className="menu-bars" type="button">&#9776;</span>
            </div>
            <nav className={side ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <h1>Pablo</h1>
                        <h1 className="ms-3">Padilla</h1>
                        <div className="d-flex justify-content-between">
                            <div style={{height:"1.5rem", width:"1.5rem", backgroundColor:"black"}}/>
                            <div style={{height:"1.5rem", width:"1.5rem", backgroundColor:"black"}}/>
                            <div style={{height:"1.5rem", width:"1.5rem", backgroundColor:"black"}}/>

                        </div>
                    </li>
                    <hr />
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                    <h5>{item.title}</h5>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Nav;