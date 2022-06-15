import React, { Component, Fragment }  from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubePage extends Component {
    render() {
        return (
            <Fragment>
                <h3>Youtube Component</h3>
                <hr />
                <YoutubeComp title="earth day" desc="oke deh" time="8.30" />
                <YoutubeComp title="revolution" desc="coba aja" time="2.20" />
                <YoutubeComp title="green garden" desc="future day" time="3.12" />
                <YoutubeComp title="hero of ferelden" desc="dragon age" time="4.28" />
                <YoutubeComp title="gerald from terivia" desc="the witcher" time="3.38" />
                <YoutubeComp /> 
            </Fragment>
        )
    }
}

export default YoutubePage;