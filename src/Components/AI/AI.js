import React from "react";
import "./AI.scss";

export default function AI() {
    return <div className={"ai section_margin"} id={"artificial "}>
        <div className={"ai-features"}>
            <h2>
                What is AI
            </h2>
            <p>
                We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
            </p>
        </div>
        <div className={"ai_header"}>
            <h1 className={"gradient_text"}>
                The possibilities are beyond your imagination
            </h1>
            <p>Explore The Library</p>
        </div>
        <div className={"chat-container"}>
            {
                [
                    {
                        header: "Chatbots",
                        text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
                    },
                    {
                        header: "Knowledgebase",
                        text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b. "
                    },
                    {
                        header: "Education",
                        text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b. "
                    },
                ].map((value, index) => {
                    return<div key={index}>
                        <h3>{value.header}</h3>
                        <p>{value.text}</p>
                    </div>
                })
            }
        </div>
    </div>
}