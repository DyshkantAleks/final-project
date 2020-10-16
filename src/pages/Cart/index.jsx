import React from "react";
import {Header} from "../../commons/Header/Header";
import { Counter } from "../../components/Counter";



export const CartPage = () => {
    return (
        <>
            <Header/>
            <h1>Cart page</h1>
            <Counter/>
        </>
    )
}