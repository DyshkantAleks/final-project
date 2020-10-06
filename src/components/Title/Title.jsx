import React from "react";
import './title.scss'

export const Title = (props) => {
    const {text} = props;
    return (
        <h2 className={'title'}>{text}</h2>
    )
}