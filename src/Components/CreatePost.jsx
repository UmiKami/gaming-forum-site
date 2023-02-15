import {
    faClose,
    faFileAudio,
    faFileImage,
    faFileVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const CreatePost = ({ openModal, setOpenModal, setAudioURL, setVideoURL, setImgURL }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imgFile, setImgFile] = useState([])
    const [videoFile, setVideoFile] = useState([])
    const [audioFile, setAudioFile] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        
        if(imgFile.length){
            formData.append('image' ,imgFile[0])
        }
        if(videoFile.length){
            formData.append('video',videoFile[0])
        }
        if(audioFile.length){
            formData.append('audio', audioFile[0])
        }

        // console.log(formData.get("image"));
        // console.log(formData.get("video"));
        // console.log(formData.get("audio"));

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axios.post("http://10.0.0.247:3001/bucket/upload", formData, config)
            .then(response => {
                let data = response.data
                console.log(data);
                
                setAudioURL(data.audioURL)
                setVideoURL(data.videoURL)
                setImgURL(data.imgURL)
            })
            .catch(error=> console.error(error))

        setAudioFile([])
        setImgFile([])
        setVideoFile([])
    }

    console.log(openModal);

    console.log("Image File: ", imgFile);
    console.log("Video File: ", videoFile);
    console.log("Audio File: ", audioFile);

    return (
        <div
            className={`post-modal tw-bg-[#ffff] tw-absolute tw-top-[125%] tw-left-[50%] col-12 col-sm-11 col-lg-10 col-xl-9 col-xxl-7 tw-h-[${
                !openModal ? "0" : "40rem"
            }] tw-overflow-hidden tw-transition-all tw-ease-in-out tw-delay-50 tw--translate-x-[50%] transform-gpu rounded`}
        >
            <div className="d-flex justify-content-center py-3 mb-3 mr-0 tw-text-xl">
                <div className="d-flex align-items-center justify-content-between col-11">
                    <h1 className="tw-font-medium">New Thread</h1>
                    <FontAwesomeIcon
                        icon={faClose}
                        className="tw-cursor-pointer "
                        onClick={() => setOpenModal(false)}
                    />
                </div>
            </div>

            <form
                className="d-flex flex-column align-items-center"
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Title"
                    variant="outlined"
                    className="col-11 mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Body"
                    variant="outlined"
                    className="col-11"
                    multiline
                    rows={12}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <ButtonGroup
                    variant="outlined"
                    aria-label="outlined primary button group"
                    size="large"
                    className="col-11 mt-2 gap-2"
                >
                    <Button
                        className="border border-primary rounded"
                        component="label"
                    >
                        <input
                            type="file"
                            name="img"
                            id="imgUpload"
                            accept="image/jpeg, image/png, image/gif"
                            onChange={(e) => setImgFile(e.target.files)}
                            hidden
                        />
                        <FontAwesomeIcon
                            className="tw-text-2xl"
                            icon={faFileImage}
                        />
                    </Button>
                    <Button
                        className="border border-primary rounded"
                        component="label"
                    >
                        <input
                            type="file"
                            name="video"
                            id="videoUpload"
                            accept="video/mp4, video/mov, video/webM"
                            onChange={(e) => setVideoFile(e.target.files)}
                            hidden
                        />
                        <FontAwesomeIcon
                            className="tw-text-2xl"
                            icon={faFileVideo}
                        />
                    </Button>
                    <Button
                        className="border border-primary rounded"
                        component="label"
                    >
                        <input
                            type="file"
                            name="audio"
                            id="audioUpload"
                            accept="audio/mp3, audio/wav, audio/ogg"
                            onChange={(e) => setAudioFile(e.target.files)}
                            hidden
                        />
                        <FontAwesomeIcon
                            className="tw-text-2xl"
                            icon={faFileAudio}
                        />
                    </Button>
                </ButtonGroup>
                <Button
                    variant="contained"
                    className="col-11 mt-4 mb-4 tw-h-[2.8rem]"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CreatePost;
