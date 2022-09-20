import axios from "axios";
import { useState, useEffect } from "react";

export default function App(){

    const [produtos, setProdutos] = useState({});

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((response) => {
            console.log(response)
        })
    }, []);

    return (
        <>
            <h1>React Axios</h1>
        </>
    )
}






