import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import PageNotFound from "./Views/PageNotFound";
import Navbar from "./Components/Navbar";

// Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Layout = () => {
    const [videoURL, setVideoURL] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [audioURL, setAudioURL] = useState("");

    return (
        <main className="tw-min-h-screen tw-bg-[#3A0CA3]">
            <Navbar setAudioURL={setAudioURL} setImgURL={setImgURL} setVideoURL={setVideoURL}/>
            <Routes>
                <Route path="/" element={<Home videoURL={videoURL} imgURL={imgURL} audioURL={audioURL} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
    );
};

export default Layout;
