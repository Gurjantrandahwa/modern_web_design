import React, {useState} from "react";
import "./Navbar.scss";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const Menu = () => (
        <>
            <p><a href={"#home"}>Home</a></p>
            <p><a href={"#artificial"}>What is AI?</a></p>
            <p><a href={"#possibility"}>Open AI</a></p>
            <p><a href={"#features"}>Studies</a></p>
            <p><a href={"#blogs"}>Library</a></p>
        </>

    )
    return <div className={"navbar_container"}>
        <div className={"navbar-links"}>
            <div className={"logo"}>
                <img src={"https://i.pinimg.com/564x/27/04/15/270415a3b815d93b533cd12291149089.jpg"} alt={"logo"}/>
            </div>
            <div className={"navbar-links-wrapper"}>
                <Menu/>
            </div>
        </div>
        <div className={"navbar-sign"}>
            <p>Sign in</p>
            <button>Sign up</button>
        </div>
        <div className={"navbar-menu"}>
            {
                toggleMenu ? <RiCloseLine color={"fff"} size={27}
                                          onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color={"fff"} size={27}
                        onClick={() => setToggleMenu(true)}/>
            }
            {
                toggleMenu && (
                    <div className={"navbar-menu-container scale-up-center"}>
                        <div className={"navbar-links-container-links"}>
                            <Menu/>
                            <div className={"navbar-links-container-links-sign"}>
                                <p>Sign in</p>
                                <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}