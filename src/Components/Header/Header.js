import React from "react";
import "./header.scss";
import img from "./img.png"
export default function Header() {
    return <div className={"header section_padding"} id={"home"}>
        <div className={"header-text"}>
            <h1 className={"gradient_text"}>
                Let build something which better the world in OpenAI
            </h1>
            <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked
                of.
            </p>
            <div className={"header-input"}>

                    <input type={"text"} placeholder={"Your Email Address"}/>
                    <button type={"button"} className={'btn'}>Get Started</button>

            </div>
            <div className={"people-image"}>

                    <img src={"https://i.pinimg.com/736x/c6/48/5e/c6485e024971b0998d5aa200f598ae67.jpg"} alt={"ai"}/>



                <p>1,600 people requested access a visit in last some hours</p>
            </div>

        </div>
        <div className={"header-image"}>
            <img src={img} alt={""}/>
        </div>
    </div>

}