import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, TextField } from "@mui/material";

const CreatePost = ({openModal, setOpenModal}) => {
    return (
        <div
            className={`post-modal tw-bg-[#ffff] tw-absolute tw-top-[125%] tw-left-[50%] col-12 col-sm-11 col-lg-10 col-xl-9 col-xxl-7 tw-h-[${
                openModal ? "40rem" : 0
            }] tw-overflow-hidden tw-transition-all tw-ease-in-out tw-delay-50 tw--translate-x-[50%] transform-gpu rounded`}
        >
            <div className="d-flex justify-content-end p-3 mb-4 tw-text-xl ">
                <FontAwesomeIcon
                    icon={faClose}
                    className="tw-cursor-pointer"
                    onClick={() => setOpenModal(false)}
                />
            </div>

            <form className="d-flex flex-column align-items-center">
                <TextField
                    label="Title"
                    variant="outlined"
                    className="col-11 mb-4"
                />
                <TextField
                    label="Body"
                    variant="outlined"
                    className="col-11"
                    multiline
                    rows={12}
                />
                <ButtonGroup
                    variant="outlined"
                    aria-label="outlined primary button group"
                    size="large"
                    className="col-11 mt-2"
                >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </form>
        </div>
    );
};

export default CreatePost;
