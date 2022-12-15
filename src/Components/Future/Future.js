import React from "react";
import "./Future.scss";

export default function Future() {
    return <div className={"future-container section_padding "} id={"future"}>
        <div className={"header-wrapper"}>
            <h1 className={"gradient_text"}>
                The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
            </h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className={"sub-heading-container"}>
            {
                [
                    {
                        header: "Improving end distrusts instantly ",
                        p: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."

                    },
                    {
                        header: "Become the tended active",
                        p: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
                    },
                    {
                        header: "Message or am nothing",
                        p: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
                    },
                    {
                        header: "Really boy law county ",
                        p: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
                    }
                ].map((value, index) => {
                    return <div key={index} className={"single-header"}>
                        <div>
                            <div className={"line"}/>
                            <h2>{value.header}</h2>
                        </div>


                        <p>{value.p}</p>
                    </div>
                })
            }
        </div>

    </div>
}