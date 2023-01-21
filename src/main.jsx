import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout';
import "./styles/main.css"

document.title = "GamerXForum"

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);
