import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark tw-fixed w-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    GamerXForum
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <div className="btn btn-primary">Create New Post</div>
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                        >
                            Trending
                        </a>
                        <a className="nav-link" href="#">
                            News
                        </a>
                        <a className="nav-link" href="#">
                            Notifications
                        </a>
                        <a className="nav-link">Profile</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
