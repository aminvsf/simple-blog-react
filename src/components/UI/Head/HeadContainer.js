import React from "react";

import './HeadContainer.css';

const HeadContainer = (props) => {
    return <div className={'head-container'}>
        <h2>{props.title}</h2>
    </div>;
};

export default HeadContainer;

